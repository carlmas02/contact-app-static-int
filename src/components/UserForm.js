const UserForm = (props) => {
  const handleInput = (event) => {
    console.log(event.target.value);
    props.setAmount(event.target.value);
  };

  const changeCategory = () => {
    props.setCategory("expense");
  };

  const handleSubmit = () => {
    const tempObj = { amount: props.amount, category: props.category };
    props.setTransactions([...props.transactions, tempObj]);
  };

  return (
    <div>
      {/* {props.amount}
      {props.category} */}
      <input type="number" onChange={handleInput} placeholder="Enter Amount" />
      <p></p>
      <input
        type="radio"
        onClick={() => {
          props.setCategory("expense");
        }}
        name="category"
      />
      <label>Expense</label> <br />
      <input
        type="radio"
        onClick={() => {
          props.setCategory("saving");
        }}
        name="category"
      />{" "}
      <label>Saving</label> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserForm;
