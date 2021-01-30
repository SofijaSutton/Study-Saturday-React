import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList' //import all needed components
import SingleStudent from './SingleStudent'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      singleStudent: {} //create singleStudent obj and create a new method to reach router
    };
   this.selectStudent = this.selectStudent.bind(this); 
  }


//access data in parent component so only happens once, then child compnents can have 
  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
//    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    //when we run this, set the singleStudent to the indvidual student
    //need to bind student now
    this.setState({ singleStudent: student });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
          <StudentList 
          //name of childcomponent
          students={this.state.students} 
          selectStudent={this.selectStudent} />

          {this.state.singleStudent.id && (
          <SingleStudent chosenStudent={this.state.singleStudent} />
          )}
      </div>
    );
  }
}
