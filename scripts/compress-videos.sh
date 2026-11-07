#!/usr/bin/env bash
# Compress hero videos for web delivery.
# Output: <name>-mobile.mp4, <name>-desktop.mp4, <name>-desktop.webm,
#         <name>-poster.jpg, <name>-poster.webp
# Originali spostati in public/videos/_originals/ (NON sovrascritti).

set -euo pipefail

# ───────────────────────────────────────────────────────────────────
# Config
# ───────────────────────────────────────────────────────────────────
# Secondi da tagliare alla FINE di ogni video (rimuove l'outro logo Motta).
TRIM_END_SECONDS=2.5

# ───────────────────────────────────────────────────────────────────
# Paths
# ───────────────────────────────────────────────────────────────────
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT/public/videos"
ORIG_DIR="$SRC_DIR/_originals"

mkdir -p "$ORIG_DIR"

# ───────────────────────────────────────────────────────────────────
# Tool checks
# ───────────────────────────────────────────────────────────────────
for tool in ffmpeg ffprobe cwebp awk; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "ERROR: '$tool' not found in PATH." >&2
    echo "  ffmpeg/ffprobe: brew install ffmpeg" >&2
    echo "  cwebp:          brew install webp" >&2
    exit 1
  fi
done

echo "Compress videos: TRIM_END_SECONDS=${TRIM_END_SECONDS}s"
echo "Source: $SRC_DIR"
echo "Originals backup: $ORIG_DIR"
echo ""

# ───────────────────────────────────────────────────────────────────
# Cleanup leftover 2-pass logs from previous interrupted runs
# ───────────────────────────────────────────────────────────────────
cd "$SRC_DIR"
rm -f ffmpeg2pass-*.log ffmpeg2pass-*.log.mbtree

# ───────────────────────────────────────────────────────────────────
# Process each .mp4 that is NOT already an output
# ───────────────────────────────────────────────────────────────────
shopt -s nullglob
for INPUT in "$SRC_DIR"/*.mp4; do
  base=$(basename "$INPUT" .mp4)

  # Skip files that are outputs of a previous run
  case "$base" in
    *-mobile|*-desktop)
      echo "Skipping $base (already an output)"
      continue
      ;;
  esac

  echo "═══════════════════════════════════════════════════════"
  echo "Processing: $base"
  echo "═══════════════════════════════════════════════════════"

  # ── Duration ─────────────────────────────────────────────────
  DURATION=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$INPUT")
  TARGET_DURATION=$(awk "BEGIN {printf \"%.3f\", $DURATION - $TRIM_END_SECONDS}")

  # Verify trim doesn't kill the entire file
  is_positive=$(awk "BEGIN {print ($TARGET_DURATION > 0.5) ? 1 : 0}")
  if [ "$is_positive" != "1" ]; then
    echo "  ERROR: target duration ${TARGET_DURATION}s <= 0.5s. Skipping."
    echo "  (orig: ${DURATION}s, trim: ${TRIM_END_SECONDS}s)"
    continue
  fi

  printf "  Duration: %.2fs → %.2fs (trim end: %ss)\n" \
    "$DURATION" "$TARGET_DURATION" "$TRIM_END_SECONDS"

  # ── Backup original (only if not already backed up) ──────────
  if [ ! -f "$ORIG_DIR/$base.mp4" ]; then
    cp "$INPUT" "$ORIG_DIR/$base.mp4"
    echo "  Backed up original to _originals/"
  else
    echo "  Original already in _originals/ (skipping backup)"
  fi

  # ── 1. Mobile MP4 (H.264, 720p, no audio, faststart) ─────────
  echo "  → ${base}-mobile.mp4"
  ffmpeg -y -loglevel error -i "$INPUT" \
    -t "$TARGET_DURATION" \
    -c:v libx264 -crf 27 -preset slow \
    -vf "scale=1280:-2,fps=30" \
    -an \
    -movflags +faststart \
    -profile:v main -level 4.0 \
    "$SRC_DIR/${base}-mobile.mp4"

  # ── 2. Desktop MP4 (H.264, 1080p, no audio, faststart) ───────
  echo "  → ${base}-desktop.mp4"
  ffmpeg -y -loglevel error -i "$INPUT" \
    -t "$TARGET_DURATION" \
    -c:v libx264 -crf 25 -preset slow \
    -vf "scale=1920:-2,fps=30" \
    -an \
    -movflags +faststart \
    -profile:v high -level 4.2 \
    "$SRC_DIR/${base}-desktop.mp4"

  # ── 3. Desktop WebM (VP9 2-pass, 1080p, no audio) ────────────
  echo "  → ${base}-desktop.webm (pass 1)"
  ffmpeg -y -loglevel error -i "$INPUT" \
    -t "$TARGET_DURATION" \
    -c:v libvpx-vp9 -crf 32 -b:v 0 -row-mt 1 \
    -vf "scale=1920:-2,fps=30" \
    -an \
    -pass 1 -f null /dev/null

  echo "  → ${base}-desktop.webm (pass 2)"
  ffmpeg -y -loglevel error -i "$INPUT" \
    -t "$TARGET_DURATION" \
    -c:v libvpx-vp9 -crf 32 -b:v 0 -row-mt 1 \
    -vf "scale=1920:-2,fps=30" \
    -an \
    -pass 2 \
    "$SRC_DIR/${base}-desktop.webm"

  # ── 4. Poster JPG (at 1s — logo outro non rilevante qui) ─────
  echo "  → ${base}-poster.jpg"
  ffmpeg -y -loglevel error -i "$INPUT" -ss 00:00:01 -vframes 1 \
    -vf "scale=1920:-2" -q:v 4 \
    "$SRC_DIR/${base}-poster.jpg"

  # ── 5. Poster WebP (q 82) ─────────────────────────────────────
  echo "  → ${base}-poster.webp"
  cwebp -quiet -q 82 "$SRC_DIR/${base}-poster.jpg" -o "$SRC_DIR/${base}-poster.webp"

  # ── Cleanup 2-pass log files ─────────────────────────────────
  rm -f "$SRC_DIR"/ffmpeg2pass-*.log "$SRC_DIR"/ffmpeg2pass-*.log.mbtree

  # ── Remove original file from public/videos root ─────────────
  # (it's safely in _originals/, no longer referenced by app)
  rm -f "$INPUT"
  echo "  Removed original from public/videos root"

  # ── Print sizes ──────────────────────────────────────────────
  echo "  Outputs:"
  for f in "${base}-mobile.mp4" "${base}-desktop.mp4" "${base}-desktop.webm" "${base}-poster.jpg" "${base}-poster.webp"; do
    if [ -f "$SRC_DIR/$f" ]; then
      printf "    %-32s %s\n" "$f" "$(ls -lh "$SRC_DIR/$f" | awk '{print $5}')"
    fi
  done
  echo ""
done

echo "═══════════════════════════════════════════════════════"
echo "Done. Final state of public/videos/:"
ls -lh "$SRC_DIR" | grep -v '^d' | grep -v 'total'
