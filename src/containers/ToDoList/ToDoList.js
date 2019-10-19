import React, { Component } from 'react';
import { ToDoItem } from '../../components/ToDoItem/ToDoItem';
import { NewToDoForm } from '../../components/NewToDoForm/NewToDoForm';
export class ToDoList extends Component {
	state = {
		tasks: this.props.tasks,
		draft: ''
	};
	updateDraft = event => {
		this.setState({ draft: event.target.value });
	};
	addToDo = () => {
		const { tasks, draft } = this.state;
		const list = tasks;
		list.push({ text: draft, done: false });
		this.setState({ tasks: list, draft: '' });
	};
	render() {
		const { title } = this.props;
		const { tasks, draft } = this.state;
		return (<div>
			<h1>{title}</h1>
			{tasks.map(task => (<ToDoItem text={task.text} done={task.done} />))}
			<NewToDoForm onSubmit={this.addToDo} onChange={this.updateDraft} draft={draft} />
		</div>);
	}
}
