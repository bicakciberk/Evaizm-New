import Left from "./left/left";
import Right from "./right/right";

function biography() {
  return (
    <div
      id="biography"
      className="biography w-full h-screen 550px:px-[16px] px-[32px] flex items-center justify-center"
    >
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default biography;
