"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/types";
import emailjs from "emailjs-com";

// Define your Zod schema for form validation
const schema = z.object({
  contactname: z.string().nonempty("Name is required"),
  phone: z.string().nonempty("Phone Number is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Zod validation succeeded, proceed with your logic
      console.log(data);

      // Send email using emailjs
      const templateParams = {
        contactname: data.contactname,
        phone: data.phone,
        email: data.email,
        message: data.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_ID,
      );

      // Reset the form after successful submission
      reset();

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-[1.5rem]">
        <div className="flex">
          <label htmlFor="contactname" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("contactname")}
            className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] h-[2.25rem]"
          />
        </div>
        <div className="ml-[80px] text-[#B49167]">
          {errors.contactname && <span>{errors.contactname.message}</span>}
        </div>
      </div>
      <div className="flex flex-col mb-[1.5rem]">
        <div className="flex">
          <label htmlFor="phone" className="label">
            Number
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] h-[2.25rem]"
          />
        </div>
        <div className="ml-[80px] text-[#B49167]">
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
      </div>
      <div className="flex flex-col mb-[1.5rem]">
        <div className="flex">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] h-[2.25rem]"
          />
        </div>
        <div className="ml-[80px] text-[#B49167]">
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </div>
      <div className="flex flex-col mb-[1.5rem]">
        <div className="flex">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] "
          />
        </div>
        <div className="ml-[80px] text-[#B49167]">
          {errors.message && <span>{errors.message.message}</span>}{" "}
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <button type="submit" className="contactbutton" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
