"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { z } from "zod";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import useSchema from "./Schema";
import { firebase } from "@/libs/firebaseConfig";
import emailjs from "emailjs-com"; // Import EmailJS SDK
const ContactForm = () => {
  const ForgetPasswordSchema = useSchema();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  type ContactFormType = z.infer<typeof ForgetPasswordSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(ForgetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    setIsLoading(true);
    try {
      // Add a new document to the "contacts" collection

      const response = await emailjs.send(
        "service_xd0myma", // Replace with your service ID
        "template_bxeeqki", // Replace with your template ID
        data,
        "byBybFxeBGsHgUAJv" // Replace with your user ID
      );
      console.log({ response });
      const docRef = await addDoc(collection(firebase, "contacts"), {
        name: data.name,
        email: data.email,
        message: data.message,
      });

      console.log({ docRef });
      // Reset the form after submission
      reset();
      alert("Message sent successfully!");
      // Optionally, navigate to another page or show a success message
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-[40px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          {...register("name")}
          type="text"
          label={"Name"}
          variant="bordered"
          className="w-full"
          isInvalid={errors.name ? true : false}
          errorMessage={errors.name?.message}
          size="lg"
          classNames={{
            input: "text-[1.2rem]",
          }}
        />
      </div>
      <div>
        <Input
          {...register("email")}
          type="email"
          label={"Email"}
          variant="bordered"
          className="w-full"
          isInvalid={errors.email ? true : false}
          errorMessage={errors.email?.message}
          size="lg"
          classNames={{
            input: "text-[1.2rem]",
          }}
        />
      </div>
      <div>
        <Input
          {...register("message")}
          type="text"
          label={"Message"}
          variant="bordered"
          className="w-full"
          isInvalid={errors.message ? true : false}
          errorMessage={errors.message?.message}
          size="lg"
          classNames={{
            input: "text-[1.2rem]",
          }}
        />
      </div>
      <Button
        type="submit"
        className="bg-cyan-600 h-[64px] text-lg text-white"
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
