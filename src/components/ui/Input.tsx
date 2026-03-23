'use client';

import { type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

type BaseInputProps = {
  label?: string;
  error?: string;
  textarea?: boolean;
  className?: string;
};

type InputAsInput = BaseInputProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof BaseInputProps>;

type InputAsTextarea = BaseInputProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof BaseInputProps> & {
    textarea: true;
  };

type InputProps = InputAsInput | InputAsTextarea;

export default function Input({
  label,
  error,
  textarea = false,
  className = '',
  ...props
}: InputProps) {
  const baseStyles =
    'w-full rounded-t-md bg-bark-300/30 border-0 border-b-2 border-bark-500 px-4 py-3 text-bark-700 placeholder:text-bark-500/50 transition-all duration-200 focus:border-forest-500 focus:outline-none focus:shadow-[0_2px_8px_rgba(92,173,92,0.3)]';

  const id =
    props.id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-bark-500">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          id={id}
          className={`${baseStyles} min-h-32 resize-y`}
          {...(props as Omit<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            keyof BaseInputProps
          >)}
        />
      ) : (
        <input
          id={id}
          className={baseStyles}
          {...(props as Omit<
            InputHTMLAttributes<HTMLInputElement>,
            keyof BaseInputProps
          >)}
        />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
