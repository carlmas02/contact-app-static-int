import Header from "./Header";
import UserForm from "./UserForm";
import UserCard from "./UserCard";


const users = ["carl", "jack", "tom", "alice", "asif"];

const Home = () => {
  const displayUser = (user) => {
    return <UserCard name={user} />;
  };

  return (
    <div>
      <Header />
      <UserForm />
      {/* <UserCard name="Carl" phone="12345678" />
      <UserCard name="Prateek" phone="3435678" /> */}
      {users.map(displayUser)}
    </div>
  );
};

export default Home;
