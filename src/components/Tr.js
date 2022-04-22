import Td from "components/Td";

const Tr = ({ info, handleRemove, handleEdit }) => {
  return (
    <>
      {info.map((item) => {
        return (
          <Td
            key={item.id}
            item={item}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        );
      })}
    </>
  );
};

export default Tr;
