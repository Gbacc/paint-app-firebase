import React from "react";
import { connect } from "react-redux";
import { patchScheme } from "../../action/scheme";

const SchemeInfo = ({ scheme, readonly, patchScheme }) => {
  console.log(scheme, readonly, patchScheme);
  const title = () => {
    if (!readonly) {
      return (
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name"
              value={scheme.name}
              change={patchScheme(scheme.id, "name", $event.target.value)}
            />
          </div>
        </div>
      );
    } else {
      return <div>{scheme.name}</div>;
    }
  };

  return <div>{title}</div>;
};

function mapStateToProps(state) {
  return { scheme: state.scheme };
}

const matchDispatchToProps = {
  patchScheme
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SchemeInfo);
