import React from "react";
import Instructor from "./Components/Instructor";
import { getRandomUser } from "./Utility/api";

class CyclOpediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  componentDidMount = async () => {
    if (JSON.parse(localStorage.getItem("cyclopediaState"))) {
    } else {
      const response = await getRandomUser();
      this.setState(() => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };
  componentDidUpdate = async (prevProps, prevState) => {
    console.log("Component did update");
    localStorage.setItem("cyclopediaState", JSON.stringify(this.state));

    console.log(prevState.studentCount);
    console.log(this.state.studentCount);

    if (prevState.studentCount < this.state.studentCount) {
      const response = await getRandomUser();
      this.setState((previousState) => {
        return {
          studentList: [
            ...previousState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    } else if (prevState.studentCount > this.state.studentCount) {
      this.setState((previousState) => {
        return {
          studentList: [],
        };
      });
    }
  };

  componentWillUnmount() {
    console.log("Component did unmount");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudents = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  handleToggleInstructor = () => {
    this.setState((prevState) => {
      return {
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  render() {
    console.log("Render component");
    return (
      <div>
        <div className="p-3">
          <span className="h4 text-success">Instructor </span>
          <i
            className={`bi ${
              this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
            } btn btn-success btn-sm`}
            onClick={this.handleToggleInstructor}
          ></i>
          {!this.state.hideInstructor && this.state.instructor ? (
            <Instructor instructor={this.state.instructor}></Instructor>
          ) : null}
        </div>

        <div className="p-3">
          <span className="h4 text-success">Feedback</span> <br />
          <input
            type="text"
            value={this.state.inputName}
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
            placeholder="Name..."
          ></input>{" "}
          <br />
          <textarea
            placeholder="Feedback..."
            value={this.state.inputFeedback}
            onChange={(e) => {
              this.setState({ inputFeedback: e.target.value });
            }}
          ></textarea>
        </div>
        <div className="p-3">
          <span className="h4 text-succes">Students</span>
          <div>Student Count: {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudents}
          >
            Remove all students
          </button>

          {this.state.studentList.map((student, index) => {
            return (
              <div className="text-white" key={index}>
                - {student.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CyclOpediaClassPage;
