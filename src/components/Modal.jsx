import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";
import Button from "./Button";

const Model = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadwow-md "
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Model;
