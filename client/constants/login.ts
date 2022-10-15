export const formDataInitialState = {
  email: "",
  password: "",
};

export const errorsInitialState = {
  email: {
    isError: false,
    description: "Please enter an email in the correct format.",
  },
  password: {
    isError: false,
    description:
      "Please enter a password of minimum 8 characters, with at least one of each (uppercase, lowercase, number and special character).",
  },
};

export const formFields = [
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    help: "",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    help: "",
    type: "password",
  },
];
