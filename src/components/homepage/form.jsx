import React from "react";
import "../../script";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Rest of your code

function GiftIdeasForm() {
  const [relationship, setRelationship] = useState("");
  const [age, setAge] = useState("");
  const [occasion, setOccasion] = useState("");
  const [interests, setInterests] = useState("");
  const [budget, setBudget] = useState("");

  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] = useState({
    relationship: false,
    age: false,
    occasion: false,
    interests: false,
    budget: false,
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "relationship":
        setRelationship(value);
        break;
      case "age":
        setAge(value);
        break;
      case "occasion":
        setOccasion(value);
        break;
      case "interests":
        setInterests(value);
        break;
      case "budget":
        setBudget(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValidationErrors = {
      relationship: !relationship,
      age: !age,
      occasion: !occasion,
      interests: !interests,
      budget: !budget,
    };

    setValidationErrors(newValidationErrors);

    if (!Object.values(newValidationErrors).some((error) => error)) {
      // performFormSubmission();
      navigate("/gift");
    }
  };

  return (
    <>
    <div className="container w-screen">
      <main>
        <div className="pt-5 text-center">
          <h2 className="text-3xl font-semibold text-[#00CCFE]">AI Curated Gift Ideas</h2>
          <p className="lead text-md lg:mx-16 mx-2 my-2 text-[#0099CC] font-poppins font-semibold">
            Our AI-powered tool will guide you in choosing the perfect gift when
            you're unsure about what to buy. Simply fill out the form below with
            information about the recipient and your budget, and we'll suggest a
            curated list of gifts!
          </p>
        </div>
        <div className="row g-5">
          <div>
            <form
              className="w-full max-w-lg mx-auto my-4 bg-opacity-30 backdrop-blur-lg bg-white p-6 rounded-lg shadow-lg"
              action="/gifts"
              method="post"
              onSubmit={handleSubmit}
              noValidate
            >
              <h4 className="text-2xl font-semibold text-center ">Gift Details</h4>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="relationship"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Relationship
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    id="relationship"
                    name="relationship"
                    placeholder="Enter relationship"
                    value={relationship}
                    onChange={handleInputChange}
                    required
                  />

                  {validationErrors.relationship && (
                    <div className="text-red-600 text-xs mt-1">
                      Relationship information is required.
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    id="age"
                    name="age"
                    value={age}
                    onChange={handleInputChange}
                    placeholder="Enter age"
                    required
                  />
                  {validationErrors.age && (
                    <div className="text-red-600 text-xs mt-1">
                      Age information is required.
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="occasion"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Occasion
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    id="occasion"
                    name="occasion"
                    placeholder="Enter occasion"
                    value={occasion}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.occasion && (
                    <div className="text-red-600 text-xs mt-1">
                      occasion information is required.
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="interests"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Interests
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    id="interests"
                    name="interests"
                    placeholder="Enter interests"
                    value={interests}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.interests && (
                    <div className="text-red-600 text-xs mt-1">
                      interests information is required.
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Budget
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    id="budget"
                    name="budget"
                    placeholder="Enter budget"
                    value={budget}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.budget && (
                    <div className="text-red-600 text-xs mt-1">
                      budget information is required.
                    </div>
                  )}
                </div>
              </div>
              <hr className="my-4" />
              <button
                className="w-full bg-[#00CCFE] text-white py-2 px-4 rounded-lg hover:bg-[#0099CC]  transition duration-300"
                type="submit"
              >
                Get Gift Suggestions
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
   
    </>
    
  );
}

export default GiftIdeasForm;
