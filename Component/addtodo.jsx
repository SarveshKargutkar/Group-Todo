import React from 'react'
import { connect } from 'react-redux'
class addtodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ text: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.AddTodo({ text: this.state.text, group: this.props.group });
        this.setState({ text: '' })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.text} ></input>
                    <button type="button" onClick={this.handleSubmit} >Add</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

        group: state.groupName,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddTodo: name => {
            dispatch({ type: "ADD_TODO", text: name.text, groupName: name.group })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(addtodo)

