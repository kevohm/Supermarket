const SingleEntity = ({ name, id, quantity, price, isTaxable }) => {
  return (
    <>
      <tr>
        <td colSpan={4}>{name}</td>
      </tr>
      <tr>
        <td>{id}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{`${price*quantity} ${isTaxable}`}</td>
      </tr>
    </>
  );
};

export default SingleEntity;
