
import React, { Component } from 'react';
import { CardText,Button } from 'reactstrap';
import{ connect } from 'react-redux';
import { deleteBook, moveBook } from '../redux/actions';
 
class BookItem extends Component {
  render() {
    return (
      <div>
        <CardText>{this.props.book.author}</CardText>
        {/* Move Book Button */}
        <Button outline color="primary" className="mb-3" size="sm" 
        onClick ={()=>{this.props.move(this.props.shelfLocation,this.props.book)}}>
        {this.props.direction}</Button>
        {/* Delete Book Button */}
        <Button outline color="danger" className="mb-3" size="sm" 
        onClick ={()=>{this.props.delete(this.props.shelfLocation,this.props.book)}}>Delete</Button>
      </div>
      
    )
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
    delete: (shelfLocation, book) =>  dispatch( deleteBook(shelfLocation, book)),
    move: (shelfLocation, book) =>  dispatch( moveBook(shelfLocation, book))
  }
}


let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);