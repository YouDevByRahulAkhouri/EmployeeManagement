import React, { useState, useEffect } from "react";

export default function AddDetail(props) {
  const [name, setName] = useState("Shermistha");
  useEffect(() => {
    setName(props.name);
  }, [props.name]);
  return (
    <div>
      <h1 value={name}>Hello World</h1>
    </div>
  );
}
