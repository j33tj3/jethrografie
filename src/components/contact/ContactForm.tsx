"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { ContactFormItem } from "./FormFieldItem";
import { FormField } from "./FormField";
import { twMerge } from "tailwind-merge";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface ContactFormProps
  extends React.FormHTMLAttributes<Omit<HTMLFormElement, "className">> {
  className: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const formInputStyles =
    "w-full rounded-es-lg border-2 border-gray-700 bg-white px-6 py-3 text-base font-medium text-black outline-none focus:shadow-md focus:outline-4";

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setIsSuccessful(true);
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge("flex flex-col gap-y-4", className)}
    >
      <FormField label="Naam" register="name">
        <ContactFormItem
          type="text"
          placeholder="Naam"
          {...register("name", {
            required: "Wees niet verlegen...",
            pattern: /^[A-Za-z]+$/i,
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <InputError message={errors.name.message} />}
      </FormField>

      <FormField label="E-mailadres" register="email">
        <ContactFormItem
          type="email"
          placeholder="jouw@email.nl"
          {...register("email", {
            required: "Stay connected...",
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <InputError message={errors.email?.message} />}
      </FormField>

      <FormField label="E-mailadres" register="message">
        <ContactFormItem
          component="textarea"
          rows={4}
          placeholder="Vertel..."
          {...register("message", {
            required: "Type hier u bericht...",
          })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <InputError message={errors.message.message} />}
      </FormField>

      <button className="hover:shadow-form bg-black p-4 text-base font-semibold uppercase text-white outline-none">
        Verzenden
      </button>

      {isSuccessful && (
        <div className="flex items-center gap-4 bg-slate-400 p-4 text-white">
          <CheckCircleIcon className="w-6" />
          Bericht verzonden
        </div>
      )}
    </form>
  );
};

const InputError: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <p
      role="alert"
      className="flex items-center gap-4 bg-slate-400 p-4 text-white"
    >
      <ExclamationCircleIcon className="w-6" />
      {message}
    </p>
  );
};
