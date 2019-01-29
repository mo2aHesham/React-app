import React from 'react'
import ReactDOM from 'react-dom'

class FormTest extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {value: "female"}

	}
	handleSubmit = (e)=>{
		console.log(this.state.value)
		e.preventDefault()
	}
	handleChange = (e)=>{
		this.setState({value:!this.state.value})

	}

	render() 
	{
		return <form onSubmit = {this.handleSubmit}>
		<select value = {this.state.value} onChange={this.handleChange}>
		<option value ="male">male</option>
		<option value ="female">female</option>
		</select>
		<input type = "submit" value = "Go Ahead"/>
		</form>
	}
}
ReactDOM.render(<FormTest/>,document.getElementById('root'));