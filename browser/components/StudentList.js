import React from 'react'; //always bring in

const StudentList = (props) => { //define functional component
//    const { students } = props;
    return (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th> 
            </tr>
            {props.students.map(student => {
              return (
                  <tr>
                    <td>{student.fullName}</td>
               {/* would get details from ROUTES,
               don't have to make again myself, but connecting to my back end
               so need axios request */}
                  <td onClick={() => props.selectStudent(student)}>Details</td>
                 </tr>
              );
            })}
          </tbody>
        </table>
    )
}

export default StudentList; //always export