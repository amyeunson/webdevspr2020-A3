import React, { Component } from 'react';
import { CardText,Button, Container } from 'reactstrap';
import{ connect } from 'react-redux';
import { deleteSearchBook, moveBook } from '../redux/actions';
import { MARK_READ, MARK_NOT_READ } from '../redux/actionTypes';
 
class SearchBookItem extends Component {
  
  render() {
    const shelfLocation = "Search";
    return (
      <Container>
        <CardText>{this.props.book.author}</CardText>
        {/* Mark as To Read Button */}
        <Button outline color="primary" className="mb-3" size="sm" 
        onClick ={()=>{this.moveAndDelete(shelfLocation, MARK_NOT_READ)}}>
        Mark As Not Read</Button>
        {/* Mark As Have Read Button */}
        <Button outline color="primary" className="mb-3" size="sm" 
        onClick ={()=>{this.moveAndDelete(shelfLocation, MARK_READ)}}>Mark As Read</Button>
      </Container>
    )
  }

  moveAndDelete = (shelfLocation, markType) => {
    this.props.move(shelfLocation,this.props.book, markType)
    this.props.delete(shelfLocation,this.props.book)
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
    delete: (shelfLocation, book) =>  dispatch( deleteSearchBook(shelfLocation, book)),
    move: (shelfLocation, book, markType ) =>  dispatch( moveBook(shelfLocation, book, markType))
  }
}

let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBookItem);