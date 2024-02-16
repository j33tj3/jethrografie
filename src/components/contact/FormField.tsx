import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  register: string;
  children: ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  register,
  children,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label
        htmlFor={register}
        className="block text-base font-bold uppercase text-black dark:text-white"
      >
        {label}
      </label>
      {children}
    </div>
  );
};
