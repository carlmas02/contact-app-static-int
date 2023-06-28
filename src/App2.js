import "./App.css";
import Header from "./components2/Header";
import Form from "./components2/Form";
import UserCard from "./components2/UserCard";

const users = ["carl", "ashley", "aryan", "alice"];

function App() {
  const displayCard = (user) => {
    return <UserCard name={user} />;
  };

  const detectClick = () => {
    console.log("The button is clicked");
  };

  return (
    <div className="App">
      <Header />
      <Form />
      {/* <UserCard name="Carl" phone="1234543" />
      <UserCard name="Jack" phone="4534356" /> */}
      {users.map(displayCard)}

      <button onClick={detectClick}>click on me</button>
    </div>
  );
}

export default App;
