import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const tasks =["Get Up","Get Ready","Leave for work"]
class Title extends Component{
  render(){
    return(<h1> List of Tasks</h1>)
  }
}

class List extends Component{
  render(){
    return(
      <ol>
        {tasks.map((task, index) =><li key={index}> {task} </li>)}
      </ol>
    )
  }
}

class Main extends Component{
  render(){
    return(
      <div>
        <Title />,
        <List />,
        <List />,
        <List />
      </div>
    )
  }
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

