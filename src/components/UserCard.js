const UserCard = (props) => {
  return (
    <div>
      <h3>Name : {props.name}</h3>
      <h4>Phone : {props.phone}</h4>
    </div>
  );
};

export default UserCard;
