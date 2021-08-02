import { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);
    this.doVote = this.doVote.bind(this);
  }

  doVote() {
    this.props.onVote(this.props.post.id);
  }

  render() {
    const {post} = this.props;
    return (<div>
      姓名：{post.name}，年龄：{post.age}, 投票：{post.vote}
      <button onClick={this.doVote}>xxx</button>
    </div>);
  }
}

function Test(props) {
  return (
    <div>test{props.name}</div>
  );
}


export default Article;
export {Test};