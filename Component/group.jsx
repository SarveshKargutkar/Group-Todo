import React from 'react'
import { connect } from 'react-redux'
import DisplayGroup from './displayGroup'
class group extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            groups: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ text: event.target.value })
        //  this.setState({ todo: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        // console.log(this.props.groupName)
        this.props.AddGroup(this.state.text)
        // this.setState(prevState => {
        //     const newArray = ([...prevState.groups, { value: this.state.text, completed: false }])
        //     return {
        //         groups: newArray
        //     }
        // })
        this.setState({ text: '' })
    }

    render() {
        return (
            <form>

                <label >
                    Add Group: < input type="text"
                        value={this.state.text} onChange={this.handleChange}
                    /> </label>
                <button type="submit" onClick={this.handleSubmit}>Add</button>
                <p>{this.props.all} {this.props.completed} {this.props.pending}</p>
                <DisplayGroup />
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    var all = 0, completed = 0, pending = 0;
    state.groups.map((group) => {
        group.todos.map(todo => {
            all++
            if (todo.completed) {
                completed++
            }
            else
                pending++
        })
    })
    return {
        completed: completed,
        pending: pending,
        all: all
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddGroup: name => {
            dispatch({ type: "ADD_GROUP_NAME", value: name })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(group)

