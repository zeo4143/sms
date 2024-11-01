import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactUsSchema,
  ContactUsSchemaFromValues,
} from "@/schemas/contact-us";
import ContactUsForm from "../footer/ContactUsForm";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

const ContactUs = () => {
  const form = useForm<ContactUsSchemaFromValues>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {};

  return (
      <Card className="self-center mx-auto sm:mx-0 w-[900px]">
        <CardHeader>
          <CardTitle className="text-3xl">Contact Us</CardTitle>
          <CardDescription className="text-black">
            If you have any Queries/Suggestions reach us
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactUsForm form={form} />
        </CardContent>
        <CardFooter>
          <Button
            size="lg"
            onClick={form.handleSubmit(onSubmit)}
            type="button"
            disabled={form.formState.isSubmitting}
            >
            {form.formState.isSubmitting ? (
                <>
                <Loader
                  className="mr-2 animate-spin"
                  size={16}
                  strokeWidth={2.5}
                  />
                Submitting
              </>
            ) : (
                "Submit"
            )}
          </Button>
        </CardFooter>
      </Card>
  );
};

export default ContactUs;
