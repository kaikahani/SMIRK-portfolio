// components/ProjectCredits.jsx

export default function ProjectCredits({ credits }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 text-left">
      {credits.map(({ role, name }, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold tracking-tight uppercase">
            {role}
          </h3>
          <p className="whitespace-pre-line">{name}</p>
        </div>
      ))}
    </div>
  );
}
