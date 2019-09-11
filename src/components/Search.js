import React, {Component} from 'react';

class Search extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.props.searchFromParent}>
                    <input type='text' onChange={this.props.changeFromParent} value={this.props.searching} placeholder='Search' />
                </form>
            </div>
         );
    }
}
 

export default Search;