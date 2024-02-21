"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { OptionType, WebsiteForm } from "@/types";
import emailjs from "emailjs-com";

// Define your Zod schema for form validation
const schema = z.object({
  // Website Info
  websiteType: z.object({
    value: z.string(),
    label: z.string(),
  }),
  pages: z.string().nonempty("Number of Pages is required"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  // Contact Info
  name: z.string().nonempty("Name is required"),
  company: z.string().optional(),
  phone: z.string().nonempty("Phone Number is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
  // Additional fields
  designStyle: z.string().optional(),
  specialFeatures: z.string().optional(),
  seo: z.boolean().optional(),
  cms: z.boolean().optional(),
  authentication: z.boolean().optional(),
  theme: z.boolean().optional(),
  payment: z.boolean().optional(),
  appointment: z.boolean().optional(),
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
  } = useForm<WebsiteForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: WebsiteForm) => {
    try {
      // Zod validation succeeded, proceed with your logic
      console.log(data);

      // Send email using emailjs
      const templateParams = {
        name: data.name,
        websiteType: data.websiteType,
        pages: data.pages,
        budget: data.budget,
        timeline: data.timeline,
        designStyle: data.designStyle,
        specialFeatures: data.specialFeatures,
        seo: data.seo ? "Yes" : "No",
        cms: data.cms ? "Yes" : "No",
        authentication: data.authentication ? "Yes" : "No",
        theme: data.theme ? "Yes" : "No",
        payment: data.payment ? "Yes" : "No",
        appointment: data.appointment ? "Yes" : "No",
        message: data.message,
        company: data.company,
        phone: data.phone,
        email: data.email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_BUILD!,
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
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  value={selectedOption}
                  onChange={(selectedOption: OptionType | null) => {
                    setSelectedOption(selectedOption);
                    field.onChange(selectedOption); // Pass the selectedOption object directly
                  }}
                  getOptionLabel={(option: OptionType) => option.label}
                  getOptionValue={(option: OptionType) => option.value} // Return the value property of OptionType
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
      </section>
      {/* Advanced fields */}
      <section>
        <button
          className="text-[#B49167] underline flex justify-center mx-auto border border-[#B49167] px-[1rem] py-[.5rem] rounded-md mb-[1.5rem]"
          onClick={(event) => {
            event.preventDefault();
            setShowAdditionalFields(!showAdditionalFields);
          }}
        >
          {showAdditionalFields
            ? "Close Additional Fields"
            : "Open Additional Fields"}
        </button>

        {showAdditionalFields && (
          <>
            {/* Content Management */}
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex">
                <label htmlFor="CMS" className="sliderlabel my-auto w-[180px]">
                  Content Management
                </label>
                <Controller
                  name="cms"
                  control={control}
                  render={({ field }) => (
                    <TanSwitch
                      {...label}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
              </div>
            </div>
            {/* SEO */}
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex">
                <label htmlFor="Seo" className="sliderlabel my-auto w-[180px]">
                  SEO
                </label>
                <Controller
                  name="seo"
                  control={control}
                  render={({ field }) => (
                    <TanSwitch
                      {...label}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
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
                  name="authentication"
                  control={control}
                  render={({ field }) => (
                    <TanSwitch
                      {...label}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
              </div>
            </div>
            {/* Dark & Light Theme */}
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex">
                <label
                  htmlFor="Theme"
                  className="sliderlabel my-auto w-[180px]"
                >
                  Dark & Light Theme
                </label>
                <Controller
                  name="theme"
                  control={control}
                  render={({ field }) => (
                    <TanSwitch
                      {...label}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex">
                <label
                  htmlFor="Payment"
                  className="sliderlabel my-auto w-[180px]"
                >
                  Payment Processing
                </label>
                <Controller
                  name="payment"
                  control={control}
                  render={({ field }) => (
                    <TanSwitch
                      {...label}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col mb-[1.5rem]">
              <div className="flex">
                <label
                  htmlFor="Appointment"
                  className="sliderlabel my-auto w-[180px]"
                >
                  Appointment Booking
                </label>
                <Controller
                  name="appointment"
                  control={control}
                  render={({ field }) => (
                    <TanSwitch
                      {...label}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
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
                  name="specialFeatures"
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
          <div className="ml-[90px] text-[#B49167]">
            {typeof errors.name?.message === "string" && (
              <span>{errors.name.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-[1.5rem]">
          <div className="flex">
            <label htmlFor="company" className="label flex my-auto">
              Company
            </label>
            <Controller
              name="company"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="company"
                  className="w-[11rem] xs:w-[14rem] ss:w-[17rem] sm:w-[19rem] md:w-[21.5rem] lg:w-[24rem] pl-[.25rem] h-[2.25rem] rounded-sm"
                />
              )}
            />
          </div>
          <div className="ml-[90px] text-[#B49167]">
            {typeof errors.company?.message === "string" && (
              <span>{errors.company.message}</span>
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
          <div className="ml-[90px] text-[#B49167]">
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
          <div className="ml-[90px] text-[#B49167]">
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
                  className="w-[11rem] xs:w-[14rem] ss:w-[17rem] sm:w-[19rem] md:w-[21.5rem] lg:w-[24rem] pl-[.25rem] rounded-sm"
                />
              )}
            />
          </div>
          <div className="ml-[90px] text-[#B49167]">
            {typeof errors.message?.message === "string" && (
              <span>{errors.message.message}</span>
            )}
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
