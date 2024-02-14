"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/types";

// Define your Zod schema for form validation
const schema = z.object({
  name: z.string().nonempty("Name is required"),
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

  const onSubmit = (data: FormData) => {
    // Submit logic here (e.g., send data to backend)
    console.log(data);
    // Reset the form after successful submission
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-[1rem]">
        <div className="flex">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="ml-[80px] text-[#D2042D]">
          {errors.name && <span>{errors.name.message}</span>}
        </div>
      </div>
      <div className="flex flex-col mb-[1rem]">
        <div className="flex">
          {" "}
          <label htmlFor="phone" className="label">
            Number
          </label>
          <input type="text" id="phone" {...register("phone")} />
        </div>
        <div className="ml-[80px] text-[#D2042D]">
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
      </div>
      <div className="flex flex-col mb-[1rem]">
        <div className="flex">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="ml-[80px] text-[#D2042D]">
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </div>
      <div className="flex flex-col mb-[1rem]">
        <div className="flex">
          {" "}
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea id="message" {...register("message")} />
        </div>
        <div className="ml-[80px] text-[#D2042D]">
          {errors.message && <span>{errors.message.message}</span>}{" "}
        </div>
      </div>
      <button type="submit" className="contactbutton" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Contact;
