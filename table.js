import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Table() {

  const handleEdit = (e) => {
    alert("Done")
    e.preventDefault(); 
    console.log('Table Edit:');
  }
  const handleDelete = (e) => { 
    alert("Done")
    e.preventDefault(); 
    console.log('Table Delete:');
  }

  const EditableTable = () => {
  
    const initialData = [
      { id: 1, name: 'John', email: 'johne@example.com', phone: '9000000005', dob: '2000-01-01', language: 'English', address: '123 Main St' },
    { id: 2, name: 'Smith', email: 'smith@example.com', phone: '9841065888', dob: '1999-05-15', language: 'Tamil', address: '456 Elm St' },
    { id: 3, name: 'Johnson', email: 'sam.johnson@example.com', phone: '9785452142', dob: '2001-03-23', language: 'English', address: '789 Oak St' },
    ];
  
   
    const [data, setData] = useState(initialData);
  
    
    const handleEdit = (e, id, field) => {
      const updatedData = data.map(item => {
        if (item.id === id) {
          return { ...item, [field]: e.target.value };
        }
        return item;
      });
      setData(updatedData);
    };
  
    const handleSave = () => {
      alert('Changes saved!');
    }};




  const students = [
    { id: 1, name: 'John', email: 'johne@example.com', phone: '900000005', dob: '2000-01-01', language: 'English', address: '123 Main St' },
    { id: 2, name: 'Smith', email: 'smith@example.com', phone: '987-654-3210', dob: '1999-05-15', language: 'Tamil', address: '456 Elm St' },
    { id: 3, name: 'Johnson', email: 'sam.johnson@example.com', phone: '555-123-4567', dob: '2001-03-23', language: 'English', address: '789 Oak St' },
  ];

  return (
    <div className="container mt-5">
      <h2>Student Records</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone No</th>
            <th>Date of Birth</th>
            <th>Language</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.dob}</td>
              <td>{student.language}</td>
              <td>{student.address}</td>
              <td>
              <button onClick={handleEdit} className='btn-sm bg-primary px-2'>Edit</button>
              <button onClick={handleDelete} className='btn-sm bg-danger  px-2'>Delete</button>

             
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
