
import React, { Component } from 'react';
import { CardText,Button, Container } from 'reactstrap';
import{ connect } from 'react-redux';
import { deleteBook, moveBook } from '../redux/actions';
 
class ListBookItem extends Component {
  render() {
    return (
      <Container>
        <CardText>{this.props.book.author}</CardText>
        {/* Move Book Button */}
        <Button outline color="primary" className="mb-3" size="sm" 
        onClick ={()=>{this.props.move(this.props.shelfLocation,this.props.book, this.props.markType)}}>
        {this.props.markType}</Button>
        {/* Delete Book Button */}
        <Button outline color="danger" className="mb-3" size="sm" 
        onClick ={()=>{this.props.delete(this.props.shelfLocation,this.props.book)}}>Delete</Button>
      </Container>
    )
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
    delete: (shelfLocation, book) =>  dispatch( deleteBook(shelfLocation, book)),
    move: (shelfLocation, book, markType ) =>  dispatch( moveBook(shelfLocation, book, markType))
  }
}

let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookItem);