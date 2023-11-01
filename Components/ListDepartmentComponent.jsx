import React, { useEffect, useState } from 'react'
import { deleteDepartment, getAllDepartments } from '../services/DepartmentService';
import { Link ,useNavigate} from 'react-router-dom';
import { updateEmployee } from '../services/EmployeeService';
const ListDepartmentComponent = () => {

    const[departments,setDepartments]= useState([]);
    const navigator= useNavigate();

useEffect(()=>{
    listOfDepartments();
},[])

    
    function listOfDepartments(){
        getAllDepartments().then((response)=>{
            console.log(response.data)
            setDepartments(response.data)
        }).catch(error=>{
            console.error(error);
        })
    }
    function updateDepartment(id){
        navigator(`/edit-department/${id}`)
    }

    function REmoveDepartment(id){
        deleteDepartment(id).then((response)=>{
            console.log(response.data);
            listOfDepartments();
        }).catch(error=>{ 
            console.error(error)
        })

    }
  return (
    <div>
        <div className='container'>
            <h2 className='text-center'>List Of Departments</h2>
            <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
            
            <table className='table table-striped table-dark'>
                <thead>
                        <tr>
                            <th>Department ID</th>
                            <th>Department name</th>
                            <th>Department Description</th>
                            <th>Actions</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department=>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                <td><button onClick={()=>updateDepartment(department.id)} className='btn btn-info'  style={{margin:'5px'}}>Update</button>
                                <td><button onClick={()=> REmoveDepartment(department.id)} className='btn btn-danger'
                                >Delete</button></td>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListDepartmentComponent