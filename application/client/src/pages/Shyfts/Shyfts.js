import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Shyfts extends Component {
  // Setting our component's initial state
  state = {
    shyfts: [],
    title: "",
    location: "",
    startTime: "",
    pay: ""
  };

  // When the component mounts, load all shyfts and save them to this.state.shyfts
  componentDidMount() {
    this.loadShyfts();
  }

  // Loads all shyfts  and sets them to this.state.shyfts
  loadShyfts = () => {
    API.getShyfts()
      .then(res =>
        this.setState({ books: res.data, title: "", location: "", startTime: "", pay: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a shyft from the database with a given id, then reloads shyfts from the db
  deleteShyft = id => {
    API.deleteShyft(id)
      .then(res => this.loadShyfts())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveShyft method to save the shyft data
  // Then reload shyft from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveShyft({
        title: this.state.title,
        location: this.state.location,
        startTime: this.state.startTime,
        pay: this.state.pay
      })
        .then(res => this.loadShyfts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron> */}
              <h1>Available Shyfts</h1>
            {/* </Jumbotron> */}
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <TextArea
                value={this.state.startTime}
                onChange={this.handleInputChange}
                name="startTime"
                placeholder="Start Time (optional)"
              />
              <Input
                value={this.state.pay}
                onChange={this.handleInputChange}
                name="pay"
                placeholder="Pay (required)"
              />
              <FormBtn
                disabled={!(this.state.location && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Create Shyft
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            {/* <Jumbotron> */}
              <h1>Shyft Wish List</h1>
            {/* </Jumbotron> */}
            {this.state.shyfts.length ? (
              <List>
                {this.state.shyfts.map(shyft => {
                  return (
                    <ListItem key={shyft._id}>
                      <a href={"/shyfts/" + shyft._id}>
                        <strong>
                          {shyft.title} by {shyft.location}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteShyft(shyft._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Shyfts;
