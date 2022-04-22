import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tr from "components/Tr";
import Modal from "components/Modal";

function Board() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    try {
      async function getData() {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setInfo(res.data);
        // console.log('res :>> ', res);
      }
      getData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);

    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    console.log("selectedData :>> ", selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleUpdate = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    }
  };

  const handleEditSubmit = (item) => {
    console.log("item :>> ", item);
    handleUpdate(item);
    setModalOn(false);
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="mt-5 mb-3 text-xl font-bold text-center">
        고객 정보 리스트
      </div>
      <table className="min-w-full text-gray-800">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-3 text-gray-300">Id.</th>
            <th className="px-4 py-3 text-gray-300">Name</th>
            <th className="px-4 py-3 text-gray-300">Email</th>
            <th className="px-4 py-3 text-gray-300">Phone No.</th>
            <th className="px-4 py-3 text-gray-300">Website</th>
            <th className="px-4 py-3 text-gray-300">Edit</th>
            <th className="px-4 py-3 text-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
        </tbody>
      </table>
      <button className="border-2 border-gray-500">
        <Link to="pages/Post">추가</Link>
      </button>

      {modalOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

export default Board;
