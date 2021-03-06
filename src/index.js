import * as React from "react";
import * as ReactDOM from "react-dom";

// import React from "./kreact/";
// import ReactDOM from "./kreact/react-dom";
// import Component from "./kreact/Component";
// import * as React from './creact';
// import * as ReactDOM from './creact/react-dom';
// import * as React from './react';
// import * as ReactDOM from './react/packages/react-dom';

import "./index.css";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='class-component'>
        {/* <span> */}
          {/* <br /> */}
          {/* {this.props.name} */}
        {/* </span> */}
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  name: 'default props',
  id: '233'
}

function FunctionComponent(props) {
  return <p className="function-component border">FunctionComponent-{props.name}</p>;
}

FunctionComponent.defaultProps = {
  name: 'default props'
}


const jsx = (
  <div className="border">
    {/* <h1>慢 慢 慢</h1> */}
    {/* <p>开课吧</p> */}
    {/* <a href="https://www.kaikeba.com/">开课吧</a> */}
    <FunctionComponent ><p></p></FunctionComponent>
    {/* <ClassComponent /> */}
  </div>
);

// 经过babel-loader编译，jsx就是React.createElement(...)函数执行
ReactDOM.render(jsx, document.getElementById("root"));
// console.log("version-sy-log", React.version); //sy-log

// 原生标签节点
// 文本节点
// 函数组件节点

// *
// !
// ?
// todo 这里不是要做的事情 只是大家对黄色敏感而已
// todo React.createElement什么时候调用了？
// * 因为react里我写的jsx， jsx经过babel-loader编译，会变成React.createElement(...)函数的执行

// todo 函数组件和类组件区别?
//
