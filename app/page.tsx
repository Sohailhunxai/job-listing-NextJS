import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { getAllTodos } from '@/api';
import Sidebar from './components/Sidebar';

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="flex flex-row  gap-48 ">
      <Sidebar />
      <div className="max-w-3xl ml-[400px] mt-4 absolute">
        <div className="text-center flex flex-col gap-4 justify-center">
          <h1 className="text-2xl font-bold">JOB LISTING</h1>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
