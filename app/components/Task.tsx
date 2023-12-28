import { ITask } from '@/types/task';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface Taskprops {
  task: ITask;
}

const Task: React.FC<Taskprops> = ({ task }) => {
  return (
    <tr key={task.id} className="hover">
      <td>{task.text}</td>
      <td>Hello</td>
      <td>Hola!</td>
      <td>Capitivated</td>
      <td className="flex gap-5">
        <FiEdit className="text-blue-500" cursor="pointer" size={16} />
        <FiTrash2 className="text-red-400" cursor="pointer" size={19} />
      </td>
    </tr>
  );
};

export default Task;
