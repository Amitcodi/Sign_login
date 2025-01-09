import React, { useState } from "react";
import axios from "axios";

const Login = ({token,setToken}) => {
 
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let { email, password } = user;

  console.log(user);

  function Updateuser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [key]: value });
  }

  async function SubmitForm(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Please Fill All Details");
      setSucess("");
      return;
    }

    try {
      const res = await axios.post(
        "https://instagram-express-app.vercel.app/api/auth/login",
        user
      );
      setToken(res.data.data.token)
      setSucess(res.data.message)
      setError("");
      console.log(res.data);
    } catch (err) {
      setSucess("");
      setError(err.res?.data || "Something went wrong");

    }
  }
  return (
    <div>
      <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
      <div style={{ color: "green", fontWeight: "bold" }}>{sucess}</div>
      <h1>Login</h1>
      <form onSubmit={SubmitForm}>
        <input
          type="email"
          name="email"
          placeholder="Enter email here."
          onChange={Updateuser}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={Updateuser}
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
