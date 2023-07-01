const UserCard = (props) => {
  return (
    <div>
      <h3>Amount : {props.transaction.amount}</h3>
      <h4>Category : {props.transaction.category}</h4>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default UserCard;
