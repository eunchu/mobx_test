import { observable, action } from "mobx";

// store 는 기본적으로 class 형태로 작성 됨
export default class TestStore {
  // 저장할 데이터 선언
  @observable list;

  // constructor 안에서 초기화
  constructor() {
    this.list = 3;
  }

  // store 에 저장하는 함수 생성
  // @action.bound
  // addList(newList) {
  //   this.addList.push(newList);
  // }
}
