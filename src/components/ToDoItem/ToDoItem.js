import React, { Component } from 'react';

export class ToDoItem extends Component {
   static defaultProps = {
      done: false
   };
   state = {
      done: this.props.done
   };
   toggleDone = () => {
      this.setState({ done: !this.state.done });
   };
   render() {
      const { text } = this.props;
      return (
         <div className="item">
            <div onClick={this.toggleDone} className={this.state.done ? 'doneToDo' : ''}>
               {text}
            </div>
         </div>
      );
   }
}
