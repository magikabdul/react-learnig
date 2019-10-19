import React, { Component } from 'react';

class ToDoList extends Component {
   render() {
      return (
         <div>
            <h1>{this.props.title}</h1>
            {this.props.tasks.map(task => (
               <div>{task}</div>
            ))}
         </div>
      );
   }
}

class App extends Component {
   myTasks = ['Record a ReactJS video', 'Go for a walk'];

   render() {
      return (
         <div>
            <ToDoList title="My stuff" tasks={this.myTasks} />
         </div>
      );
   }
}

export default App;
