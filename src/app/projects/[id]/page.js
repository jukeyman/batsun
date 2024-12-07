export async function generateStaticParams() {
  // For now, we'll generate static paths for a few sample projects
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

export default function ProjectPage({ params }) {
  const projects = {
    '1': { 
      name: 'AI Implementation for Local Restaurant', 
      description: 'Automated ordering and inventory management system', 
      client: 'Santa Fe Grill' 
    },
    '2': { 
      name: 'Business Formation Package', 
      description: 'Complete LLC setup and compliance management', 
      client: 'Tech Startup NM' 
    },
    '3': { 
      name: 'HR System Implementation', 
      description: 'Full HR and payroll system setup', 
      client: 'Desert Manufacturing' 
    }
  };

  const project = projects[params.id];

  if (!project) {
    return (
      <div className="container py-8">
        <h1>Project Not Found</h1>
        <p>The requested project does not exist.</p>
      </div>
    );
  }

  return (
    <div className="project-page py-8">
      <div className="container">
        <h1>{project.name}</h1>
        <p className="text-xl font-bold mt-4">Client: {project.client}</p>
        <p className="mt-4">{project.description}</p>
      </div>
    </div>
  );
}
