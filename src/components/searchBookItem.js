import React, { Component } from 'react';
import { CardText,Button, Container } from 'reactstrap';
import{ connect } from 'react-redux';
import { addToMyBookLists } from '../redux/actions';
import { MARK_READ, MARK_NOT_READ } from '../redux/actionTypes';
 
class SearchBookItem extends Component {
  
  render() {
    const shelfLocation = "Search";
    return (
      <Container>
        <CardText>{this.props.book.authors}</CardText>
        {/* Mark as To Read Button */}
        <Button outline color="primary" className="mb-3" size="sm"
        onClick={()=> this.props.add(this.props.book, "toRead")}>
        { MARK_NOT_READ }</Button>

        {/* Mark As Have Read Button */}
        <Button outline color="primary" className="mb-3" size="sm" 
        onClick={()=> this.props.add(this.props.book, "haveRead")}>
        { MARK_READ }</Button>
      </Container>
    )
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
    add: (book, markType) => dispatch(addToMyBookLists(book, markType))
  }
}

let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBookItem);