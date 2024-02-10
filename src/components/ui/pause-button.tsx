const PauseIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="28"
    viewBox="0 0 18 25.161"
    style={{ verticalAlign: "middle" }} // Align the SVG vertically in the middle
  >
    <g transform="translate(-1779.77 -694.009)">
      <path
        d="M0,0V19.161"
        transform="translate(1782.77 697.009)"
        stroke={isActive ? "#d54b1a" : "#303030"}
        strokeLinecap="round"
        strokeWidth="6"
      />
      <g transform="translate(1794.77 697.009)">
        <path
          d="M0,0V19.161"
          fill="none"
          stroke={isActive ? "#d54b1a" : "#303030"}
          strokeLinecap="round"
          strokeWidth="6"
        />
      </g>
    </g>
  </svg>
);

export default PauseIcon;
