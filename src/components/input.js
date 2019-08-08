import React from "react";
import { observer } from "mobx-react";

// 내부에 있는 컴포넌트에도 observer를 구현해야
// 성능 최적화가 일어남
const Input = observer(({ libs }) => {
  return <div>input</div>;
});

export default Input;

// or

// const Input = ({ libs }) => {
//   return <div>input 정보</div>;
// };

// export default observer(Input);
