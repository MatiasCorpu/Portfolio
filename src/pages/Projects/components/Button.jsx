import React from "react";

function Button({ children, className, onClick }) {
    return (
        <button
            className={`flex justify-center items-center px-2 py-1 rounded-xl transition-transform duration-300 hover:scale-[1.009] active:scale-[0.99] bg-light-secondary dark:bg-dark-secondary ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;