import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams(); // Obtém o objeto correto
  const title = searchParams.get("title"); // Chama .get() no searchParams
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TaskPage;
