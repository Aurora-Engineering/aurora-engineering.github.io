"use client";

import { useRef } from "react";

type PublicationFigureProps = {
  src: string;
  alt: string;
  caption: string;
};

export default function PublicationFigure({ src, alt, caption }: PublicationFigureProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <figure className="publication-figure">
      <button
        type="button"
        className="publication-figure-open"
        aria-label={`Enlarge ${caption}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <img src={src} alt={alt} loading="lazy" />
        <span>Enlarge figure ↗</span>
      </button>
      <figcaption>{caption}</figcaption>

      <dialog
        ref={dialogRef}
        className="publication-figure-dialog"
        aria-label={caption}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button
          type="button"
          className="publication-figure-close"
          aria-label="Close enlarged figure"
          onClick={() => dialogRef.current?.close()}
        >
          Close <span aria-hidden="true">×</span>
        </button>
        <img src={src} alt={alt} loading="lazy" />
        <p>{caption}</p>
      </dialog>
    </figure>
  );
}
