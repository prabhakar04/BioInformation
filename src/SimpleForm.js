import React, { Component } from "react";
import { connect } from "react-redux";

class SimpleForm extends Component {
  state = {
    first: "",
    last: "",
    email: ""
  };
  componentDidMount() {
    this.setState({ ...this.props.state });
  }
  onchangehandler = (key, evt) => {
    this.setState({ [key]: evt.target.value });
  };
  render() {
    return (
      <div>
        <div>
          <label>First Name</label>
          <div>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={this.state.first}
              onChange={(evt) => this.onchangehandler("first", evt)}
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={this.state.last}
              onChange={(evt) => this.onchangehandler("last", evt)}
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(evt) => this.onchangehandler("email", evt)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={() => this.props.onSubmitHandler(this.state)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitHandler: (data) => dispatch({ type: "SUBMIT_SAVE", data })
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(SimpleForm);
