export interface MenuLink {
  route: string;
  label: string;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}


export type OptionType = { value: string; label: string };

export interface WebsiteForm {
  // Website Info
  websiteType: OptionType;
  pages: string;
  // Contact Info
  name: string;
  phone: string;
  email: string;
  message: string;
}
