import { observable, action, computed, reaction } from "mobx";

export default class LibStore {
  // observable로 감시
  @observable libs = [...Array(30)].map((_, i) => ({
    id: i,
    name: `lib${i}`
  }));

  @observable params = [...Array(30)].map((_, i) => ({
    id: i,
    libName: `lib${i}`,
    params: [...Array(10)].map((_, i) => ({
      name: `lib${i}_param_${i}`,
      value: `paramValue_${i}`,
      type: "int"
    }))
  }));

  @observable clickedLibName;

  constructor(root) {
    this.root = root;
  }

  @action
  add = name => {
    const exists = this.libs.find(lib => lib.name === name);
    if (!exists) this.libs.push({ id: this.libs.length + 1, name });
    if (exists) console.log("이미 있음");
  };

  @action
  update = value => {
    let result;
    const changedParam = this.params.find(
      lib => lib.libName === this.clickedLibName
    );
    //
  };

  // @action
  // delete = name => this.libs.remove(name)

  @action
  setLibName = name => (this.clickedLibName = name);

  @computed
  get total() {
    console.log("library 총합 계산중...");
    return this.libs.length;
  }
}
