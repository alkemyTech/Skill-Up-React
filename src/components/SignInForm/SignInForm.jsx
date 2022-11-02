import React from "react";
import { UsersPOSTEndpointSchema } from "../../schemas/UserSchema";
import { HTTPVerbs } from "../../utils/HTTPVerbs";

const regexValidator = {
  first_name: /[a-zA-Z]/,
  last_name: /[a-zA-Z]/,
  email: /[a-zA-Z]/,
  password: /[a-zA-Z]/,
};

const first = async ({ userPostEndPoint, signal }) => {
  const body = UsersPOSTEndpointSchema.parse(userPostEndPoint);
  const response = await fetch(
    "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users",
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      signal,
      method: HTTPVerbs.POST,
      body: JSON.stringify(body),
    }
  );

  const result = await response.json();

  console.log(result);
};

/**
 * @typedef {Object} CustomProps
 * @property {string} [label]
 * @param {React.ComponentProps<"input"> & CustomProps} props
 */
export const Input = React.forwardRef(
  ({ label, className, onError, onChange, pattern, ...props }, ref) => {
    const id = React.useId();
    return (
      <div>
        {label && <label htmlFor={id}>{label}: </label>}
        <input
          {...props}
          ref={ref}
          onChange={(e) => {
            onChange(e);
            onError(pattern.test(e.target.value));
          }}
          id={id}
          className={`${className} border border-ct-neutral-ligth-400`}
        />
      </div>
    );
  }
);

export const SignInForm = () => {
  const formValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const [firstName, setFirstName] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // first({ userPostEndPoint: formValue });
      }}
      className={`border p-8 flex flex-col gap-4 max-w-md border-ct-neutral-medium-300 rounded bg-ct-neutral-medium-200/10 mx-auto`}
    >
      <h1>Crear cuenta</h1>

      <Input
        label="First name"
        name="first_name"
        pattern={regexValidator.first_name}
        onError={(e) => {
          console.log(e);
        }}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />

      <Input
        label="Last name"
        name="last_name"
        pattern="[a-zA-Z]"
        onChange={() => {}}
        value={formValue.last_name}
      />

      <Input
        label="Email"
        name="email"
        onChange={() => {}}
        value={formValue.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        onChange={() => {}}
        value={formValue.password}
      />
      <button type="submit" className="border">
        submit
      </button>
    </form>
  );
};
