import { useEffect, useMemo, useState } from "react";

export default function Countdown({ targetDate }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [diff, setDiff] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const id = setInterval(
      () => setDiff(Math.max(0, target - Date.now())),
      1000
    );
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <div className="countdown">
      <div className="countdown-row">
        <Block n={days} label="DÍAS" />
        <Separator />
        <Block n={hours} label="HORAS" />
        <Separator />
        <Block n={minutes} label="MINUTOS" />
        <Separator />
        <Block n={seconds} label="SEGUNDOS" />
      </div>
    </div>
  );
}

function Block({ n, label }) {
  return (
    <div className="countdown-block">
      <div className="countdown-number">{String(n).padStart(2, "0")}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );
}

function Separator() {
  return <span className="countdown-sep">:</span>;
}
