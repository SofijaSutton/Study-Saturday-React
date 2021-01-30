import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      students: [], //ititially an empty array bc before rending, it will be empty
    };
  }

  async componentDidMount() {
    try {
      // const response = await....
      //const data = response.data
      const { data } = await axios.get('/student/'); //look at router routes to find what we want
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
            </tr>
            {this.state.students.map((student) => {
                return (
                    <tr key={student.id}>
                        <td>{student.fullName}</td>
                    </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
