export interface MenuLink {
  route: string;
  label: string;
}

export interface FormData {
  contactname: string;
  phone: string;
  email: string;
  message: string;
}


export type OptionType = { value: string; label: string };

export interface WebsiteForm {
  timeline: string;
  company?: string;
  designStyle?: string;
  specialFeatures?: string;
  seo?: boolean;
  cms?: boolean;
  authentication?: boolean;
  theme?: boolean;
  payment?: boolean;
  appointment?: boolean;
  budget?: string;
  timeline?: string;
  websiteType: OptionType;
  pages: string;
  // Contact Info
  name: string;
  phone: string;
  email: string;
  message: string;

}
