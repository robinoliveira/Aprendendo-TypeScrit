import "./style.css";

export type Cardprops = {
  name?: string;
  time: string;
};

export function Card({ name, time }: Cardprops) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
