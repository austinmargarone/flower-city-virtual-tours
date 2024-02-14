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
      <div className="">
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number *</label>
        <input type="text" id="phone" {...register("phone")} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="message">Message *</label>
        <textarea id="message" {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Contact;
