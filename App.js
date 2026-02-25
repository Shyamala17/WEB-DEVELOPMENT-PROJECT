import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import Suggestions from "./components/Suggestions";

function App() {
  // ✅ Initialize resumeData with default values
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: ""
  });

  const [suggestions, setSuggestions] = useState("");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Smart Resume Builder</h1>

      <ResumeForm setResumeData={setResumeData} setSuggestions={setSuggestions} />
      <ResumePreview data={resumeData} />
      <Suggestions resumeData={resumeData} />

      <button
        onClick={() => window.print()}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Export as PDF
      </button>
    </div>
  );
}

export default App;
