import React from "react";
import { connect } from "react-redux";
import * as ApiService from "../../service/api";
import PageUnauthorized from "../unauthorized/unauthorized";

class PageSchemeEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "add",
      scheme: {},
      id: undefined
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount = async () => {
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      const scheme = await ApiService.getSchemeById(id);
      this.setState({ mode: "edit", id, scheme: scheme.data() });
    } else {
      const scheme = { userId: this.props.loggedInUser.uid };
      this.setState({ scheme });
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const scheme = Object.assign({}, this.state.scheme, {
      [name]: value
    });
    this.setState({
      scheme
    });
  };

  save = async () => {
    try {
      if (this.state.id) {
        await ApiService.updateScheme(this.state.id, this.state.scheme);
      } else {
        await ApiService.createScheme(this.state.scheme);
      }

      this.props.history.push("/scheme/list");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (
      this.state.scheme.userId &&
      this.state.scheme.userId !== this.props.loggedInUser.uid
    ) {
      return <PageUnauthorized />;
    }

    return (
      <div>
        <div>
          {this.state.mode === "edit" && <div>edit {this.state.id}</div>}
          {this.state.mode === "add" && <div>create</div>}
        </div>
        <div>
          <input
            type="text"
            name="name"
            className="input"
            onChange={this.handleInputChange}
            value={this.state.scheme.name || ""}
          ></input>
        </div>
        <div>
          <button className="button is-primary" onClick={this.save}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.auth.loggedInUser
  };
}

export default connect(mapStateToProps)(PageSchemeEdit);
