
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
          {/* Book Item  */}
          <CardBody>
              {this.props.toReadList.map((book)=>
                <div>
                  <CardTitle>{book.title}</CardTitle>
                    <CardText>  
                      <BookItem className="mt-2"author={book.author}/>
                    </CardText>
                </div>     
              )}      
          </CardBody>
        </Card>
      </Container>
      
      {/* Have Read List  */}
      <Container>
        <Card >
          <CardHeader>Have Read List</CardHeader>
          {/* Book Item  */}
          <CardBody>
              {this.props.haveReadList.map((book)=>
                <div>
                  <CardTitle>{book.title}</CardTitle>
                    <CardText>  
                      <BookItem author={book.author}/>
                    </CardText>
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