import React from "react";
import { go, filter, map } from "fxjs2";
import { inject, observer } from "mobx-react";
// import { toJS } from "mobx";

import Input from "./input";

const Attribute = ({ params, clickedLibName }) => {
  return (
    <div>
      <Input params={params} />
      <div>attribute</div>
      {go(
        params,
        filter(p => p.libName === clickedLibName),
        map(pa => (
          <div key={pa.id}>
            <div>클릭된 라이브러리 이름 : {pa.libName}</div>
            {map(
              p => (
                <div key={p.name}>
                  <div>{p.name}</div>
                  <input
                    type="text"
                    value={p.value}
                    onChange={() => console.log()}
                  />
                </div>
              ),
              pa.params
            )}
          </div>
        ))
      )}
      <button>save</button>
      <button>reset</button>
    </div>
  );
};

export default inject(({ libs }) => ({
  params: libs.params,
  clickedLibName: libs.clickedLibName
}))(observer(Attribute));
