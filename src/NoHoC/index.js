import React, { Fragment, Component } from "react";
import { Button } from '../components/Buttons';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jay Chung (No HoCs)'
    }
  }

  handleChangeName= (evt) => {
    this.setState({
      name: evt.target.value
    })
  }
  
  handleSave = () => {
    const { name } = this.state;
    window.alert(name);
  }
  
  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <h5>No HoCs</h5>
        <div>
          <h6>Your Name:</h6>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              style={{ marginRight: 24 }}
              className="form-control"
              value={name}
              onChange={this.handleChangeName}
            />
            <Button 
              btnStyle="primary" 
              onClick={this.handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
};

