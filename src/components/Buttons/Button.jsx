
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
}) => {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    font-medium
    tracking-tight
    transition-all
    duration-200
    ease-out
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-50
    disabled:pointer-events-none
  `;

  const variants = {
    primary: `
      border-slate-900
      bg-slate-900
      text-white
      shadow-sm
      hover:-translate-y-0.5
      hover:border-slate-800
      hover:bg-slate-800
      hover:shadow-lg
      hover:shadow-slate-900/15
      focus:ring-slate-900
    `,

    secondary: `
      border-slate-200
      bg-slate-100
      text-slate-900
      hover:-translate-y-0.5
      hover:border-slate-300
      hover:bg-slate-200
      hover:shadow-md
      focus:ring-slate-400
    `,

    outline: `
      border-slate-200
      bg-white
      text-slate-700
      shadow-sm
      hover:-translate-y-0.5
      hover:border-violet-300
      hover:bg-violet-50
      hover:text-violet-700
      hover:shadow-md
      focus:ring-violet-500
    `,

    danger: `
      border-red-600
      bg-red-600
      text-white
      shadow-sm
      hover:-translate-y-0.5
      hover:border-red-700
      hover:bg-red-700
      hover:shadow-lg
      hover:shadow-red-600/15
      focus:ring-red-500
    `,
  };

  const sizes = {
    sm: `
      min-h-9
      px-3.5
      py-2
      text-xs
    `,

    md: `
      min-h-11
      px-5
      py-2.5
      text-sm
    `,

    lg: `
      min-h-12
      px-6
      py-3
      text-base
    `,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,

  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "danger",
  ]),

  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
  ]),

  disabled: PropTypes.bool,

  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]),

  onClick: PropTypes.func,
};

export default Button;

