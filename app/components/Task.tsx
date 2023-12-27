import { ITask } from '@/types/task';

interface Taskprops {
  task: ITask;
}

const Task: React.FC<Taskprops> = ({ task }) => {
  return (
    <tr key={task.id} className="hover">
      <th>{task.id}</th>
      <td>{task.text}</td>
      <td>blue</td>
    </tr>
  );
};

export default Task;
