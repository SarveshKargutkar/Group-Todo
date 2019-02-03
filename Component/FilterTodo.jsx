import React from 'react'
import { connect } from 'react-redux'

class FilterTodo extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.FilterTodo("COMPLETED")}>Completed</button>
                <button onClick={() => this.props.FilterTodo("PENDING")}>Pending</button>
                <button onClick={() => this.props.FilterTodo("ALL")}>All</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FilterTodo: filter => {
            dispatch({ type: "FILTER_TODO", value: filter })
        }
    }
}
export default connect(
    null,
    mapDispatchToProps
)(FilterTodo)