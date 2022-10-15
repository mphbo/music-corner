export const formDataInitialState = {
  username: "",
  email: "",
  url: "",
  password: "",
  passwordConfirm: "",
};

export const errorsInitialState = {
  username: {
    isError: false,
    description: "Please enter a username.",
  },
  email: {
    isError: false,
    description: "Please enter an email in the correct format.",
  },
  url: {
    isError: false,
    description: "Please enter a url in the correct format.",
  },
  password: {
    isError: false,
    description:
      "Please enter a password of minimum 8 characters, with at least one of each (uppercase, lowercase, number and special character).",
  },
  passwordConfirm: {
    isError: false,
    description: "Passwords do not match.",
  },
};

export const formFields = [
  {
    name: "username",
    label: "Username",
    placeholder: "Please choose a unique username",
    help: "",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    help: "",
    type: "email",
  },
  {
    name: "url",
    label: "SoundCloud Playlist URL",
    placeholder: "Please enter your playlist URL",
    help: "Please fill in the URL of your playlist directly from SoundCloud in the browser (Chrome, Safari, etc) NOT from the SoundCloud app, if using a mobile browser remove the m from the URL, for example: 'https://m.soundcloud.com/xyz becomes https://soundcloud.com/xyz'. YOU CANNOT USE THE SHARE LINK BUTTON.",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    help: "",
    type: "password",
  },
  {
    name: "passwordConfirm",
    label: "Confirm Password",
    placeholder: "Please confirm your password",
    help: "",
    type: "password",
  },
];
