import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "" });

  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;

    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData, 
        // Below is an exampled of Computed Property Names syntax
        [changedField]: newValue,
       };
    });
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
    return (
      <div>
        <label htmlFor="username">First Name</label>
        <input
          type="text"
          placeholder="firstName"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          id="firstName"
        />
        <label htmlFor="username">Last Name</label>

        <input
          type="text"
          placeholder="lastName"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          id="lastName"
        />

        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          name="passsword"
          id="password"
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };


export default SignupForm;
