import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="mb-1 block font-medium">
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        {...register}
        className="mt-1 shadow-sm w-full ring-2 ring-zinc-300 focus:ring-orange-500 rounded-md border-gray-300 outline-none p-3 bg-zinc-100 "
        rows={4}
        {...rest}
      />
    </div>
  );
}
