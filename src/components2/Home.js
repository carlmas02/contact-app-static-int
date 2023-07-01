import Header from "./Header";
import UserCard from "./UserCard";
import Form from "./Form";
import { useState } from "react";

const users = ["carl", "ashley", "aryan", "alice"];

const Home = () => {
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();

  const displayCard = (user) => {
    return <UserCard name={user} />;
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
      />
      {/* <UserCard name="Carl" phone="1234543" />
      <UserCard name="Jack" phone="4534356" /> */}
      {users.map(displayCard)}

      <button onClick={detectClick}>click on me</button>
    </div>
  );
};

export default Home;
