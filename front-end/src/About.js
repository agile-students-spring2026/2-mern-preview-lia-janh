import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/api/about")
      .then(res => setData(res.data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>About Us</h1>

      <h2>{data.name}</h2>

      <p>{data.bio}</p>

      <img src={data.imageUrl} width="200" />
    </div>
  );
}

export default About;
