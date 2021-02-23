import React, { useState, useEffect } from "react";

export default function TotalEmployee() {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiUrl = " http://127.0.0.1:5000/lms/totalEmployees";
    setLoading(true);
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data.count);
        setLoading(false);
      })

      .catch((err) => {
        setHasError(true);
        setLoading(false);
      });
  }, []);
  console.log(state);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        state && <div>{state}</div>
      )}
    </div>
  );
}
