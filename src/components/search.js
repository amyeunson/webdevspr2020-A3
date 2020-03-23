import React, { Component } from 'react';
import { Form, InputGroup, Button, Input, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardHeader, CardBody } from 'reactstrap';
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
    this.submitSearch = this.submitSearch.bind(this);
  }

  onFieldChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  submitSearch(event) {
    event.preventDefault();
    this.props.search(this.state.search);
  }

  render() {
    return (
      <div>

        <Form inline>
          <InputGroup>            
              <Input type="text" id="search" value={this.state.search} onChange={this.onFieldChange} />
              <Button className="custom-blue mb-3" onClick={this.submitSearch}>Search</Button>
          </InputGroup>
        </Form>

        <Row>
          <Col>
            {/* Have Read List  */}
            <Card >
              <CardHeader>Have Read List</CardHeader>
              {/* Book Items  */}
              <CardBody>
                {this.props.searchList.map((book)=>
                  <div key={book.id}>
                    <CardTitle>{book.title}</CardTitle>
                        <SearchBookItem book={book}/>
                  </div>     
                )}      
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

let mapStateToProps= function(state,props) {
  return {
    searchList: state.search.queryResult
  }
}

export default connect(mapStateToProps, { search })(Search);