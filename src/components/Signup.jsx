import React, { useState } from "react";
import "./../style/form.css";
import axios from "axios";

const Signup = ({setToken}) => {
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let { name, email, password, cpassword } = user;
  console.log(user);

  function Updateuser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [key]: value });
  }

  async function SubmitForm(e) {
    e.preventDefault();

    if (!name || !email || !password || !cpassword) {
      setError("Please Fill All Details");
      setSucess("");
      return;
    }
    if (password != cpassword) {
      setError("fill Correct passwards");
      setSucess("");
      return;
    }

    try {
      const res = await axios.post(
        "https://instagram-express-app.vercel.app/api/auth/signup",
        user
      );
      setToken(res.data.data.token);
      setSucess("Signup Successful!");
      setError("");
      console.log(res.data);
    } catch (err) {
      setError(err.res?.data || "Something went wrong");
      setSucess("");
    }
  }

  return (
    <div>
      <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
      <div style={{ color: "green", fontWeight: "bold" }}>{sucess}</div>
      <h1>Signup</h1>
      <form onSubmit={SubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="username"
          onChange={Updateuser}
          value={name}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email here."
          onChange={Updateuser}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={Updateuser}
          value={password}
        />
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm Passward"
          onChange={Updateuser}
          value={cpassword}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
