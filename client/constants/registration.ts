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
    description: "Please type a username.",
  },
  email: {
    isError: false,
    description: "Please type an email in the correct format.",
  },
  url: {
    isError: false,
    description: "Please type a url in the correct format.",
  },
  password: {
    isError: false,
    description:
      "Please type a password of minimum 8 characters, with at least one of each (uppercase, lowercase, number and special character).",
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
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Please type your email",
    help: "",
  },
  {
    name: "url",
    label: "SoundCloud Playlist URL",
    placeholder: "Please fill in your playlist URL",
    help: "Please fill in the URL of your playlist directly from SoundCloud in the browser (Chrome, Safari, etc) NOT from the SoundCloud app, if using a mobile browser remove the m from the URL, for example: 'https://m.soundcloud.com/xyz becomes https://soundcloud.com/xyz'. YOU CANNOT USE THE SHARE LINK BUTTON.",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please type your password",
    help: "",
  },
  {
    name: "passwordConfirm",
    label: "Confirm Password",
    placeholder: "Please confirm your password",
    help: "",
  },
];
