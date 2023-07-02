import Header from "./Header";
import UserCard from "./UserCard";
import Form from "./Form";
import { useState } from "react";

const users = ["carl", "ashley", "aryan", "alice"];

const Home = () => {
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();
  const [transactions, setTransactions] = useState([
    { amount: 200, category: "expense" },
  ]);

  const deleteTransaction = (id) => {
    const newTransactions = transactions.filter((item, index) => {
      if (index === id) {
        return false;
      } else {
        return true;
      }
    });

    setTransactions(newTransactions);
  };

  const updateTransaction = (id) => {
    const amountInp = prompt("Please enter an amount you want to update ?");

    const newTransactions = transactions.map((item, index) => {
      if (id == index) {
        return { ...item, amount: amountInp };
      } else {
        return item;
      }
    });

    setTransactions(newTransactions);
  };

  const displayCard = (item, id) => {
    return (
      <UserCard
        item={item}
        id={id}
        deleteTransaction={deleteTransaction}
        updateTransaction={updateTransaction}
      />
    );
  };

  const detectClick = () => {
    console.log("The button is clicked");
  };

  return (
    <div>
      <Header />
      <Form
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      {/* <UserCard name="Carl" phone="1234543" />
      <UserCard name="Jack" phone="4534356" /> */}
      {transactions.map(displayCard)}

      {/* <button onClick={detectClick}>click on me</button> */}
    </div>
  );
};

export default Home;
