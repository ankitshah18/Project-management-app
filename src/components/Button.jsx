import React from "react";

const Button = ({ children, ...props }) => {
  const addBtn =
    "px-4 py-2 tex-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
  return (
    <button className={addBtn} {...props}>
      {children}
    </button>
  );
};

export default Button;
