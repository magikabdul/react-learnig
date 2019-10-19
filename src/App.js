import React, { Component } from 'react';

class ToDoList extends Component {
   render() {
      return <h1>{this.props.title}</h1>;
   }
}

class App extends Component {
   render() {
      return (
         <div>
            <ToDoList title="My stuff" />
         </div>
      );
   }
}

export default App;
