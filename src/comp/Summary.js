import { Component } from "react";
import Article, { Test } from "./Article";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(id) {
    const a = this.state.posts.map(item => {
      const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
      return newItem;
    });
    this.setState({posts: a})
  }

  componentDidMount() {
    this.setState({posts: [
      {id: 1, name: "aaa", age: 16, vote: 0},
      {id: 2, name: "bbb", age: 17, vote: 0},
      {id: 3, name: "ccc", age: 18, vote: 0}
    ]});
  }

  render() {
    return (<div>
      <Test name= "xxxx"></Test>
      {this.state.posts.map((article,index) => <Article key={index} post={article} onVote={this.handleVote} />)}
    </div>);
  }
}

export default Summary;