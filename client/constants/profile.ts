export const formDataInitialState = {
  email: "",
  username: "",
  url: "",
};

export const errorsInitialState = {
  email: {
    isError: false,
    description: "Please enter an email in the correct format.",
  },
  username: {
    isError: false,
    description: "Please enter a unique username.",
  },
  url: {
    isError: false,
    description: "Please enter a url in the correct format.",
  },
};

export const formFields = [
  {
    name: "username",
    label: "Username",
    placeholder: "Please enter your new username",
    help: "",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your new email",
    help: "",
  },
  {
    name: "url",
    label: "SoundCloud Playlist URL",
    placeholder: "Please enter your playlist URL",
    help: "Please fill in the URL of your playlist directly from SoundCloud in the browser (Chrome, Safari, etc) NOT from the SoundCloud app, if using a mobile browser remove the m from the URL, for example: 'https://m.soundcloud.com/xyz becomes https://soundcloud.com/xyz'. YOU CANNOT USE THE SHARE LINK BUTTON.",
  },
];
