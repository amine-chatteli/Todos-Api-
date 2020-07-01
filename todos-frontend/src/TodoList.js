import React, { Component } from 'react';
import TodoItem from './TodoItem'

const APIURL = '/api/todos';


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }
    componentDidMount() {
        this.loadTodos();
    }
    loadTodos() {
        fetch(APIURL)
            .then(resp => {
                if (!resp.ok) {
                    if (resp.status >= 400 && resp.status < 500) {
                        return resp.json().then(data => {
                            let err = { errorMessage: data.message };
                            throw err;
                        })
                    } else {
                        let err = { errorMessage: "Please Try  again later" };
                        throw err
                    }
                }
                return resp.json()
            })
            .then(todos => this.setState({ todos }));
    }
    render() {
        const todos = this.state.todos.map(item => (
            <TodoItem key={item._id}
                {...item}
            />
        ));
        return (
            <div>
                <ul>
                {todos}
                </ul>
            </div>
        )
    }
}
export default TodoList;