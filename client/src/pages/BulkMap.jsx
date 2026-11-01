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
    <svg viewBox="0 0 600 400" role="img" aria-label="Bulk department map">
      <text x="300" y="30" textAnchor="middle" fill="currentColor">
        Sushi Department
      </text>
      <rect x="100" y="70" width="400" height="50" fill="lightgray" />
      <text x="300" y="88" textAnchor="middle" fill="currentColor">
        Section 8
      </text>
      <text x="300" y="113" textAnchor="middle" fill="currentColor">
        Section 7
      </text>

      <rect x="100" y="150" width="400" height="50" fill="lightgray" />
      <text x="300" y="168" textAnchor="middle" fill="currentColor">
        Section 6
      </text>
      <text x="300" y="193" textAnchor="middle" fill="currentColor">
        Section 5
      </text>

      <rect x="100" y="230" width="400" height="50" fill="lightgray" />
      <text x="300" y="248" textAnchor="middle" fill="currentColor">
        Section 4
      </text>
      <text x="300" y="273" textAnchor="middle" fill="currentColor">
        Section 3
      </text>

      <rect x="100" y="310" width="400" height="50" fill="lightgray" />
      <text x="300" y="328" textAnchor="middle" fill="currentColor">
        Section 2
      </text>
      <text x="300" y="353" textAnchor="middle" fill="currentColor">
        Section 1
      </text>
      {section === 8 && (
        <line
          x1="100"
          y1="70"
          x2="500"
          y2="70"
          stroke="orange"
          strokeWidth="6"
        />
      )}
      {section === 7 && (
        <line
          x1="100"
          y1="120"
          x2="500"
          y2="120"
          stroke="orange"
          strokeWidth="6"
        />
      )}
      {section === 6 && (
        <line
          x1="100"
          y1="150"
          x2="500"
          y2="150"
          stroke="orange"
          strokeWidth="6"
        />
      )}
      {section === 5 && (
        <line
          x1="100"
          y1="200"
          x2="500"
          y2="200"
          stroke="orange"
          strokeWidth="6"
        />
      )}
      {section === 4 && (
        <line
          x1="100"
          y1="230"
          x2="500"
          y2="230"
          stroke="orange"
          strokeWidth="6"
        />
      )}
      {section === 3 && (
        <line
          x1="100"
          y1="280"
          x2="500"
          y2="280"
          stroke="orange"
          strokeWidth="6"
        />
      )}
      {section === 2 && (
        <line
          x1="100"
          y1="310"
          x2="500"
          y2="310"
          stroke="orange"
          strokeWidth="6"
        />
      )}
      {section === 1 && (
        <line
          x1="100"
          y1="360"
          x2="500"
          y2="360"
          stroke="orange"
          strokeWidth="6"
        />
      )}
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
