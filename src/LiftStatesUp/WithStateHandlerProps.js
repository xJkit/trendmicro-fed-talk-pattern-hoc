import React, { Fragment } from "react";
import { withState, withHandlers, withProps, compose } from "recompose";

/** TM Components */
import { Button } from "../components/Buttons";
/*** */

const LiftStateUp = ({ input, handleSave }) => (
  <Fragment>
    <h5>withState + withHandlers + withProps</h5>
    <div>
      Your Name:
      <div style={{ display: "flex" }}>
        <input {...input} />
        <Button btnStyle="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  </Fragment>
);

export default compose(
  withState("name", "setName", "Jay Chung (withState + withHandlers + withProps)"),
  withHandlers({
    handleChangeName: ({ setName }) => evt => {
      setName(evt.target.value);
    },
    handleSave: ({ name }) => evt => {
      const message = `Hello, ${name}`;
      window.alert(message);
    }
  }),
  withProps(({
    name,
    handleChangeName
  }) => ({
    input: {
      type: 'text',
      value: name,
      onChange: handleChangeName,
      style: { marginRight: 24 },
      className: 'form-control'
    }
  }))
)(LiftStateUp);
