import React, { Component } from 'react';
import { Form, InputGroup, Button, Input, Row, Col, Card, CardTitle, CardHeader, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { search } from '../redux/actions';
import SearchBookItem from './searchBookItem';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: ""
    }

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div>

        <Form inline>
          <InputGroup>
            <Input type="text" id="search" value={this.state.search} onChange={this.onFieldChange} />
            <Button className="custom-blue mb-3" onClick={() => this.props.searchBooks(this.state.search)}>Search</Button>
          </InputGroup>
        </Form>

        {console.log(this.props.searchList)}

        {/* <Row>
          <Col>
            <Card >
              <CardHeader>Results</CardHeader>
             
              <CardBody>
                {this.props.searchList.map((book) =>
                  <div key={book.id}>
                    <CardTitle>{book.title}</CardTitle>
                    <SearchBookItem book={book} />
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </div>
    )
  }
}

let mapStateToProps = function (state, props) {
  return {
    searchList: state.search.queryResult
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    searchBooks: (props) => dispatch(search(props))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);