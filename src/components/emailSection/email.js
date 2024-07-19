import Right from "./right/right";
import Left from "./left/left";

function Email() {
  return (
    <div
      id="contact"
      className="email flex h-screen justify-center items-center "
    >
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default Email;
