import { useEffect, useRef, useState } from "react";

export default function Turntable({
  audioSrc = "/Turntable/tema.mp3",
  coverSrc = "/Turntable/portadadiscoo.png",
  vinylSrc = "/Turntable/discopng.png",
  rpm = 33
}) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const spinSeconds = 60 / rpm;

  const toggle = async () => {
  const el = audioRef.current;
  if (!el) return;

  try {
    if (!playing) {
      await el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  } catch (e) {
    console.error("Error al reproducir:", e);
  }
};


  const stop = () => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const update = () => {
      if (el.duration) setProgress(el.currentTime / el.duration);
    };

    const ended = () => setPlaying(false);

    el.addEventListener("timeupdate", update);
    el.addEventListener("ended", ended);

    return () => {
      el.removeEventListener("timeupdate", update);
      el.removeEventListener("ended", ended);
    };
  }, []);

  return (
    <div className="turntable">
      <audio ref={audioRef} src={audioSrc} preload="auto" />

      {/* Disco atrás */}
      <div className={`vinyl ${playing ? "spin" : ""}`}>
        <img src={vinylSrc} alt="Vinilo" />
      </div>

      {/* Portada dentro del recuadro blanco */}
      <div className="cover-wrapper">
        <div className="cover-bg">
          <img src={coverSrc} alt="Cover" className="cover-img" />
        </div>
      </div>

      {/* Controles */}
      <div className="tt-controls">
        {/* Play / Pause */}
        <button className="tt-btn primary" onClick={toggle}>
          {!playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M6 19h4V5H6zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>

        {/* Stop */}
        <button className="tt-btn secondary" onClick={stop}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="6" width="12" height="12" rx="2" />
          </svg>
        </button>

        {/* Barra de progreso */}
        <div className="tt-bar">
          <div className="tt-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </div>
  );
}
