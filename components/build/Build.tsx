"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { WebsiteForm, OptionType } from "@/types";
import Select from "react-select";
import { useState } from "react";

// Define your Zod schema for form validation
const schema = z.object({
  // Wenbsite Info
  websiteType: z.string().nonempty("Website Type is required"),
  // Contact Info
  name: z.string().nonempty("Name is required"),
  phone: z.string().nonempty("Phone Number is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

const options = [
  { value: "portfolio", label: "Portfolio" },
  { value: "business", label: "Business" },
  { value: "e-commerce", label: "E-commerce" },
  { value: "blog", label: "Blog" },
  { value: "booking", label: "Booking and Reservation" },
  { value: "social", label: "Social Media Platform" },
  { value: "web3", label: "Web3 & Blockchain" },
  { value: "other", label: "Other" },
];

const Build = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WebsiteForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: WebsiteForm) => {
    // Submit logic here (e.g., send data to backend)
    console.log(data);
    // Reset the form after successful submission
    reset();
  };

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="h2 mb-[5.75rem]">Website Info</h2>

      <section>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex flex-col">
            <label htmlFor="websiteType" className="toplabel">
              Type of website
            </label>
            <Select
              id="websiteType"
              options={options}
              value={selectedOption}
              onChange={setSelectedOption}
            />
          </div>
        </div>
      </section>
      <h2 className="h2 mb-[5.75rem]">Contact Info</h2>
      <section>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {errors.name && <span>{errors.name.message}</span>}
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
              className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
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
              className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
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
              className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {errors.message && <span>{errors.message.message}</span>}{" "}
          </div>
        </div>
      </section>
      <div className="mx-auto flex justify-center">
        <button type="submit" className="contactbutton" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Build;
