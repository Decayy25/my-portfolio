import { ILabel } from "@/@types/UI";

const Label = (props: ILabel) => {
  const { htmlFor, title } = props;
  return (
    <label htmlFor={htmlFor} className="text-base font-bold text-primary">
      {title}
    </label>
  );
};

export default Label;
