import React from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";

const LocalStateTest = () => {
  const todo = useLocalStore(() => ({
    title: "test",
    done: true,
    toggle() {
      this.done = !this.done;
    }
  }));

  return useObserver(() => (
    <h1>
      {todo.title} {todo.done ? "[DONE]" : "[TODO]"}
    </h1>
  ));
};

export default LocalStateTest;

// [useLocalStore]

// 반환 된 객체의 모든 속성이 자동으로 관찰 가능하게 됨
// 게터는 계산 된 속성으로 바뀜
// 메소드는 저장소에 바인딩되서 mobx 트랜젝션을 자동으로 적용함

// 주로 복잡한 로컬 상태에 사용
