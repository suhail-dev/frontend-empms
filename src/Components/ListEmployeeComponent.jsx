import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
          //state var //method to change state variable
    const [employees, setEmployees] =useState([]);

    const navigator = useNavigate();
    useEffect(()=>{
        listEmployees().then((resssponse) => {
            setEmployees(resssponse.data)
        }).catch(error =>{
            console.error(error)
        })
    })

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmploye(id){
        navigator(`/edit-employee/${id}`)
    }
    
  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add New Employee</button>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=>updateEmploye(employee.id)}>Update</button>
                                </td>
                        </tr>  
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent