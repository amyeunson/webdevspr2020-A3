import React from 'react';

class SearchTest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: 'Hey'
        }
    
      }

    callAPI() {
        console.log("call occurred")
        fetch("http://localhost:8080/findBook")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
      }
    
      componentWillMount() {
        console.log("in mount")
          this.callAPI();
      }
    render() {
        return (
        <div>
            <p>{this.state.apiResponse}</p>
        </div>);
    };
}

export default SearchTest;