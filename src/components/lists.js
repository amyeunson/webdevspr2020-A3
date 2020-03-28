
import React, { Component } from 'react';
import BookItem from './listBookItem';
import { connect } from 'react-redux';
import { Container, Card, CardTitle, CardHeader, CardBody, Row } from 'reactstrap';
import { MARK_READ, MARK_NOT_READ } from '../redux/actionTypes';
import { getMyBookLists } from '../redux/actions'

class Lists extends Component {

  componentDidMount() {
    this.props.onMount();
  }

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
                        <BookItem className="mt-2" book={book} markType = {MARK_READ} shelfLocation="ToRead" />
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
                      <BookItem book={book} markType={MARK_NOT_READ} shelfLocation="HaveRead" />
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

function mapDispatchToProps(dispatch, props) {
  return {
      onMount: () => {
          dispatch(getMyBookLists())
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);