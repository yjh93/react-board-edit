const Td = ({ item, handleRemove, handleEdit }) => {
  const onRemove = () => {
    handleRemove(item.id);
  };

  const onEdit = () => {
    handleEdit(item);
  };

  return (
    <tr>
      <td className="px-4 py-3">{item.id}</td>
      <td className="px-4 py-3">{item.name}</td>
      <td className="px-4 py-3">{item.email}</td>
      <td className="px-4 py-3">{item.phone}</td>
      <td className="px-4 py-3">{item.website}</td>
      <td
        onClick={onEdit}
        className="text-center text-purple-400 cursor-pointer show-modal"
      >
        edit
      </td>
      <td
        onClick={onRemove}
        className="text-center text-purple-400 cursor-pointer"
      >
        delete
      </td>
    </tr>
  );
};

export default Td;
