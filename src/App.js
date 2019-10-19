import React, { Component } from 'react';
import { ToDoList } from './containers/ToDoList/ToDoList';

class App extends Component {
   myTasks = [{ done: true, text: 'Record a ReactJS video' }, { done: false, text: 'Go for a walk' }];

   render() {
      return (
         <div>
            <ToDoList title="My stuff" tasks={this.myTasks} />
         </div>
      );
   }
}

export default App;
