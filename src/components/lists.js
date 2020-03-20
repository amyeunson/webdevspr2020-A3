
import React, { Component } from 'react';
import BookItem from './bookItem';
import { connect } from 'react-redux';
import { Container, Card, CardTitle, CardHeader, CardBody } from 'reactstrap';
import { Row } from 'reactstrap';
class Lists extends Component {
  render() {
    return (
      <div>
      {/* To Read List  */}
      <Container>
        <Row>
          <Card >
            <CardHeader>To Read List</CardHeader>
            {/* Book Items  */}
            <CardBody>
                {this.props.toReadList.map((book)=>
                  <div key={book.id}>
                    <CardTitle>{book.title}</CardTitle>
                        <BookItem className="mt-2" book={book} markType="Mark As Read" shelfLocation="ToRead" />
                  </div>     
                )}      
            </CardBody>
          </Card>
        
          {/* Have Read List  */}
          <Card >
            <CardHeader>Have Read List</CardHeader>
            {/* Book Items  */}
            <CardBody>
                {this.props.haveReadList.map((book)=>
                  <div key={book.id}>
                    <CardTitle>{book.title}</CardTitle>
                        <BookItem book={book} markType="Mark As Not Read" shelfLocation="HaveRead" />
                  </div>     
                )}      
            </CardBody>
          </Card>
        </Row>
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