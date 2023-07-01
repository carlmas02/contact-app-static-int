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

  const deleteTransaction = (id) => {
    setTransactions(() => {
      return transactions.filter((item, index) => {
        if (id == index) {
          return false;
        } else {
          return true;
        }
      });
    });
  };

  const updateTransaction = (id) => {
    const userInput = prompt("Please enter the amount you want to update");

    const newTransactions = transactions.map((item, index) => {
      if (index == id) {
        return { ...item, amount: userInput };
      } else {
        return item;
      }
    });
    setTransactions(newTransactions);
  };

  const displayUser = (transaction, id) => {
    return (
      <UserCard
        transaction={transaction}
        id={id}
        deleteTransaction={deleteTransaction}
        updateTransaction={updateTransaction}
      />
    );
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
        transactions={transactions}
        setTransactions={setTransactions}
      />
      {/* <UserCard name="Carl" phone="12345678" />
      <UserCard name="Prateek" phone="3435678" /> */}
      {transactions.map(displayUser)}

      {/* <button onClick={buttonClick}> Click Me</button> */}
    </div>
  );
};

export default Home;
