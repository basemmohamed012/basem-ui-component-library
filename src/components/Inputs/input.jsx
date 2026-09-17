
import PropTypes from "prop-types";

const Input = ({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  error = "",
  disabled = false,
  required = false,
}) => {
  const inputId = `input-${
    label?.toLowerCase().replace(/\s+/g, "-") || "field"
  }`;

  const errorId = `${inputId}-error`;

  return (
    <div className="w-full min-w-[320px]">
      {label && (
        <label
          htmlFor={inputId}
          className="
            mb-2.5
            block
            text-sm
            font-semibold
            tracking-tight
            text-slate-800
          "
        >
          {label}

          {required && (
            <span
              className="ml-1 text-violet-600"
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
            text-sm
            font-medium
            text-slate-900
            outline-none
            transition-all
            duration-200
            placeholder:text-slate-400

            ${
              error
                ? `
                  border-red-300
                  bg-red-50/30
                  focus:border-red-500
                  focus:ring-4
                  focus:ring-red-100
                `
                : `
                  border-slate-200
                  shadow-sm
                  hover:border-slate-300
                  hover:shadow
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                  focus:shadow-md
                `
            }

            disabled:cursor-not-allowed
            disabled:border-slate-200
            disabled:bg-slate-50
            disabled:text-slate-400
            disabled:opacity-70
          `}
        />
      </div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="
            mt-2
            flex
            items-center
            gap-1.5
            text-sm
            font-medium
            text-red-500
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path
              d="M12 8v4"
              strokeLinecap="round"
            />
            <path
              d="M12 16h.01"
              strokeLinecap="round"
            />
          </svg>

          {error}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export default Input;
