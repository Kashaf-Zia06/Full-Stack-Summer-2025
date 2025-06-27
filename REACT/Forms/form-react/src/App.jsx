import { useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import SuccessMessage from './SuccessMessage';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, //isSubmitting  is a flag attached in it
    reset
  } = useForm();

  async function onSubmit(data) {
    setSubmitted(false);
    await new Promise(resolve => setTimeout(resolve, 2000)); //Simulation for form submission
    console.log("Submitted data:", data);
    setSubmitted(true);
    reset(); // Reset form after submit
  }

  return (
    <div className="form-container">
      <h2>React Hook Form Demo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>First Name:</label>
        <input
          className={errors.first_name ? "err" : ""}
          type="text"
          placeholder="Enter First Name"
          {...register("first_name", {
            required: "First name is required",
            minLength: {
              value: 5,
              message: "Minimum length is 5 characters"
            }
          })}
        />
        {errors.first_name && <p className="msg-err">{errors.first_name.message}</p>}

        <label>Middle Name:</label>
        <input
          type="text"
          placeholder="Enter Middle Name (optional)"
          {...register("middle_name")}
        />

        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          {...register("last_name")}
        />

        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>

      {submitted && <SuccessMessage />}
    </div>
  );
}

export default App;
