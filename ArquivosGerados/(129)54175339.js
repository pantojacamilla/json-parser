    import React from "react";&#xD;&#xA;    const Context = React.createContext();&#xD;&#xA;    export class TaskStore extends React.Component {&#xD;&#xA;      state = { tasks: ["task1", "task2", "task3", "task4"] };&#xD;&#xA;      onTaskSet = (tasks = []) => {&#xD;&#xA;        this.setState({ tasks: tasks });&#xD;&#xA;      };&#xD;&#xA;      onAddTask = task => {&#xD;&#xA;        const newState = [...this.state.tasks, task];&#xD;&#xA;        this.onTaskSet(newState);&#xD;&#xA;        console.log(newState);&#xD;&#xA;      };&#xD;&#xA;      render() {&#xD;&#xA;        return (&#xD;&#xA;          <Context.Provider value={{ ...this.state, onTaskSet: this.onTaskSet, onNewTask: this.onAddTask }}>&#xD;&#xA;            {this.props.children}&#xD;&#xA;          </Context.Provider>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    export default Context;