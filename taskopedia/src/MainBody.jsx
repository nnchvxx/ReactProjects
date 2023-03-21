import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
import React from "react";
class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const totalLectures = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>Learn {whatWeWillLearn} in this course.</p> <br></br>
        Total lectures: {totalLectures}
        <ul>
          <li>Basic fundamentals</li>
          <li>Functional and class components</li>
        </ul>
        {/* <div>
          Enter task:
          <input maxLength={5} readOnly={false} placeholder="Ben"></input>
        </div> */}
        <div className="container row">Students enrolled:</div>
        <Student
          experience={2}
          name="Kris Walley"
          headshot="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          name="John Smith"
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        >
          <StudentReview />
        </Student>
        <Student
          experience={10}
          name="Emil Nenchev"
          headshot="https://api.lorem.space/image/face?w=150&h=155"
        />
      </div>
    );
  }
}
export default MainBody;
