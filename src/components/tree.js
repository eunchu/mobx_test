import React, { useState } from "react";
import { inject, observer } from "mobx-react";

const Tree = ({ libs, onAdd, total, setLibName }) => {
  const [name, setName] = useState(null);

  return (
    <div style={{ width: "300px", border: "1px solid olive" }}>
      <div>
        <input type="text" onChange={e => setName(e.target.value)} />
        <button onClick={e => onAdd(name)}>추가</button>
        총: {total}
      </div>
      <div>
        {libs.map(lib => (
          <div key={lib.id} onClick={() => setLibName(lib.name)}>
            {lib.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default inject(({ libs }) => ({
  libs: libs.libs,
  onAdd: libs.add,
  total: libs.total,
  setLibName: libs.setLibName
}))(observer(Tree));
