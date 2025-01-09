import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ token }) => {
    const [zuku,setZuku]=useState("");
    const [uname,setName]=useState("");
  useEffect(() => {
    async function fetchZuku() {
      try {
        const response = await axios.get(
          "https://instagram-express-app.vercel.app/api/auth/zuku",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setZuku(response.data.data.message);
        setName(response.data.data.user.name);
      } catch (err) {
        console.log(err.response.data);
      }
    }

    fetchZuku();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{uname}</h1>
      <h3>{zuku}</h3>

    </div>
  );
};

export default Dashboard;
