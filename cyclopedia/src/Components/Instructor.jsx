import React from "react";

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    console.log("Component did mount");
  };
  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component did unmount");
  }

  render() {
    return (
      <div>
        Name: {this.props.instructor.name}
        <br />
        Email : {this.props.instructor.email}
        <br />
        Phone: {this.props.instructor.phone}
        <br />
      </div>
    );
  }
}

export default Instructor;
