import { Control, FieldValues, Path } from "react-hook-form";
import {
    Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { cloneElement, ReactElement } from "react";
import { Textarea } from "./ui/textarea";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
  children: ReactElement;
}

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
}

interface FormTextAreaProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
  rows: number
}


const FormFieldWrapper = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  children,
}: FormFieldProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            {cloneElement(children, {...field})}
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage className="opacity-50" />
      </FormItem>
    )}
  />
);

const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
}: FormInputProps<T>) => (
  <FormFieldWrapper control={control} name={name} description={description} label={label} >
    <Input placeholder={placeholder} />
  </FormFieldWrapper>
);

const FormTextArea = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  rows
}: FormTextAreaProps<T>) => (
  <FormFieldWrapper control={control} name={name} description={description} label={label}>
    <Textarea rows={rows} placeholder={placeholder}/>
  </FormFieldWrapper>
);

export { Form, FormInput, FormTextArea}
