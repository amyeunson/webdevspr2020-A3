
import React, { Component } from 'react';
import { CardText, Button, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { updateMyBookLists, deleteFromMyLists } from '../redux/actions'

class ListBookItem extends Component {
  render() {
    return (
      <Container>
        <CardText>{this.formattedAuthors(this.props.book.authors)}</CardText>
        {/* Move Book Button */}
        <Button outline color="primary" className="mb-3" size="sm"
          onClick={() => { this.props.update(this.props.book, this.props.markType) }}>
          {this.props.markTypeTitle} </Button>

        {/* Delete Book Button */}
        <Button outline color="danger" className="mb-3" size="sm" onClick={() => { this.props.delete(this.props.book, this.props.markType) }} >Delete</Button>

      </Container>
    )
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
    // moves a book to the given "markType" (toRead or haveRead)
    update: (book, newMarkType) => dispatch(updateMyBookLists(book, newMarkType)),
    delete: (book, markType) => dispatch(deleteFromMyLists(book, markType))
  }
}

let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookItem);