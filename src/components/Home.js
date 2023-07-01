import Header from "./Header";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import { useState } from "react";

const users = ["carl", "jack", "tom", "alice", "asif"];

const Home = () => {
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();
  const [transactions, setTransactions] = useState([
    { amount: 200, category: "expense" },
    { amount: 300, category: "saving" },
  ]);

  const displayUser = (transaction) => {
    return <UserCard transaction={transaction} />;
  };

  const buttonClick = () => {
    console.log("BUtton is clciked");
  };

  return (
    <div>
      <Header />
      <UserForm
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
      />
      {/* <UserCard name="Carl" phone="12345678" />
      <UserCard name="Prateek" phone="3435678" /> */}
      {transactions.map(displayUser)}

      {/* <button onClick={buttonClick}> Click Me</button> */}
    </div>
  );
};

export default Home;
