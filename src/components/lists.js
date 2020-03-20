
import React, { Component } from 'react';
import BookItem from './bookItem';
import { connect } from 'react-redux';
import {Container, Card, CardTitle, CardHeader, CardBody, CardText} from 'reactstrap';

class Lists extends Component {
  render() {
    return (
      <div>
      {/* To Read List  */}
      <Container>
        <Card >
          <CardHeader>To Read List</CardHeader>
          {/* Book Items  */}
          <CardBody>
              {this.props.toReadList.map((book)=>
                <div key={book.id}>
                  <CardTitle>{book.title}</CardTitle>
                      <BookItem className="mt-2" author={book.author} direction="Mark As Read" shelfLocation="ToRead" id={book.id}/>
                </div>     
              )}      
          </CardBody>
        </Card>
      </Container>
      
      {/* Have Read List  */}
      <Container>
        <Card >
          <CardHeader>Have Read List</CardHeader>
          {/* Book Items  */}
          <CardBody>
              {this.props.haveReadList.map((book)=>
                <div key={book.id}>
                  <CardTitle>{book.title}</CardTitle>
                      <BookItem author={book.author} direction="Mark As Not Read" shelfLocation="HaveRead" id={book.id}/>
                </div>     
              )}      
          </CardBody>
        </Card>
      </Container>
    </div>
    )
  }
}


let mapStateToProps = function mapStateToProps(state, props) {
  return { 
    toReadList: state.bookLists.toRead,
    haveReadList: state.bookLists.haveRead
  }
}


export default connect(mapStateToProps)(Lists);