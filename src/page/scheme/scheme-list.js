import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as ApiService from "../../service/api";

class PageSchemeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schemeByUser: []
    };
  }

  componentDidMount = async () => {
    let schemeByUser = await ApiService.getSchemeByUser(
      this.props.loggedInUser.uid
    );

    schemeByUser = schemeByUser.map(schemeItem => {
      return { id: schemeItem.id, ...schemeItem.data() };
    });

    this.setState({ schemeByUser });
  };

  render() {
    const schemeList = this.state.schemeByUser.map(scheme => {
      return (
        <div>
          <Link key={scheme.id} to={`/scheme/${scheme.id}/edit`}>
            {scheme.id} {scheme.name}
          </Link>
        </div>
      );
    });
    return <div>{schemeList}</div>;
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.auth.loggedInUser
  };
}

export default connect(mapStateToProps)(PageSchemeList);
