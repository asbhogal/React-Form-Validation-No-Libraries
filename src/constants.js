const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Please enter a username between 3-16 characters with no spaces or special characters"
    },
    {
      id: 2,
      name: "emailAddress",
      type: "text",
      placeholder: "Email Address",
      label: "Email Address",
      errorMessage: "Please enter a valid email address"
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage: "Please select a birth date"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Please enter a password between 8 - 64 characters in length, with at least 1 uppercase, 1 lowercase and a special symbol (e.g. */£!"
    },
    {
      id: 5,
      name: "repeatPassword",
      type: "password",
      placeholder: "Repeat Password",
      label: "Repeat Password",
      errorMessage: "Please make sure the password entered matches the password above"
    }
]

export default inputs;