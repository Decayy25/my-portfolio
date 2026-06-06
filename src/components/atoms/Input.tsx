interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const { type, id, placeholder } = props;
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:right-1 focus:border-primary"
    />
  );
};

export default Input;
