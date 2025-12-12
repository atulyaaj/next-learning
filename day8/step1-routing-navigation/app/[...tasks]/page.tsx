export default async function Tasks({ params }: {
    params: Promise<{ tasks: string[] }>;
}){
    const { tasks } = await params;
return (
    <div className="w-400 bg-cyan-800 text-blue-50 h-25">
      <h2>Tasks Page</h2>
      <h2> {tasks[0]} {tasks[1]} {tasks[2]}</h2>
    </div>
  );
}