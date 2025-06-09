import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedPojectId: undefined,
    projects: [],
  });

  function handleSelectProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedPojectId: projectId,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedPojectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedPojectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
          ...prevState,
          selectedPojectId: undefined,
          projects: [...prevState.projects, newProject]
      }
    });
  }

  const selectedPoject = projectsState.projects.find(project => project.id === projectsState.selectedPojectId);

  let content = <SelectedProject project={selectedPoject} />;

  if (projectsState.selectedPojectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedPojectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        onSelectProject={handleSelectProject}
        projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
