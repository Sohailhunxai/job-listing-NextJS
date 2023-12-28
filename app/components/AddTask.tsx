'use client';

import { FaPlus } from 'react-icons/fa';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { FcOk } from 'react-icons/fc';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskvalue, setNewTaskValue] = useState<string>('');
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskvalue,
    });
    setNewTaskValue('');
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
          <div className="modal-action">
            <input
              type="text"
              value={newTaskvalue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <button className="btn" type="submit">
              {/* <FcOk size={25} /> */}
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
