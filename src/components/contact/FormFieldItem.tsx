import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type ContactFormItemProps<
  InputType extends InputProps = InputProps,
  TextareaType extends TextareaProps = TextareaProps,
> =
  | ({ component?: "input" } & InputType)
  | ({ component: "textarea" } & TextareaType);

export const ContactFormItem: React.FC<ContactFormItemProps> = React.forwardRef(
  (
    { component: Component = "input", ...props },
    ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    return (
      <Component
        ref={ref as React.ForwardedRef<HTMLInputElement & HTMLTextAreaElement>}
        className="w-full rounded-es-lg border-4 border-gray-700 bg-white p-3 text-base font-medium text-black outline-none focus:shadow-md focus:outline-4"
        {...(props as InputProps & TextareaProps)}
      />
    );
  },
);
