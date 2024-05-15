import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor Called");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "India",
      },
    };
  }
  async componentDidMount() {
    console.log("Child componentDidMount is called");
    const data = await fetch("https://api.github.com/users/ShubhamChidrewar");
    const response = await data.json();
    console.log(response);

    this.setState({
      userInfo: response,
    });
  }
  render() {
    console.log("Child Render Called");

    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div>
          <h2>Name: {name}</h2>
          <h4>Address: {location}</h4>
          <h4>Role: {bio}</h4>
        </div>
        <img src={avatar_url} className="avatar_img"></img>
      </div>
    );
  }
}
export default UserClass;
