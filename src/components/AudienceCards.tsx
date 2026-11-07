"use client";

import { Reveal } from "./Reveal";
import { useTilt } from "./useTilt";

export type AudienceItem = {
  title: string;
  body: string;
};

type Props = {
  items: readonly AudienceItem[];
  columns?: 2 | 3 | 4;
};

const COL_CLASS: Record<NonNullable<Props["columns"]>, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};
const HEIGHT_CLASS: Record<NonNullable<Props["columns"]>, string> = {
  2: "min-h-[22vh] sm:min-h-[28vh] md:min-h-[32vh] lg:min-h-[36vh] xl:min-h-[32vh]",
  3: "min-h-[18vh] sm:min-h-[18vh] md:min-h-[24vh] lg:min-h-[22vh] xl:min-h-[20vh]",
  4: "min-h-[16vh] sm:min-h-[16vh] md:min-h-[22vh] lg:min-h-[26vh] xl:min-h-[26vh]",
};


export function AudienceCards({ items, columns = 3 }: Props) {
  useTilt(".audience-tilt");

  return (
    <div className={`audience-grid grid ${COL_CLASS[columns]} gap-8 md:gap-10`}>
      {items.map((aud, i) => (
        <Reveal key={aud.title} delay={i * 0.1}>
        <article className={`audience-tilt tilt-card ${HEIGHT_CLASS[columns]}`}>
            <div className="audience-card__inner">
              <h3 className="audience-card__title h-display">{aud.title}</h3>
              <p className="audience-card__body">{aud.body}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

