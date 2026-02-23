import React ,{useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService'
import { useNavigate ,useParams} from 'react-router-dom'

export const EmployeeComponent = () => {

const[Firstname,setFirstname] = useState('')
const[Lastname,setLastname] = useState('')
const[Email,setEmail] = useState('')
const {id} = useParams();

const navigator = useNavigate();
const [errors,seterrors] = useState({Firstname:'',Lastname:'',Email:''})

useEffect(()=>{
    if(id){
        getEmployee(id).then((response)=>{
            setFirstname(response.data.Firstname);
            setLastname(response.data.Lastname);
            setEmail(esponse.data.Email);
        }).catch(error =>{
            console.error(error);
        })
    }
},[id])

function saveOrUpdateEmployee(e){
  e.preventDefault();

  if(validateForm){
     const employee = {Firstname,Lastname,Email}
  console.log(employee);

  if(id){
    updateEmployee(id,employee).then((response)=>{
        console.log(response.data);
        navigator('/employee');
    }).catch(error =>{
        console.error(error);
    })
  }else{
    createEmployee(employee).then((response) => 
        {console.log(response.data);
                navigator('/employees')
        }).catch(error =>{console.error(error)})


  }

  
  }
  
}

function validateForm(){
    let valid =true;
    const errorsCopy = {...errors}

    if(Firstname.trim()){
        errorsCopy.Firstname='';
    }else{
        errorsCopy.Firstname='Firstname is required';
        valid = false;
    }

    if(Lastname.trim()){
        errorsCopy.Lastname='';
    }else{
        errorsCopy.Lastname='Lastname is required';
        valid = false;
    }

    if(Email.trim()){
        errorsCopy.Email='';
    }else{
        errorsCopy.Email='Email is required';
        valid = false;
    }

    setErrors(errorsCopy);
    return valid;

}

function pageTitle(){
    if(id){
        return <h2 className='text-center'>Update Employee</h2>

    }else{
        return <h2 className='text-center'>Add Employee</h2>

    }
}
  return (
    <div>
        <div className='container'>

            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3' >
                     {
                        pageTitle()
                     }
                      <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input type='text' placeholder='Enter emp first name'
                                    name='first name'
                                    value={Firstname}
                                    className={`form-control ${errors.Firstname ? 'is-invalid':''}`}
                                    onChange={(e)=>setFirstname(e.target.value)}>
                                    </input>
                                        {errors.Firstname && <div className='invalid-feedback'>{errors.Firstname}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input type='text' placeholder='Enter emp last name'
                                    name='last name'
                                    value={Lastname}
                                    className={`form-control ${errors.Lastname ? 'is-invalid':''}`}
                                    onChange={(e)=>setLastname(e.target.value)}></input>
                                                                            {errors.Lastname && <div className='invalid-feedback'>{errors.Lastname}</div>}

                                    
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email:</label>
                                    <input type='text' placeholder='Enter emp Email'
                                    name='Email'
                                    value={Email}
                                    className={`form-control ${errors.Email ? 'is-invalid':''}`}
                                    onChange={(e)=>setEmail(e.target.value)}></input>
                                                                            {errors.Email && <div className='invalid-feedback'>{errors.Email}</div>}

                                </div>


                               <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button> 
                            </form>
                      </div>
                </div>

            </div>
        </div>
    </div>
  )
}
