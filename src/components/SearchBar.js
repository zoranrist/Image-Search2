import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Hi there! ' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };
     
    
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // onInputClick() {
    //     console.log('Input was clicked');
    // }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">                    
                    <div className="field">
                        <label>Image Search</label> 
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })} 
                        // onClick={this.onInputClick} 
                        // onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
            ); 
    }

}

export default SearchBar;