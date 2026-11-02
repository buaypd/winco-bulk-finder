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

      <rect
        x="100"
        y="150"
        width="400"
        height="50"
        className="fill-neutral-700 stroke-white"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="175"
        x2="500"
        y2="175"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />

      <rect
        x="100"
        y="230"
        width="400"
        height="50"
        className="fill-neutral-700 stroke-white"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="255"
        x2="500"
        y2="255"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />

      <rect
        x="100"
        y="310"
        width="400"
        height="50"
        className="fill-neutral-700 stroke-white"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="335"
        x2="500"
        y2="335"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />
      <g textAnchor="end" className="fill-gray-300 text-[10px]">
        <text x="492" y="88">
          8
        </text>
        <text x="492" y="113">
          7
        </text>

        <text x="492" y="168">
          6
        </text>
        <text x="492" y="193">
          5
        </text>

        <text x="492" y="248">
          4
        </text>
        <text x="492" y="273">
          3
        </text>

        <text x="492" y="328">
          2
        </text>
        <text x="492" y="353">
          1
        </text>
      </g>

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
