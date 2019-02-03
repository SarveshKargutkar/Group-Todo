import React from 'react'
import history from '../history';
class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.checkPass = this.checkPass.bind(this)
    }
    handleChange(event, type) {
    
        this.setState({ [type]: event.target.value })
        // console.log(this.state.username)
        // console.log(this.state.password)
    }
    checkPass(e) {
        e.preventDefault()
        if (this.state.username === "sarvesh" && this.state.password === "1234") {
            history.push('/group')
            return 
        }
        return  alert('access denied')
    }
    render() {
        return (
            <form>
                <label >
                    Username: < input type="text"
                        value={this.state.username} onChange={(event) => this.handleChange(event, "username")}
                    /> </label>
                <br />
                <label >
                    Password: < input type="text"
                        value={this.state.password} onChange={(event) => this.handleChange(event, "password")}
                    /> </label>
                <button type="submit" onClick={this.checkPass}>Submit</button>

            </form>
        )
    }
}
export default login