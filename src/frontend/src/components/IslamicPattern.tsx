import { useId } from "react";
interface IslamicPatternProps {
  className?: string;
  opacity?: number;
}

export function IslamicPattern({
  className = "",
  opacity = 0.08,
}: IslamicPatternProps) {
  const uid = useId();
  const patternId = `islamic-geo-${uid.replace(/:/g, "")}`;
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      // biome-ignore lint/a11y/noSvgWithoutTitle: decorative background pattern
      aria-hidden="true"
      role="presentation"
    >
      <svg
        role="img"
        aria-label="Islamic geometric pattern decoration"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="24,8 56,8 72,24 72,56 56,72 24,72 8,56 8,24"
              fill="none"
              stroke="oklch(0.65 0.18 85)"
              strokeWidth="1"
            />
            <polygon
              points="40,16 44,36 60,24 48,40 68,40 48,44 60,56 44,48 40,64 36,48 20,56 32,44 12,40 32,40 20,24 36,36"
              fill="none"
              stroke="oklch(0.65 0.18 85)"
              strokeWidth="0.5"
            />
            <circle cx="8" cy="8" r="2" fill="oklch(0.65 0.18 85)" />
            <circle cx="72" cy="8" r="2" fill="oklch(0.65 0.18 85)" />
            <circle cx="72" cy="72" r="2" fill="oklch(0.65 0.18 85)" />
            <circle cx="8" cy="72" r="2" fill="oklch(0.65 0.18 85)" />
          </pattern>
        </defs>
        <title>Islamic geometric pattern</title>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
