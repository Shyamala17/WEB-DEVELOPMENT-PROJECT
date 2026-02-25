export default function ResumePreview({ data }) {
  return (
    <div className="p-4 border rounded bg-white">
      <h1 className="text-xl font-bold">{data.name}</h1>
      <p>{data.email}</p>
      <h2 className="font-semibold mt-2">Education</h2>
      <p>{data.education}</p>
      <h2 className="font-semibold mt-2">Experience</h2>
      <p>{data.experience}</p>
      <h2 className="font-semibold mt-2">Skills</h2>
      <p>{data.skills}</p>
    </div>
  );
}
