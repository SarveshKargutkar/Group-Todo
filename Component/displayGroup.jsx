import React from 'react'
import { connect } from 'react-redux'
import history from '../history'

class displayGroup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(event) {
	}
	handleSubmit(event, name) {
		event.preventDefault()
		history.push('/todo')
		// console.log(name)
		// console.log(this.props.metrics)
		this.props.AddGroup(name)

	}

	render() {
		return (
			<div>
				{/* {this.props.groups.map((group) => <p key={group.groupName}>{group.groupName}
					{/* {this.props.metrics.map((todo) => <p key={todo.completed}>{todo.groupName.completed}</p>)} */}
				{/* <button type="button" onClick={(event) => this.handleSubmit(event, group.groupName)}>GO</button>
				{/* </p>)} */}
				{this.props.metrics.map((groups) =>
					<p key={groups.group.name}>{groups.group.name} {groups.group.completed + groups.group.pending} {groups.group.completed} {groups.group.pending}
						<button type="button" onClick={(event) => this.handleSubmit(event, groups.group.name)}>GO</button>
					</p>
				)}
			</div>
		)
	}
}
const mapStateToProps = (state) => {

	const metrics = state.groups.map(group => {
		var grp = group.groupName
		const met = group.todos.reduce((accumulator, current) => {

			return Object.assign({
				group: {
					name: grp,
					completed: current.completed ? accumulator.group.completed + 1 : accumulator.group.completed,
					pending: current.completed ? accumulator.group.pending : accumulator.group.pending + 1,
				}
			})
		}, { group: { name: grp, completed: 0, pending: 0 } })
		return met
	});
	return {
		groups: state.groups,
		metrics: metrics
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		AddGroup: name => {
			dispatch({ type: "GROUP_NAME", value: name })
		}
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(displayGroup)

