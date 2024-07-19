import Left from "./left/left";
import Right from "./right/right";

function biography() {
  return (
    <div
      id="biography"
      className="biography h-screen 600px:px-[16px] px-[32px] flex items-center justify-center z-50"
    >
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default biography;
