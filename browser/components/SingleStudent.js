import React from 'react';

const SingleStudent = (props) => {
    console.log(props, 'props in single student')
//    const { student } = props;
     return (
        <div>
         <tr>
           <td>{props.chosenStudent.fullName}  divvvvv</td>
         </tr>
        </div>
     );
   };
   
   export default SingleStudent;