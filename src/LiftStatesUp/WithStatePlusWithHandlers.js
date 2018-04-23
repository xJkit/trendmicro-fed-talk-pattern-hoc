import React, { Fragment } from "react";
import { withState, withHandlers } from "recompose";

/** TM Components */
import { Button } from '../components/Buttons';
/*** */

const LiftStateUp = ({ name, handleChangeName, handleSave }) => (
  <Fragment>
    <h5>withState + withHandlers</h5>
    <div>
      Your Name:
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          style={{ marginRight: 24 }}
          className="form-control"
          value={name}
          onChange={handleChangeName}
        />
        <Button
          btnStyle="primary"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  </Fragment>
);

export default withState('name', 'setName', 'Jay Chung (withState + withHandlers)')(
  withHandlers({
    handleChangeName: ({ setName }) => evt => {
      setName(evt.target.value);
    },
    handleSave: ({ name }) => (evt) => {
      const message = `Hello, ${name}`;
      window.alert(message);
    }
  })(LiftStateUp)
);
