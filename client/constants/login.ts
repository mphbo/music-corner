export const formDataInitialState = {
  email: "",
  password: "",
};

export const errorsInitialState = {
  email: {
    isError: false,
    description: "Please type an email in the correct format.",
  },
  password: {
    isError: false,
    description:
      "Please type a password of minimum 8 characters, with at least one of each (uppercase, lowercase, number and special character).",
  },
};

export const formFields = [
  {
    name: "email",
    label: "Email",
    placeholder: "Please type your email",
    help: "",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please type your password",
    help: "",
  },
];
