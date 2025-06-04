import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedPojectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedPojectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedPojectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedPojectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
