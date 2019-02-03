import React from 'react'
import AddTodo from './addtodo'
import TodoList from './todoLIst'
import FilterTodo from './FilterTodo'
import history from '../history'
class todo extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        
        history.push('/group')
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick}>Back</button>
                <AddTodo />
                <FilterTodo />
                <TodoList />
            </div>
        )
    }
}



export default todo

