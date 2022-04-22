import { useState } from "react";

const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
  const [edited, setEdited] = useState(selectedData);

  const onCancel = () => {
    handleCancel();
  };

  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-70">
      <div className="w-10/12 bg-white rounded shadow-lg md:w-1/3">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h3 className="text-lg font-semibold">고객 정보 수정하기</h3>
          <div className="cursor-pointer" onClick={onCancel}>
            X
          </div>
        </div>
        <form onSubmit={onSubmitEdit}>
          <div className="p-3">
            <div>ID: {edited.id}</div>
            <div>
              name:{" "}
              <input
                type="text"
                name="name"
                className="border-2 border-gray-100"
                value={edited.name}
                onChange={onEditChange}
              />
            </div>
            <div>
              email:{" "}
              <input
                type="text"
                name="email"
                className="border-2 border-gray-100"
                value={edited.email}
                onChange={onEditChange}
              />
            </div>
            <div>
              phone:{" "}
              <input
                type="text"
                name="phone"
                className="border-2 border-gray-100"
                value={edited.phone}
                onChange={onEditChange}
              />
            </div>
            <div>
              website:{" "}
              <input
                type="text"
                name="website"
                className="border-2 border-gray-100"
                value={edited.website}
                onChange={onEditChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-end p-3 border-t">
            <button
              className="px-3 py-1 mr-1 text-white bg-red-600 rounded hover:bg-red-700 close-modal"
              onClick={onCancel}
            >
              취소
            </button>
            <button
              className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
              type="submit"
            >
              수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
