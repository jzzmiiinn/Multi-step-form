export interface PersonalInfoValues {
  name: string;
  email: string;
  phone: string;
}

export interface PersonalInfoErrors {
  name: string;
  email: string;
  phone: string;
}

export const validatePersonalInfo = (
  values: PersonalInfoValues,
): PersonalInfoErrors => {
  return {
    name: values.name.trim() ? "" : "This field is required",

    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
      ? ""
      : "Enter a valid email address",

    phone:
      /^\+?[0-9\s()-]{7,20}$/.test(values.phone.trim()) &&
      values.phone.replace(/\D/g, "").length >= 7
        ? ""
        : "Enter a valid phone number",
  };
};
