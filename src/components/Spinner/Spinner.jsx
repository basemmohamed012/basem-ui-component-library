
import PropTypes from "prop-types";

const Spinner = ({
  size = "md",
  variant = "violet",
  label = "Loading",
}) => {
  const sizes = {
    sm: {
      container: "h-10 w-10",
      orb: "h-2.5 w-2.5",
      ring: "h-8 w-8",
      distance: "16px",
    },

    md: {
      container: "h-16 w-16",
      orb: "h-3.5 w-3.5",
      ring: "h-12 w-12",
      distance: "22px",
    },

    lg: {
      container: "h-24 w-24",
      orb: "h-5 w-5",
      ring: "h-18 w-18",
      distance: "28px",
    },

    xl: {
      container: "h-32 w-32",
      orb: "h-6 w-6",
      ring: "h-24 w-24",
      distance: "36px",
    },
  };

  const variants = {
    primary: {
      orb: "bg-slate-900 shadow-slate-900/40",
      ring: "border-slate-900/20",
      glow: "bg-slate-900/10",
    },

    violet: {
      orb: "bg-violet-600 shadow-violet-600/50",
      ring: "border-violet-500/30",
      glow: "bg-violet-500/10",
    },

    white: {
      orb: "bg-white shadow-white/50",
      ring: "border-white/25",
      glow: "bg-white/10",
    },
  };

  const currentSize = sizes[size];
  const currentVariant = variants[variant];

  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        ${currentSize.container}
      `}
      role="status"
      aria-label={label}
    >
      {/* Glow */}
      <div
        className={`
          absolute
          inset-1/4
          rounded-full
          blur-xl
          ${currentVariant.glow}
          animate-pulse
        `}
        aria-hidden="true"
      />

      {/* Orbital Ring 1 */}
      <div
        className={`
          absolute
          rounded-full
          border-2
          ${currentSize.ring}
          ${currentVariant.ring}
          [transform:rotateX(65deg)_rotateY(10deg)]
          animate-[orbit_2s_linear_infinite]
        `}
        aria-hidden="true"
      />

      {/* Orbital Ring 2 */}
      <div
        className={`
          absolute
          rounded-full
          border
          ${currentSize.ring}
          ${currentVariant.ring}
          [transform:rotateX(65deg)_rotateY(-55deg)]
          animate-[orbitReverse_2.5s_linear_infinite]
        `}
        aria-hidden="true"
      />

      {/* Orb 1 */}
      <span
        className={`
          absolute
          rounded-full
          ${currentSize.orb}
          ${currentVariant.orb}
          shadow-lg
          animate-[orbitalOne_2s_ease-in-out_infinite]
        `}
        aria-hidden="true"
      />

      {/* Orb 2 */}
      <span
        className={`
          absolute
          rounded-full
          ${currentSize.orb}
          ${currentVariant.orb}
          opacity-70
          shadow-lg
          animate-[orbitalTwo_2s_ease-in-out_infinite]
        `}
        aria-hidden="true"
      />

      {/* Center Orb */}
      <span
        className={`
          relative
          z-10
          h-2
          w-2
          rounded-full
          ${currentVariant.orb}
          shadow-lg
        `}
        aria-hidden="true"
      />

      {/* Accessible Loading Text */}
      <span className="sr-only">
        {label}
      </span>

      <style>
        {`
          @keyframes orbit {
            from {
              transform:
                rotateX(65deg)
                rotateY(10deg)
                rotateZ(0deg);
            }

            to {
              transform:
                rotateX(65deg)
                rotateY(10deg)
                rotateZ(360deg);
            }
          }

          @keyframes orbitReverse {
            from {
              transform:
                rotateX(65deg)
                rotateY(-55deg)
                rotateZ(360deg);
            }

            to {
              transform:
                rotateX(65deg)
                rotateY(-55deg)
                rotateZ(0deg);
            }
          }

          @keyframes orbitalOne {
            0%,
            100% {
              transform:
                translate3d(0, -22px, 20px)
                scale(1);
            }

            25% {
              transform:
                translate3d(22px, 0, 0)
                scale(0.85);
            }

            50% {
              transform:
                translate3d(0, 22px, -20px)
                scale(0.7);
            }

            75% {
              transform:
                translate3d(-22px, 0, 0)
                scale(0.85);
            }
          }

          @keyframes orbitalTwo {
            0%,
            100% {
              transform:
                translate3d(0, 22px, -20px)
                scale(0.7);
            }

            25% {
              transform:
                translate3d(-22px, 0, 0)
                scale(0.85);
            }

            50% {
              transform:
                translate3d(0, -22px, 20px)
                scale(1);
            }

            75% {
              transform:
                translate3d(22px, 0, 0)
                scale(0.85);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
            }
          }
        `}
      </style>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
  ]),

  variant: PropTypes.oneOf([
    "primary",
    "violet",
    "white",
  ]),

  label: PropTypes.string,
};

export default Spinner;
