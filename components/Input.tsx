interface InputProps {
  label: string;
  name: string;
  type?: string;
  important?: boolean;
  moreText?: string;
  [key: string]: any;
}

export default function Input({
  label,
  register,
  important,
  name,
  type = "text",
  moreText,
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        {important ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        id={name}
        {...register}
        {...rest}
        type={type}
        className="w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none ring-2 ring-zinc-300 focus:ring-2 focus:ring-red-400"
      />
      {moreText ? (
        <p className="text-sm mt-2 text-zinc-600">{moreText}</p>
      ) : null}
    </div>
  );
}
