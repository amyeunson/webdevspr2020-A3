
import React, { Component } from 'react';
import { CardText,Button, Container } from 'reactstrap';
import{ connect } from 'react-redux';
import { updateMyBookLists } from '../redux/actions'
 
class ListBookItem extends Component {
  render() {
    return (
      <Container>
        <CardText>{this.props.book.authors}</CardText>
        {/* Move Book Button */}
        <Button outline color="primary" className="mb-3" size="sm"
        onClick ={()=>{this.props.update(this.props.book, this.props.markType)}}> 
        {this.props.markTypeTitle} </Button>
        
        {/* Delete Book Button */}
        <Button outline color="danger" className="mb-3" size="sm" >Delete</Button> 
        {/* onClick ={()=>{this.props.delete(this.props.book)}} */} 
      </Container>
    )
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
    // moves a book to the given "markType" (toRead or haveRead)
    update: (book, newMarkType) => dispatch(updateMyBookLists(book, newMarkType))
  }
}

let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookItem);