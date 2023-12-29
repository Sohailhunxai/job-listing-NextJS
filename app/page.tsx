import Image from 'next/image';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { getAllTodos } from '@/api';
import Sidebar from './components/Sidebar';

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="flex flex-row">
      <Sidebar />
      <div className="max-w-3xl ml-32 mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Job Listing</h1>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
