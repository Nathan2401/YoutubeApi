import React from 'react';

class SearchBar extends React.Component{
    state ={term:''}
    

    formSubmit = e => {
        e.preventDefault();
      this.props.onSubmit(this.state.term);
    }


    render(){
        const {term} = this.state;
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.formSubmit}>
                    <div className='ui field'>
                        <input type='text' placeholder='please enter search term' value={term} onChange={(e)=>this.setState({term:e.target.value})}/>
                    </div>

                </form>

            </div>
        )
    }
}
export default SearchBar