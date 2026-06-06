import { Fragment } from "react";
import { IHyperlink } from "@/@types/UI";

const Hyperlink = (props: IHyperlink) => {
  const {
    title,
    href,
    className,
    target,
    rel,
    style,
    onMouseEnter,
    onMouseLeave,
    onClick,
    children,
  } = props;

  return (
    <Fragment>
        <a
          href={href}
          className={className}
          target={target}
          rel={rel}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          {children || title}
        </a>
    </Fragment>
  );
};

export default Hyperlink;
