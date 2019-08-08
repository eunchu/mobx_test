import React, { Component } from "react";
import styled from "styled-components";
// import DevTools from "mobx-react-devtools";
// import { observable, action } from "mobx";
// import { observer, inject } from "mobx-react";

import Tree from "./components/tree";
import Attribute from "./components/attribute";
import Bottom from "./components/bottom";

// local 관리 test
// import LocalState from "./components/localStateTest";

// style

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

// @inject("testStore")
// @inject(testStore => ({ state: testStore.state })) // redux의 mapStateToProps 처럼 특정 값만 받아올 수 있음
// @observer
class App extends Component {
  // @observable test = "상태관리";

  // constructor(props) {
  //   super(props);
  // }

  render() {
    // const {
    //   test,
    //   props: { testStore }
    // } = this;

    return (
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: "1"
          }}
        >
          {/* <LocalState /> */}
          <Tree />
          <Attribute />
        </div>
        <div style={{ height: "100px" }}>
          <Bottom />
        </div>
        {/* {process.env.NODE_ENV === "development" && <DevTools />} */}
      </Container>
    );
  }
}

export default App;
