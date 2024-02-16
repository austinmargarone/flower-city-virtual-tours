"use client";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { OptionType } from "@/types";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";

// Define your Zod schema for form validation
const schema = z.object({
  // Website Info
  websiteType: z.string().nonempty("Website Type is required"),
  pages: z.string().nonempty("Number of Pages is required"),
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
  const TanSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: ["#C3A785"],
      "&:hover": {
        backgroundColor: alpha("#C3A785", theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: ["#C3A785"],
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="h2 mb-[5.75rem]">Website Info</h2>
      {/* Type of website */}
      <section>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex flex-col">
            <label htmlFor="websiteType" className="toplabel">
              Type of Website
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
          <div className="text-[#B49167]">
            {typeof errors.websiteType?.message === "string" && (
              <span>{errors.websiteType.message}</span>
            )}
          </div>
        </div>
        {/* Number of Pages */}
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex flex-col">
            <label htmlFor="name" className="toplabel">
              Number of Pages
            </label>
            <Controller
              name="pages"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="pages"
                  className="w-full h-[2.25rem] rounded-sm pl-[.25rem]"
                />
              )}
            />
          </div>
          <div className="text-[#B49167]">
            {typeof errors.pages?.message === "string" && (
              <span>{errors.pages.message}</span>
            )}
          </div>
        </div>
        {/* Content Management */}
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="CMS" className="sliderlabel my-auto w-[180px]">
              Content Managment
            </label>
            <Controller
              name="cms"
              control={control}
              defaultValue={false}
              render={({ field }) => <TanSwitch {...label} />}
            />
          </div>
        </div>
        {/* Content Management */}
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label
              htmlFor="Authentication"
              className="sliderlabel my-auto w-[180px]"
            >
              Authentication
            </label>
            <Controller
              name="Authentication"
              control={control}
              defaultValue={false}
              render={({ field }) => <TanSwitch {...label} />}
            />
          </div>
        </div>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="Theme" className="sliderlabel my-auto w-[180px]">
              Dark & Light Theme
            </label>
            <Controller
              name="Theme"
              control={control}
              defaultValue={false}
              render={({ field }) => <TanSwitch {...label} />}
            />
          </div>
        </div>
      </section>
      {/* Contact Info */}
      <h2 className="h2 mb-[5.75rem]">Contact Info</h2>
      <section>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="name" className="label flex my-auto">
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
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] h-[2.25rem] rounded-sm"
                />
              )}
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {typeof errors.name?.message === "string" && (
              <span>{errors.name.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="phone" className="label flex my-auto">
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
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] h-[2.25rem] rounded-sm"
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
            <label htmlFor="email" className="label flex my-auto">
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
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] h-[2.25rem] rounded-sm"
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
            <label htmlFor="message" className="label flex my-auto">
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
                  className="w-[12rem] xs:w-[15rem] ss:w-[18rem] sm:w-[20rem] md:w-[22.5rem] lg:w-[25rem] pl-[.25rem] h-[2.25rem] rounded-sm"
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
