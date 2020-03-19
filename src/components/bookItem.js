
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import{ connect } from 'react-redux';
import { deleteBook } from '../redux/actions';
 
class BookItem extends Component {
  render() {
    return (
      <div>
              <h6>{this.props.author}</h6>
              <Button outline color="primary" className="mt-2" size="sm">{this.props.direction}</Button>
              <Button outline color="danger" className="mt-2" size="sm" 
              onClick ={()=>{this.props.onClickDelete(this.props.shelfLocation,this.props.id)}}>Delete</Button>
          
      </div>
    )
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
    onClickDelete: (shelfLocation, id) => dispatch( deleteBook(shelfLocation, id))
  }
}


let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);