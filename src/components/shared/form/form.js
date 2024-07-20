"use client";

import "./form.scss";

import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    units: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {props.isSection && (
        <div className="main-form__top">
          <h5>
            place <span className="outlined-text"> your</span> pre-launch{" "}
            <span className="outlined-text"> order and </span> get 10% off
          </h5>
          <p>
            Pre-launch orders will be supplied earlier. Fill in the form to
            secure your place.
          </p>
        </div>
      )}
      <div className="main-form__fields">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <input
          className="col-span-2"
          type="text"
          name="units"
          placeholder="No. of units"
          value={formData.units}
          onChange={handleChange}
        />
        <textarea
          className="col-span-2"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}></textarea>
      </div>
      <button type="submit">send</button>
    </form>
  );
}
