const UserCard = (props) => {
  return (
    <div>
      <h2>Name : {props.name} </h2>
      <h3>Phone : {props.phone}</h3>
    </div>
  );
};

export default UserCard;
