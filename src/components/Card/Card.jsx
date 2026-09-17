
import PropTypes from "prop-types";

const Card = ({
  title,
  description,
  image,
  children,
  footer,
}) => {
  return (
    <article
      className="
        group
        w-full
        max-w-md
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-violet-200
        hover:shadow-xl
        hover:shadow-slate-900/10
      "
    >
      {image && (
        <div
          className="
            relative
            h-52
            w-full
            overflow-hidden
            bg-slate-100
          "
        >
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-105
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/20
              via-transparent
              to-transparent
            "
            aria-hidden="true"
          />
        </div>
      )}

      <div className="p-6">
        <div className="mb-5">
          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              text-slate-900
            "
          >
            {title}
          </h3>

          {description && (
            <p
              className="
                mt-2
                text-sm
                leading-6
                text-slate-500
              "
            >
              {description}
            </p>
          )}
        </div>

        {children && (
          <div className="text-sm leading-6 text-slate-600">
            {children}
          </div>
        )}

        {footer && (
          <div
            className="
              mt-6
              border-t
              border-slate-100
              pt-4
            "
          >
            {footer}
          </div>
        )}
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default Card;
