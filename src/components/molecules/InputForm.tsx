import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import { IForm } from "@/@types/Ui";

const InputForm = (props: IForm) => {
  const { label, name, type, placeholder, id, value, onChange } = props;

  return (
    <div className="w-full px-4 mb-8">
      <Label htmlFor={name} title={label} />
      <Input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputForm;
