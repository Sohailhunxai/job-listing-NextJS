'use client';

import { FaPlus } from 'react-icons/fa';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskvalue, setNewTaskValue] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [Skills, setSkills] = useState<string>('');
  const [Criteria, setCriteria] = useState<string>('');
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskvalue,
      jobtitle: jobTitle,
      skills: Skills,
      criteria: Criteria,
    });
    setNewTaskValue('');
    setJobTitle('');
    setSkills('');
    setCriteria('');
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full font-bold text-lg text-white"
      >
        Add User
        <FaPlus size={15} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new user</h3>
          <div className="modal-action flex flex-col p-1">
            <input
              type="text"
              value={newTaskvalue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              placeholder="name"
              className="input input-bordered w-full max-w-full m-2"
            />

            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="job title"
              className="input input-bordered w-full max-w-full m-2"
            />
            <input
              type="text"
              value={Skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="skills"
              className="input input-bordered w-full max-w-full m-2"
            />
            <input
              type="text"
              value={Criteria}
              onChange={(e) => setCriteria(e.target.value)}
              placeholder="criteria"
              className="input input-bordered w-full max-w-full m-2"
            />

            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
