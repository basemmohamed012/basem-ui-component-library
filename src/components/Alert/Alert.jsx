
import PropTypes from "prop-types";

const Alert = ({
  title,
  children,
  variant = "info",
  onClose,
}) => {
  const variants = {
    info: {
      wrapper: `
        border-blue-200/70
        bg-gradient-to-br
        from-blue-50
        via-white
        to-white
      `,
      iconWrapper: `
        bg-blue-100
        text-blue-600
      `,
      accent: "bg-blue-500",
      title: "text-blue-950",
      text: "text-blue-800/75",
    },

    success: {
      wrapper: `
        border-emerald-200/70
        bg-gradient-to-br
        from-emerald-50
        via-white
        to-white
      `,
      iconWrapper: `
        bg-emerald-100
        text-emerald-600
      `,
      accent: "bg-emerald-500",
      title: "text-emerald-950",
      text: "text-emerald-800/75",
    },

    warning: {
      wrapper: `
        border-amber-200/70
        bg-gradient-to-br
        from-amber-50
        via-white
        to-white
      `,
      iconWrapper: `
        bg-amber-100
        text-amber-600
      `,
      accent: "bg-amber-500",
      title: "text-amber-950",
      text: "text-amber-800/75",
    },

    danger: {
      wrapper: `
        border-red-200/70
        bg-gradient-to-br
        from-red-50
        via-white
        to-white
      `,
      iconWrapper: `
        bg-red-100
        text-red-600
      `,
      accent: "bg-red-500",
      title: "text-red-950",
      text: "text-red-800/75",
    },
  };

  const current = variants[variant];

  const icons = {
    info: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </svg>
    ),

    success: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M5 12.5 9.5 17 19 7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    warning: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M12 3 21 20H3L12 3Z"
          strokeLinejoin="round"
        />
        <path d="M12 9v4" strokeLinecap="round" />
        <path d="M12 16h.01" strokeLinecap="round" />
      </svg>
    ),

    danger: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          d="m9 9 6 6M15 9l-6 6"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return (
    <div
      role="alert"
      className={`
        relative
        flex
        w-full
        max-w-2xl
        items-start
        gap-4
        overflow-hidden
        rounded-2xl
        border
        p-5
        shadow-[0_8px_30px_rgb(15,23,42,0.06)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_12px_35px_rgb(15,23,42,0.09)]
        ${current.wrapper}
      `}
    >
      {/* Accent */}
      <div
        className={`
          absolute
          left-0
          top-0
          h-full
          w-1
          ${current.accent}
        `}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={`
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${current.iconWrapper}
        `}
        aria-hidden="true"
      >
        {icons[variant]}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pt-0.5">
        {title && (
          <h3
            className={`
              text-[15px]
              font-semibold
              tracking-tight
              ${current.title}
            `}
          >
            {title}
          </h3>
        )}

        <div
          className={`
            ${title ? "mt-1.5" : ""}
            text-sm
            leading-6
            ${current.text}
          `}
        >
          {children}
        </div>
      </div>

      {/* Close */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close alert"
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-lg
            text-slate-400
            transition-all
            duration-200
            hover:bg-slate-900/5
            hover:text-slate-700
            focus:outline-none
            focus:ring-2
            focus:ring-violet-500
            focus:ring-offset-1
            active:scale-95
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "info",
    "success",
    "warning",
    "danger",
  ]),
  onClose: PropTypes.func,
};

export default Alert;
