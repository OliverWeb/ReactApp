import React from 'react';
import './App.css';

class App extends React.Component {
	handleSubmit = () => {
		console.log("Input Value: ", this.input.value)
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					ref={(input) => {
						this.input = input;
					}
					}/>
				<button type='submit'>Submit</button>
			</form>
		)
	}
}

export default App;


//https://www.tuicool.com/articles/fqaqqmF