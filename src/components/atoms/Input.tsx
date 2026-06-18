interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { type, id, placeholder, value, onChange } = props;
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:right-1 focus:border-primary"
    />
  );
};

export default Input;
