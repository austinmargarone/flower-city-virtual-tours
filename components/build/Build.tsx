"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { OptionType } from "@/types";

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
  // Additional fields
  budget: z.string().optional(),
  timeline: z.string().optional(),
  // Addedd
  designStyle: z.string().optional(),
  specialFeatures: z.string().optional(),
  targetAudience: z.string().optional(),
  competitorWebsites: z.string().optional(),
  seoRequirements: z.string().optional(),
  maintenanceSupport: z.string().optional(),
  contentCreation: z.string().optional(),
  legalCompliance: z.string().optional(),
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
    // Submit logic here send data to backend
    console.log(data);
    // Reset the form after successful submission
    reset();
  };

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

  // Open additional feilds
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

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
            <label htmlFor="pages" className="toplabel">
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
              Content Management
            </label>
            <Controller
              name="cms"
              control={control}
              defaultValue={false}
              render={({ field }) => <TanSwitch {...label} />}
            />
          </div>
        </div>
        {/* Authentication */}
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
        {/* Dark & Light Theme */}
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
      {/* Advanced fields */}
      <section>
        <button
          className="h2 mb-[5.75rem] flex justify-center mx-auto"
          onClick={(event) => {
            event.preventDefault(); // Prevent default form submission behavior
            setShowAdditionalFields(!showAdditionalFields);
          }}
        >
          {showAdditionalFields
            ? "Close Advanced Fields"
            : "Open Advanced Fields"}
        </button>

        {showAdditionalFields && (
          <>
            {/* Budget Range */}
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex flex-col">
                <label htmlFor="budget" className="toplabel">
                  Budget Range
                </label>
                <Controller
                  name="budget"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="budget"
                      className="w-full h-[2.25rem] rounded-sm pl-[.25rem]"
                    />
                  )}
                />
              </div>
            </div>
            {/* Timeline */}
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex flex-col">
                <label htmlFor="timeline" className="toplabel">
                  Timeline
                </label>
                <Controller
                  name="timeline"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="timeline"
                      className="w-full h-[2.25rem] rounded-sm pl-[.25rem]"
                    />
                  )}
                />
              </div>
            </div>
            {/* Design Style */}
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex flex-col">
                <label htmlFor="designStyle" className="toplabel">
                  Design Style
                </label>
                <Controller
                  name="designStyle"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="designStyle"
                      className="w-full h-[2.25rem] rounded-sm pl-[.25rem]"
                    />
                  )}
                />
              </div>
            </div>
            {/* Design Style */}
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex flex-col">
                <label htmlFor="specialfeatures" className="toplabel">
                  Special Features
                </label>
                <Controller
                  name="specialfeatures"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="specialfeatures"
                      className="w-full h-[2.25rem] rounded-sm pl-[.25rem]"
                    />
                  )}
                />
              </div>
            </div>
          </>
        )}
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
                  className="w-[11rem] xs:w-[14rem] ss:w-[17rem] sm:w-[19rem] md:w-[21.5rem] lg:w-[24rem] pl-[.25rem] h-[2.25rem] rounded-sm"
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
            <label htmlFor="Company" className="label flex my-auto">
              Company
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="Company"
                  className="w-[11rem] xs:w-[14rem] ss:w-[17rem] sm:w-[19rem] md:w-[21.5rem] lg:w-[24rem] pl-[.25rem] h-[2.25rem] rounded-sm"
                />
              )}
            />
          </div>
          <div className="ml-[80px] text-[#B49167]">
            {typeof errors.Company?.message === "string" && (
              <span>{errors.Company.message}</span>
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
                  className="w-[11rem] xs:w-[14rem] ss:w-[17rem] sm:w-[19rem] md:w-[21.5rem] lg:w-[24rem] pl-[.25rem] h-[2.25rem] rounded-sm"
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
                  className="w-[11rem] xs:w-[14rem] ss:w-[17rem] sm:w-[19rem] md:w-[21.5rem] lg:w-[24rem] pl-[.25rem] h-[2.25rem] rounded-sm"
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
                  className="w-[11rem] xs:w-[14rem] ss:w-[17rem] sm:w-[19rem] md:w-[21.5rem] lg:w-[24rem] pl-[.25rem] h-[2.25rem] rounded-sm"
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
