const UserCard = (props) => {
  return (
    <div className="usercard">
      <h3>Amount : {props.transaction.amount}</h3>
      <h4>Category : {props.transaction.category}</h4>
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
