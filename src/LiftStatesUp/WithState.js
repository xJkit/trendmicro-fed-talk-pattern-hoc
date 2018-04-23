import React, { Fragment } from "react";
import { withState } from "recompose";

/** TM Components */
import { Button } from '../components/Buttons';
/*** */

const LiftStateUp = ({ name, setName }) => (
  <Fragment>
    <h5>withState</h5>
    <div>
      Your Name:
      <div style={{ display: 'flex' }}>
        <input 
          type="text"
          style={{ marginRight: 24 }}
          className="form-control"
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
        <Button 
          btnStyle="primary"
          onClick={() => {
            const message = `Hello, ${name}`;
            window.alert(message);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  </Fragment>
);

export default withState('name', 'setName', 'Jay Chung (withState)')(LiftStateUp);
