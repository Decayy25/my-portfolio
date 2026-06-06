import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import { IForm } from "@/@types/UI";

const InputForm = (props: IForm) => {
  const { label, name, type, placeholder, id } = props;

  return (
    <div className="w-full px-4 mb-8">
      <Label htmlFor={name} title={label} />
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
