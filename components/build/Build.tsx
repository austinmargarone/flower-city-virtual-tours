"use client";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { OptionType } from "@/types";

// Define your Zod schema for form validation
const schema = z.object({
  // Website Info
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
  { value: "dashboard", label: "Dashboard" },
  { value: "social", label: "Social Media Platform" },
  { value: "web3", label: "Web3 & Blockchain" },
  { value: "other", label: "Other" },
];

const Build = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    // Submit logic here (e.g., send data to backend)
    console.log(data);
    // Reset the form after successful submission
    reset();
  };

  // Test

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="h2 mb-[5.75rem]">Website Info</h2>
      {/* Type of website */}
      <section>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex flex-col">
            <label htmlFor="websiteType" className="toplabel">
              Type of website
            </label>
            <Controller
              name="websiteType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  value={selectedOption}
                  onChange={(value: OptionType | null) => {
                    setSelectedOption(value);
                    field.onChange(value ? value.value : null);
                  }}
                  getOptionLabel={(option: OptionType) => option.label}
                  getOptionValue={(option: OptionType) => option.value}
                  styles={{
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected ? "tan" : "white",
                      color: state.isSelected ? "white" : "black",
                    }),
                  }}
                />
              )}
            />
          </div>
        </div>
        <div>
          <Controller
            name="notifications"
            control={control}
            defaultValue={false}
            render={({ field }) => <Switch {...field} />}
          />
        </div>
      </section>
      {/* Number of Pages */}
      <h2 className="h2 mb-[5.75rem]">Contact Info</h2>
      <section>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="name" className="label">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="name"
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
                />
              )}
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {typeof errors.name?.message === "string" && (
              <span>{errors.name.message}</span>
            )}{" "}
          </div>
        </div>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="phone" className="label">
              Number
            </label>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="phone"
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
                />
              )}
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {typeof errors.phone?.message === "string" && (
              <span>{errors.phone.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="email" className="label">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
                />
              )}
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {typeof errors.email?.message === "string" && (
              <span>{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="message" className="label">
              Message
            </label>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  id="message"
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem]"
                />
              )}
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {typeof errors.message?.message === "string" && (
              <span>{errors.message.message}</span>
            )}{" "}
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
