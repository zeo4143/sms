import { ContactUsSchemaFromValues } from "@/schemas/contact-us";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../ui/form";
import { FormInput, FormTextArea } from "../form";

const ContactUsForm: FC<{
  form: UseFormReturn<ContactUsSchemaFromValues>;
}> = ({ form }) => {
  
  return (
    <Form {...form}>
      <form>
        <fieldset disabled={form.formState.isSubmitting}>
          <FormInput control={form.control} name="name" label="Name" />
          <FormInput control={form.control} name="email" label="Email" />
          <FormTextArea control={form.control} name="message" label="Message" rows={5} />
        </fieldset>
      </form>
    </Form>
  );
};

export default ContactUsForm;