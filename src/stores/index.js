import LibStore from "./libStore";

export default class RootStore {
  constructor() {
    this.libs = new LibStore(this);
  }
}
