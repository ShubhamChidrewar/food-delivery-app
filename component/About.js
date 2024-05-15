import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount is called");
  }
  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>This is about page</h1>
        {/* <User name={"Shubham (Function Component)"} /> */}
        <UserClass name={"Shubham (Class Component)"} />
      </div>
    );
  }
}

export default About;
