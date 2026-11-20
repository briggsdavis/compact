"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Film = { no: string; title: string; year: string; tag: string; color: string };

export default function FilmGallery({ films }: { films: Film[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handlePointerOver = (event: React.PointerEvent<HTMLDivElement>) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    const card = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-film-index]") : null;
    if (card) setHovered(Number(card.dataset.filmIndex));
  };
  const handlePointerLeave = () => {
    leaveTimer.current = setTimeout(() => setHovered(null), 160);
  };
  return <div className={`film-grid${hovered === null ? "" : ` film-grid-active-${hovered}`}`} onPointerOver={handlePointerOver} onPointerEnter={() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  }} onPointerLeave={handlePointerLeave}>
    {films.map((film, index) => <Reveal className="film-card" key={film.no}><div data-film-index={index} className="film-card-content"><div className={`film-poster ${film.color}`}><div className="poster-art"><div className="poster-sun"/><div className="poster-arch"/><span>{film.no === "A" ? "AMOUR" : film.no === "B" ? "PINK" : "RAT"}</span></div><span className="poster-tag">{film.tag}</span><span className="poster-year">{film.year}</span></div><div className="film-title"><h3>{film.title}</h3><span>↗</span></div><span className="film-caption">A MENU IN THREE ACTS</span></div></Reveal>)}
  </div>;
}
