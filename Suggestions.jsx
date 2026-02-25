import React, { useEffect, useState } from "react";

export default function Suggestions({ resumeData }) {
  const [tips, setTips] = useState("");

  useEffect(() => {
    if (resumeData && resumeData.name) {
      setTips("Try adding measurable achievements to your experience section.");
    }
  }, [resumeData]);

  return (
    <div className="bg-yellow-100 p-4 mt-4 rounded">
      <h2 className="font-bold">AI Suggestions</h2>
      <p>{tips || "Fill the form to get suggestions."}</p>
    </div>
  );
}
