export default function Hour(hour) {
  return (
    <div>
      <span>{hour.condition.text}</span>
      <img src={hour.condition.icon} alt={hour.condition.code} />
      <span>{hour.time}</span>
    </div>
  );
}
