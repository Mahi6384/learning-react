import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
     Are you sure you want to do this ?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ankit"
          date="today at 5 pm"
          text="Amazing!"
          avatar="{faker.image.avatar}"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="today at 4 pm"
          text=" WTF!"
          avatar="{faker.image.avatar}"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
