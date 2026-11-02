export default function BulkMap({ section, position }) {
  console.log("Map section", section, position);
  const positionX = {
    left: 200,
    middle: 300,
    right: 400,
  };

  const pinX = positionX[position];

  const sectionY = {
    8: 70,
    7: 120,
    6: 150,
    5: 200,
    4: 230,
    3: 280,
    2: 310,
    1: 360,
  };

  const pinY = sectionY[section];
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full rounded-xl bg-[#222] text-white"
      role="img"
      aria-label="Bulk department map"
    >
      <text x="300" y="30" textAnchor="middle" fill="currentColor">
        Sushi Department
      </text>
      <rect
        x="100"
        y="70"
        width="400"
        height="50"
        className="fill-neutral-700 stroke-white"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="95"
        x2="500"
        y2="95"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />
      <text x="300" y="88" textAnchor="middle" fill="currentColor">
        Section 8
      </text>
      <text x="300" y="113" textAnchor="middle" fill="currentColor">
        Section 7
      </text>

      <rect
        x="100"
        y="150"
        width="400"
        height="50"
        className="fill-neutral-700 stroke-white"
        strokeWidth="2"
      />
      <text x="300" y="168" textAnchor="middle" fill="currentColor">
        Section 6
      </text>
      <text x="300" y="193" textAnchor="middle" fill="currentColor">
        Section 5
      </text>

      <rect
        x="100"
        y="230"
        width="400"
        height="50"
        className="fill-neutral-700 stroke-white"
        strokeWidth="2"
      />
      <text x="300" y="248" textAnchor="middle" fill="currentColor">
        Section 4
      </text>
      <text x="300" y="273" textAnchor="middle" fill="currentColor">
        Section 3
      </text>

      <rect
        x="100"
        y="310"
        width="400"
        height="50"
        className="fill-neutral-700 stroke-white"
        strokeWidth="2"
      />
      <text x="300" y="328" textAnchor="middle" fill="currentColor">
        Section 2
      </text>
      <text x="300" y="353" textAnchor="middle" fill="currentColor">
        Section 1
      </text>

      {pinX !== undefined && pinY !== undefined && (
        <circle
          cx={pinX}
          cy={pinY}
          r="8"
          fill="red"
          stroke="white"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}
