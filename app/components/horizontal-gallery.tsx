"use client";

import { type ReactNode, useEffect, useId, useRef, useState } from "react";

export default function HorizontalGallery({
  children,
  label,
  count,
  theme = "light",
}: {
  children: ReactNode;
  label: string;
  count: number;
  theme?: "light" | "dark";
}) {
  const id = useId();
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ first: true, last: false });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setPosition({
      first: element.scrollLeft <= 2,
      last: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild;
    const step = (card?.getBoundingClientRect().width ?? element.clientWidth) + 24;
    element.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <div className={`horizontal-gallery gallery-${theme}`}>
      <div className="gallery-toolbar">
        <span>{count} {label === "Aurora news" ? "updates" : "capabilities"}</span>
        <div className="gallery-buttons">
          <button type="button" aria-label={`Previous ${label.toLowerCase()}`} aria-controls={id} disabled={position.first} onClick={() => move(-1)}>←</button>
          <button type="button" aria-label={`Next ${label.toLowerCase()}`} aria-controls={id} disabled={position.last} onClick={() => move(1)}>→</button>
        </div>
      </div>
      <div id={id} ref={track} className="gallery-track" role="region" aria-label={label} tabIndex={0} onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
        {children}
      </div>
    </div>
  );
}
