import React, { Component } from 'react';
import { CardText,Button, Container } from 'reactstrap';
import{ connect } from 'react-redux';
import { addToMyBookLists, deleteSearchBook } from '../redux/actions';
import { MARK_TO_READ_BUTTON, MARK_HAVE_READ_BUTTON } from '../constants';
 
class SearchBookItem extends Component {
  
  render() {
    return (
      <Container>
        <CardText>{this.formattedAuthors(this.props.book.authors)}</CardText>
        {/* Mark as To Read Button */}
        <Button outline color="primary" className="mb-3" size="sm"
        onClick={ () => this.addAndDelete("toRead") }>
        { MARK_TO_READ_BUTTON }</Button>

        {/* Mark As Have Read Button */}
        <Button outline color="primary" className="mb-3" size="sm" 
        onClick={ () => this.addAndDelete("haveRead") }>
        { MARK_HAVE_READ_BUTTON }</Button>
      </Container>
    )
  }

  addAndDelete = (markType) => {
    this.props.add(this.props.book, markType)
    this.props.delete(this.props.book)
  }

  formattedAuthors = (authorList) => {
    let formattedListString = ""
    if (authorList.length === 0) {
      formattedListString += "No Author Listed"
    } else {
      formattedListString += "By: "
      if (authorList.length === 1) {
        formattedListString += authorList[0]
      } else {
        for (let i=0; i<authorList.length-1; i+=1) {
          formattedListString += authorList[i] + ", "
        }
        formattedListString += authorList[authorList.length-1]
      }
    }
    return formattedListString;
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
    add: (book, markType) => dispatch(addToMyBookLists(book, markType)), 
    delete: (book) => dispatch(deleteSearchBook(book))
  }
}

let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBookItem);