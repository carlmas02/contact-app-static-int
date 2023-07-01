const UserCard = (props) => {
  return (
    <div>
      <h2>Amount : {props.item.amount} </h2>
      <h3>Category : {props.item.category}</h3>
      <button>Edit</button>
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
