import Left from "./left/left";
import Right from "./right/right";

function bottom() {
  return (
    <div className="bottom 600px:p-[16px] p-[32px] flex justify-between absolute bottom-0 left-0 w-full">
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default bottom;
