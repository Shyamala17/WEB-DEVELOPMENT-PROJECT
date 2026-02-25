export default function ResumeForm({ setResumeData, setSuggestions }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData({
      name: e.target.name.value,
      email: e.target.email.value,
      education: e.target.education.value,
      experience: e.target.experience.value,
      skills: e.target.skills.value
    });
    setSuggestions("Try adding measurable achievements to your experience section.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input name="name" placeholder="Name" className="border p-2 w-full" />
      <input name="email" placeholder="Email" className="border p-2 w-full" />
      <input name="education" placeholder="Education" className="border p-2 w-full" />
      <input name="experience" placeholder="Experience" className="border p-2 w-full" />
      <input name="skills" placeholder="Skills" className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Generate Resume
      </button>
    </form>
  );
}
