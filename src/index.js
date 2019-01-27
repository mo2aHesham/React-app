import React from 'react'
import ReactDOM from 'react-dom'
const Languages = ['PHP','JAVA','Python','Java Script']
function LanguagesLists(props)
{
	const List = props.Language
	return <ul>
	{
		List.map((List,index)=>
			<li key={index}>{List}</li>
			)
	}
	</ul>

}

ReactDOM.render(<LanguagesLists Language={Languages}/>,document.getElementById('root'));