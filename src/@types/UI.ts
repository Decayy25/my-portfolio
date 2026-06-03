import { ReactNode, ComponentType, CSSProperties } from "react";
import { IconType } from "react-icons";

export interface ISocialMediaItem {
  id: string;
  label: string;
  href: string;
  baseClass: string;
  hoverColor: string;
  hoverBorder: string;
  isGradient?: boolean;
  icon: IconType;
}

export interface IHyperlink {
  title?: string | ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  label?: string;
  baseClass?: string;
  hoverBorder?: string;
  isGradient?: boolean;
  hoverColor?: string;
  Icon?: ComponentType<{
    className?: string;
  }>;
  children?: ReactNode;
}

export interface IHeading {
  children: ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export interface IBlobSvg {
  color?: string;
}

export interface ISocialMediaLink {
  item: ISocialMediaItem;
  className?: string;
}

export interface IButton {
  children: ReactNode | string;
  className?: string;
  id?: string;
  type?: "button" | "reset" | "submit";
  name?: string;
  onClick?: () => void;
}
