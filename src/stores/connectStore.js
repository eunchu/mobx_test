import { observable, action, computed } from "mobx";

export default class ConnectStore {
  @observable exempleState = "";

  constructor(root) {
    this.root = root;
  }

  @action
  put = name => {
    // 스토어에서 다른 스토어로 접근
    const { libs } = this.root.libs;

    this.exempleState = libs.name;
  };
}
