const UserCard = (props) => {
  return (
    <div>
      <h2>Amount : {props.item.amount} </h2>
      <h3>Category : {props.item.category}</h3>
      <button
        onClick={() => {
          props.updateTransaction(props.id);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          props.deleteTransaction(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;
