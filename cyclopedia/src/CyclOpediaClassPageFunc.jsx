import React, { useId } from "react";
import { getRandomUser } from "./Utility/api";
import { useState, useEffect, useRef } from "react";
import InstructorFunc from "./Components/InstructorFunc";

const CyclOpediaClassPageFunc = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  const [inputName, setInputName] = useState(() => {
    return "";
  });
  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  // const [totalRender, setTotalRender] = useState(0);
  const totalRender = useRef(0);
  const previousStudentCount = useRef(0);
  const inputFeedbackRef = useRef(null);
  const inputNameId = useId();

  useEffect(() => {
    // setTotalRender((prevState) => prevState + 1);
    totalRender.current = totalRender.current + 1;
    console.log("render" + totalRender.current);
  });

  useEffect(() => {
    console.log("This will be called on Initial/first Render/Mount");
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();

      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + "" + response.data.last_name,
            },
          ],
        };
      });
    };
    if (previousStudentCount.current < state.studentCount) {
      getUser();
    } else if (previousStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return { ...prevState, studentList: [] };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    previousStudentCount.current = state.studentCount;
  }, [state.studentCount]);

  useEffect(() => {
    inputFeedbackRef.current.focus();
  }, []);

  // constructor(props) {
  //   super(props);
  //   this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
  //     instructor: undefined,
  //     studentList: [],
  //     studentCount: 0,
  //     hideInstructor: false,
  //     inputName: "",
  //     inputFeedback: "",
  //   };

  // componentDidMount = async () => {
  //   if (JSON.parse(localStorage.getItem("cyclopediaState"))) {
  //   } else {
  //     const response = await getRandomUser();
  //     this.setState(() => {
  //       return {
  //         instructor: {
  //           name: response.data.first_name + " " + response.data.last_name,
  //           email: response.data.email,
  //           phone: response.data.phone_number,
  //         },
  //       };
  //     });
  //   }
  // };
  // componentDidUpdate = async (prevProps, prevState) => {
  //   console.log("Component did update");
  //   localStorage.setItem("cyclopediaState", JSON.stringify(this.state));

  //   console.log(prevState.studentCount);
  //   console.log(this.state.studentCount);

  //   if (prevState.studentCount < this.state.studentCount) {
  //     const response = await getRandomUser();
  //     this.setState((previousState) => {
  //       return {
  //         studentList: [
  //           ...previousState.studentList,
  //           {
  //             name: response.data.first_name + " " + response.data.last_name,
  //           },
  //         ],
  //       };
  //     });
  //   } else if (prevState.studentCount > this.state.studentCount) {
  //     this.setState((previousState) => {
  //       return {
  //         studentList: [],
  //       };
  //     });
  //   }
  // };

  // componentWillUnmount() {
  //   console.log("Component did unmount");
  // }

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudents = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor </span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-success btn-sm`}
          onClick={handleToggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <InstructorFunc instructor={state.instructor}></InstructorFunc>
        ) : null}
      </div>
      <div className="p-3">Total render: {totalRender.current}</div>
      <div className="p-3">
        <span className="h4 text-success">Feedback</span> <br />
        <input
          type="text"
          id={inputNameId}
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          placeholder="Name..."
        ></input>{" "}
        <label htmlFor={inputNameId}>Value: </label>
        <br />
        <textarea
          ref={inputFeedbackRef}
          placeholder="Feedback..."
          value={inputFeedback}
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="p-3">
        <span className="h4 text-succes">Students</span>
        <div>Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudents}
        >
          Remove all students
        </button>

        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              - {student.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyclOpediaClassPageFunc;
