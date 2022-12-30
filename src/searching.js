import React from 'react';
class Searching extends React.Component {
  state = {entry: '' }
  onFormSubmit = (event) => {
		event.preventDefault()
		console.log(this.state.entry)
		this.props.onSearchSubmit(this.state.entry)
    this.setState({entry:''});
	}

  render() {
    //console.log(this.state.entry)
		return(
      <form onSubmit={this.onFormSubmit}>
      <label htmlFor='todo'>To do</label>
      <input
        type="text"
        placeholder='search...'
        onChange={(event) => this.setState({entry:event.target.value})}
				value={this.state.entry}

        />
        <input type='submit'/>
      </form>

    )
}
}
export default Searching;
