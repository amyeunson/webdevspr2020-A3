
import React, { Component } from 'react';
import {Container, Button} from 'reactstrap';
 
class BookItem extends Component {
  render() {
    return (
      <div>
              <h6>{this.props.author}</h6>
              <Button outline color="primary" className="mt2" size="sm" >Swap</Button>
              <Button outline color="danger" className="mt2" size="sm">Delete</Button>
          
      </div>
    )
  }
}

export default BookItem;