import { useState } from "react";
import { createUser, login } from "../../utils";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
      if (bool) {
        login(username, pass, setUser);
      } else if (email && email.includes("@")) {
        createUser(username, email, pass, setUser);
      }
  };

    return (
      <>
        <form onSubmit={submitHandler}>
          <input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          {!bool && (
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              type="email"
            />
          )}
          <input
            onChange={(event) => setPass(event.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setBool(!bool)}>Log-in or Sign-up</button>
      </>
    );
  };