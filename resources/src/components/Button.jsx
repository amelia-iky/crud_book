import PropTypes from "prop-types";

const Button = ({
    type = "button",
    onClick,
    variant = "primary",
    children,
}) => {
    const baseClass = "py-2 px-4 rounded font-semibold";

    const variantClass = {
        added: "bg-green-600 text-white hover:bg-green-700",
        deleted: "bg-red-600 text-white hover:bg-red-700",
        edited: "bg-primary-dark text-white hover:bg-primary",
    };

    const resolvedVariantClass = variantClass[variant] || variantClass.primary;

    return (
        <button
            type={type}
            onClick={variant !== "disabled" && onClick ? onClick : undefined}
            className={`${baseClass} ${resolvedVariantClass}`}
            disabled={variant === "disabled"}
        >
            {children || "Button"}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["added", "deleted", "edited"]),
    children: PropTypes.node,
};

export default Button;
