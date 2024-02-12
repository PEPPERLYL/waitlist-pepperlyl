"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import jobs from "@/assets/lists/Jobs";
import countries from "@/assets/lists/Countries";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function addDataToFireStore(email, name, age, country, job) {
  try {
    const docRef = await addDoc(collection(db, "New User"), {
      email: email,
      name: name,
      age: age,
      country: country,
      job: job,
    });
    return true;
  } catch (error) {
    return false;
  }
}
const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");
  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [suggestedJobs, setSuggestedJobs] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleCountryChange = (value) => {
    // Update the country as the user types
    setCountry(value);

    // Filter the suggested countries based on the input value
    const suggestions = countries.filter(
      (country) =>
        country.toLowerCase().includes(value.toLowerCase()) &&
        country.toLowerCase() !== value.toLowerCase()
    );

    // Display up to 3 suggestions
    setSuggestedCountries(suggestions.slice(0, 3));
  };

  const handleSuggestedCountryClick = (suggestedCountry) => {
    // Set the selected country when a suggestion is clicked
    setCountry(suggestedCountry);
    setSuggestedCountries([]); // Clear suggestions
  };

  const handleJobChange = (value) => {
    // Update the job as the user types
    setJob(value);

    // Filter the suggested jobs based on the input value
    const suggestions = jobs.filter(
      (job) =>
        job.toLowerCase().includes(value.toLowerCase()) &&
        job.toLowerCase() !== value.toLowerCase()
    );

    // Display up to 3 suggestions
    setSuggestedJobs(suggestions.slice(0, 3));
  };

  const handleSuggestedJobClick = (suggestedJob) => {
    // Set the selected job when a suggestion is clicked
    setJob(suggestedJob);
    setSuggestedJobs([]); // Clear suggestions
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation errors on each submit attempt
    setValidationErrors([]);

    // Basic email validation
    if (!email || !email.includes("@")) {
      setValidationErrors(["Please enter a valid email address."]);
      return;
    }

    // Name validation
    if (name.length < 3 || name.length > 50) {
      setValidationErrors(["Full name should be between 3 and 50 characters."]);
      return;
    }

    // Basic age validation
    if (isNaN(age) || age < 16 || age > 75) {
      setValidationErrors(["Please enter a valid age between 16 and 75."]);
      return;
    }

    // Country validation
    if (!country) {
      setValidationErrors(["Please select a valid country."]);
      return;
    }

    // Job validation
    if (!job) {
      setValidationErrors(["Please enter a valid job description."]);
      return;
    }

    const added = await addDataToFireStore(email, name, age, country, job);
    if (added) {
      setEmail("");
      setName("");
      setAge("");
      setCountry("");
      setJob("");
      setSuggestedCountries([]);
      setSuggestedJobs([]);

      // Reset validation errors after successful submission
      setValidationErrors([]);
      // Show success toast
      toast.success("You been added to Waitlist !!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Refresh the webpage after 20 seconds
      setTimeout(() => {
        window.location.reload();
      }, 20000); // 20 seconds delay
    }
  };

  return (
    <div className="pb-5">
      <div className="flex items-center justify-center pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white text-lg lg:text-2xl font-bold"
        >
          Join our waiting list
        </motion.div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-4 mb-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-1/2 h-12 rounded-lg border border-white border-opacity-50 justify-start px-5  items-center flex"
          >
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              className="text-white text-opacity-90 text-lg font-medium bg-transparent border-none focus:outline-none w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-1/2 h-12 rounded-lg border border-white border-opacity-50 justify-start px-5  items-center flex"
          >
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name*"
              className="text-white text-opacity-90 text-lg font-medium bg-transparent border-none focus:outline-none w-full"
            />
          </motion.div>
        </div>
        <div className="flex gap-4 mb-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-1/2 h-12 rounded-lg border border-white border-opacity-50 justify-start px-5 lg:mb-0 mb-2 items-center flex"
          >
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age*"
              min="16"
              max="60"
              className="text-white w-full text-opacity-90 text-lg font-medium bg-transparent border-none focus:outline-none"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-1/2 h-12 rounded-lg border border-white border-opacity-50 justify-start px-5 items-center flex relative"
          >
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => handleCountryChange(e.target.value)}
              placeholder="Country*"
              className="text-white text-opacity-90 text-lg font-medium bg-transparent border-none focus:outline-none w-full"
            />
            {suggestedCountries.length > 0 && (
              <div className="absolute top-12 left-0 right-0 bg-white rounded-b-lg z-10 overflow-y-auto max-h-20">
                {suggestedCountries.map((suggestedCountry) => (
                  <div
                    key={suggestedCountry}
                    className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
                    onClick={() =>
                      handleSuggestedCountryClick(suggestedCountry)
                    }
                  >
                    {suggestedCountry}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full h-12 rounded-lg border border-white border-opacity-50 justify-start px-5 items-center flex relative"
        >
          <input
            type="text"
            id="job"
            value={job}
            onChange={(e) => handleJobChange(e.target.value)}
            placeholder="What best describes you?"
            className="text-white text-opacity-90  text-lg font-medium bg-transparent border-none focus:outline-none w-full"
          />
          {suggestedJobs.length > 0 && (
            <div className="absolute top-12 left-0 right-0 bg-white rounded-b-lg z-10 overflow-y-auto max-h-20">
              {suggestedJobs.map((suggestedJob) => (
                <div
                  key={suggestedJob}
                  className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
                  onClick={() => handleSuggestedJobClick(suggestedJob)}
                >
                  {suggestedJob}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="flex pt-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-32 h-12 text-emerald-800 rounded-lg bg-white font-semibold"
          >
            Submit
          </motion.button>
        </div>
        <div className="flex justify-center">
          {/*validation Error messages*/}
          {validationErrors.map((error, index) => (
            <p key={index} className="text-white text-sm font-bold">
              {error}
            </p>
          ))}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
