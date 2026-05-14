export default function Sparkline({
  color = "#0f766e",
}: {
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-14 overflow-hidden"
      preserveAspectRatio="none"
    >
      <path
        d="M5 45
           C15 55, 25 20, 35 35
           S55 50, 65 18
           S85 10, 95 22
           S105 12, 115 48"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        className="animate-draw"
      />
    </svg>
  );
}