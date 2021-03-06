
import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import Feedback from "../components/Feedback";
import Search from '../components/search';
import Lists from '../components/lists';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLists: false
    }
    this.toggleView = this.toggleView.bind(this);

  }

  toggleView() {
    this.setState({ showLists: !this.state.showLists })
  }

  render() {
    return (
      <Container className="container">
        <h1>BookList App</h1>
        <Feedback />
        <Row>
          <Col className="col-12 col-md-2 mt-4">
            {!this.state.showLists ? <Button className="custom-blue" onClick={this.toggleView}>My Lists</Button>
              : <Button className="custom-blue" onClick={this.toggleView}>Back to Search</Button>}
          </Col>
          <Col className="col-12 col-md-8 offset-md-2 mt-4">
            {!this.state.showLists ? <Search /> : <Lists />}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;