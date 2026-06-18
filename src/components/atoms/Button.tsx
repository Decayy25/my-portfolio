import { Fragment } from "react";
import { IButton } from "@/@types/Ui";

const Button = (props: IButton) => {
  const { children, className, id, type = "button", name, onClick } = props;
  return (
    <Fragment>
      <button
        className={className}
        id={id}
        type={type}
        name={name}
        onClick={onClick}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default Button;
