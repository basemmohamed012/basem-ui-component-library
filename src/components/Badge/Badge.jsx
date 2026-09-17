
import PropTypes from "prop-types";

const Badge = ({
  children,
  variant = "default",
  size = "md",
}) => {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    font-semibold
    tracking-tight
    whitespace-nowrap
    transition-all
    duration-200
  `;

  const variants = {
    default: `
      border-slate-200
      bg-slate-100
      text-slate-700
      hover:border-slate-300
      hover:bg-slate-200
    `,

    success: `
      border-emerald-200
      bg-emerald-50
      text-emerald-700
      hover:border-emerald-300
      hover:bg-emerald-100
    `,

    warning: `
      border-amber-200
      bg-amber-50
      text-amber-700
      hover:border-amber-300
      hover:bg-amber-100
    `,

    danger: `
      border-red-200
      bg-red-50
      text-red-700
      hover:border-red-300
      hover:bg-red-100
    `,

    info: `
      border-blue-200
      bg-blue-50
      text-blue-700
      hover:border-blue-300
      hover:bg-blue-100
    `,
  };

  const sizes = {
    sm: `
      min-h-7
      px-2.5
      py-1
      text-xs
    `,

    md: `
      min-h-9
      px-3.5
      py-1.5
      text-sm
    `,
  };

  return (
    <span
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,

  variant: PropTypes.oneOf([
    "default",
    "success",
    "warning",
    "danger",
    "info",
  ]),

  size: PropTypes.oneOf([
    "sm",
    "md",
  ]),
};

export default Badge;

