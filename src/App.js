import React from "react";
import { compose, withStateHandlers } from "recompose";

import {
  Nav,
  NavItem,
  NavDropdown, // optional
  MenuItem, // optional
  TabContent,
  TabPane
} from "./components/Navs";

import "trendmicro-ui/dist/css/trendmicro-ui.css";

/** Examples */
import NoHoC from "./NoHoC";
import LiftStatesUp from "./LiftStatesUp";
import DataFetching from "./DataFetching";
/*** */

const App = ({ handleSelectTab, activeKey }) => (
  <div>
    <h2>Recompose examples{"\u2728"}</h2>
    <Nav navStyle="tabs" activeKey={activeKey} onSelect={handleSelectTab}>
      <NavItem eventKey="No HoCs">No HoCs</NavItem>
      <NavItem eventKey="LiftStatesUp">LiftStatesUp</NavItem>
      <NavItem eventKey="DataFetching">Data Fetching</NavItem>
    </Nav>
    <TabContent activeKey={activeKey}>
      <TabPane eventKey="No HoCs">
        <h2>
          <NoHoC />
        </h2>
      </TabPane>
      <TabPane eventKey="LiftStatesUp">
        <LiftStatesUp />
      </TabPane>
      <TabPane eventKey="DataFetching" style={{ position: "relative" }}>
        <DataFetching />
      </TabPane>
    </TabContent>
  </div>
);

export default compose(
  withStateHandlers(
    {
      activeKey: "No HoCs"
    },
    {
      handleSelectTab: () => newKey => ({
        activeKey: newKey
      })
    }
  )
)(App);
