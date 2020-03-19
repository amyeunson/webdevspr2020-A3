import React, { Component } from 'react';
import { Form, InputGroup, Button, Input, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { search } from '../redux/actions';

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
              <Button className="custom-blue" onClick={this.submitSearch}>Search</Button>
          </InputGroup>
        </Form>


        <Row>
          <Col>
            {/* For each search result, pass to BookItem */}
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(null, { search })(Search);