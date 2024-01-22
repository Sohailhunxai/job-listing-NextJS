'use client';
import { ITask } from '@/types/task';
import { FormEventHandler, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';

interface Taskprops {
  task: ITask;
}

const Task: React.FC<Taskprops> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const [jobTitleToEdit, setJobTitleToEdit] = useState<string>(task.jobtitle);
  const [skillsToEdit, setSkillsToEdit] = useState<string>(task.skills);
  const [criteriaToEdit, setCriteriaToEdit] = useState<string>(task.criteria);
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
      jobtitle: jobTitleToEdit,
      skills: skillsToEdit,
      criteria: criteriaToEdit,
    });

    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id} className="hover">
      <td>{task.text}</td>
      <td>{task.jobtitle}</td>
      <td>{task.skills}</td>
      <td>{task.criteria}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          className="text-blue-500"
          cursor="pointer"
          size={16}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg text-center">Edit Info</h3>
            <div className="modal-action flex flex-col">
              <input
                type="text"
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                placeholder="name"
                className="input input-bordered w-full max-w-full m-2"
              />
              <input
                type="text"
                value={jobTitleToEdit}
                onChange={(e) => setJobTitleToEdit(e.target.value)}
                placeholder="job title"
                className="input input-bordered w-full max-w-full m-2"
              />

              <input
                type="text"
                value={skillsToEdit}
                onChange={(e) => setSkillsToEdit(e.target.value)}
                placeholder="skills"
                className="input input-bordered w-full max-w-full m-2"
              />

              <input
                type="text"
                value={criteriaToEdit}
                onChange={(e) => setCriteriaToEdit(e.target.value)}
                placeholder="criteria"
                className="input input-bordered w-full max-w-full m-2"
              />

              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          className="text-red-400"
          cursor="pointer"
          size={19}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-m font-bold ">Are you absolutey sure ?</h3>
          <p className="mt-2 text-gray-500">
            This action cannot be undone. This Will permanently delete and
            remove the user data from our server.
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="btn glass font-bold mt-[-15px] "
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
