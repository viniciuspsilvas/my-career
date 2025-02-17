export async function fetchProjects() {
    const response = await fetch('/api/projects');
    const data = await response.json();
    return data;
  }