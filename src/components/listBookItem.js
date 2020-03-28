
import React, { Component } from 'react';
import { CardText,Button, Container } from 'reactstrap';
import{ connect } from 'react-redux';
 
class ListBookItem extends Component {
  render() {
    return (
      <Container>
        <CardText>{this.props.book.authors}</CardText>
        {/* Move Book Button */}
        <Button outline color="primary" className="mb-3" size="sm"> {this.props.markType} </Button>
        {/* onClick ={()=>{this.props.move(this.props.shelfLocation,this.props.book, this.props.markType)}} */}
        
        {/* Delete Book Button */}
        <Button outline color="danger" className="mb-3" size="sm" >Delete</Button> 
        {/* onClick ={()=>{this.props.delete(this.props.shelfLocation,this.props.book)}} */} 
      </Container>
    )
  }
}

let mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return { 
  }
}

let mapStateToProps = function (state, props) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookItem);