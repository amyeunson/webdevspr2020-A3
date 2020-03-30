
import React, { Component } from 'react';
import BookItem from './listBookItem';
import { connect } from 'react-redux';
import { Container, Card, CardTitle, CardHeader, CardBody, Row } from 'reactstrap';
import { getMyBookLists } from '../redux/actions'
import {MARK_HAVE_READ_BUTTON, MARK_TO_READ_BUTTON} from '../constants'

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
                          <BookItem className="mt-2" book={book} markTypeTitle={MARK_HAVE_READ_BUTTON} markType="haveRead" />
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
                        <BookItem book={book} markTypeTitle={MARK_TO_READ_BUTTON} markType="toRead" />
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
      onMount: () => { dispatch(getMyBookLists())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);