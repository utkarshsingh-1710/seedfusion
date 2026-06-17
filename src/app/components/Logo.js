export default function Logo({ height = 52, variant = "dark" }) {
  const isLight = variant === "light";

  const primaryText  = isLight ? "#ffffff" : "#1b5e20";
  const secondaryText = isLight ? "#e8f5e9" : "#2e7d32";
  const subText      = isLight ? "rgba(255,255,255,0.7)" : "#555";
  const stemColor    = isLight ? "#a5d6a7" : "#2e7d32";
  const seedOuter    = isLight ? "#a5d6a7" : "#2e7d32";
  const seedInner    = isLight ? "#ffffff" : "#1b5e20";

  return (
    <svg
      height={height}
      viewBox="0 0 260 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SeedFusion Agri Grow LLP"
    >
      {/* Seed body */}
      <ellipse cx="28" cy="46" rx="13" ry="16" fill={seedOuter} />
      <ellipse cx="28" cy="46" rx="8" ry="11" fill={seedInner} opacity={isLight ? 0.3 : 1} />

      {/* Stem */}
      <path d="M28 44 Q28 28 28 18" stroke={stemColor} strokeWidth="2.5" strokeLinecap="round" />

      {/* Left leaf */}
      <path d="M28 32 Q18 24 14 16 Q22 16 28 26" fill={isLight ? "#c8e6c9" : "#4caf50"} opacity="0.9" />

      {/* Right leaf */}
      <path d="M28 26 Q38 18 42 10 Q34 12 28 22" fill={isLight ? "#a5d6a7" : "#66bb6a"} opacity="0.85" />

      {/* Amber seed tip */}
      <circle cx="28" cy="62" r="4" fill="#f9a825" />

      {/* "Seed" */}
      <text x="56" y="36" fontFamily="Poppins, Arial, sans-serif" fontSize="26" fontWeight="700" fill={primaryText} letterSpacing="-0.5">
        Seed
      </text>

      {/* Amber dot accent */}
      <circle cx="116" cy="29" r="3" fill="#f9a825" />

      {/* "Fusion" */}
      <text x="120" y="36" fontFamily="Poppins, Arial, sans-serif" fontSize="26" fontWeight="700" fill={secondaryText} letterSpacing="-0.5">
        Fusion
      </text>

      {/* Tagline */}
      <text x="57" y="54" fontFamily="Poppins, Arial, sans-serif" fontSize="10.5" fontWeight="500" fill={subText} letterSpacing="2.5">
        AGRI GROW LLP
      </text>
    </svg>
  );
}
