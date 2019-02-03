import React from 'react'
import { connect } from 'react-redux'

class todoList extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.group}</h1>
                {this.props.completed + this.props.pending}  {this.props.completed} {this.props.pending}
                {this.props.todo.map((todo) => <p key={todo.text}>{todo.text}
                    <input type="checkbox" checked={todo.completed}
                        onChange={() => this.props.checkbox({ text: todo.text, group: this.props.group })} />
                    <button type="cancel"
                        onClick={() => this.props.DeleteTodo({ text: todo.text, group: this.props.group })} >delete</button>
                </p>)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    var todos = [];
    state.groups.map((group) => {
        if (state.groupName === group.groupName)
            todos = [...todos, ...group.todos]
    })
    var completed = 0, pending = 0
    todos.map((todo) => {
        if (todo.completed === true) {
            completed++;
        }
        else
            pending++

    }
    )
    todos = todos.filter((todo) => {
        if (state.filter === "COMPLETED" && todo.completed === false) {
        }
        else if (state.filter === "PENDING" && todo.completed === true) {
        }
        else {
            return true
        }

    }
    )
    todos = todos.sort(function (a, b) {
        var value1 = a.text.toLowerCase(), value2 = b.text.toLowerCase()
        if (value1 < value2) //sort  ascending
            return -1
        if (value1 > value2)
            return 1
        return 0
    })
    return {
        group: state.groupName,
        groups: state.groups,
        todos: todos,
        completed: completed,
        pending: pending,
        todo: todos.sort(function (a, b) {
            var value1 = a.completed, value2 = b.completed
            if (value1 < value2) //sort based on status
                return -1
            if (value1 > value2)
                return 1
            return 0
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkbox: todo => {
            dispatch({ type: "handleCheck", text: todo.text, groupName: todo.group })
        },
        AddGroup: name => {
            dispatch({ type: "GROUP_NAME", value: name })
        },
        DeleteTodo: todo => {
            dispatch({ type: "DELETE_TODO", text: todo.text, groupName: todo.group })
        },


    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(todoList)

