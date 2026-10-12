"use client";

import { useState } from "react";
import TourEmbed from "./TourEmbed";

export type TourItem = {
  id: string;
  /** Short label for the picker, e.g. "Greece" or "Physical Therapy" */
  label: string;
  title: string;
  /** Optional group heading or link shown under the tour */
  note?: React.ReactNode;
};

type Props = { tours: TourItem[]; pickerLabel?: string };

/** Several Matterport tours, one loaded at a time, with a picker to switch between them. */
const TourSwitcher = ({ tours, pickerLabel = "Choose a tour" }: Props) => {
  const [active, setActive] = useState(0);
  const current = tours[active];

  return (
    <div>
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-paleblue">{pickerLabel}</p>
      <div role="tablist" aria-label={pickerLabel} className="mb-4 flex flex-wrap gap-2">
        {tours.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-full border px-4 py-1.5 text-sm font-bold transition ${
              i === active
                ? "border-tan bg-tan text-white"
                : "border-tan/50 text-lightblue hover:border-tan hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* key forces a fresh iframe so the new tour loads */}
      <TourEmbed key={current.id} id={current.id} title={current.title} />
      <div className="mt-2 text-white">
        {current.title}
        {current.note}
      </div>
    </div>
  );
};

export default TourSwitcher;
