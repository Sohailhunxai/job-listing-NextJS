import { FaPlus } from 'react-icons/fa';

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full font-bold text-lg">
        Add User
        <FaPlus size={15} />
      </button>
    </div>
  );
};

export default AddTask;
