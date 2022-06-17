import React, { useEffect, useState } from 'react';
import {Image} from 'antd';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import './index.css';

const ProfileUpdate = () =>
{
  const [selectedfile,setSelectedfile]=useState(null)
  const [picurl,setPicurl]=useState("")
  const [name,setName]=useState("")
  const [roll,setRoll]=useState("")
  const [dept ,setDept]=useState("")
  const [year,setYear]=useState("")
  const [email,setEmail]=useState("")



  useEffect(()=>{
    console.log(jwtDecode(localStorage.getItem('token')))
    setName(jwtDecode(localStorage.getItem('token')).name)
    
    var config = {
      method: 'post',
      url: 'http://localhost:3001/userroutes/login/getuserimage',
      headers: { 
          'Content-Type': 'application/json'
      },
      data : ({
          'id': jwtDecode(localStorage.getItem('token'))._id,
      })
      };
  
      axios(config)
          .then(function (res) {
            setPicurl(res.data.imageUrl);
            setDept(res.data.dept)
            setYear(res.data.year)
            setRoll(res.data.email.slice(0,res.data.email.length-11))
            setEmail(res.data.email)
         
          })
      .catch(function (error) {
          console.log(error)
      });

  },[])
  
const submitForm=(event)=>{
  event.preventDefault();
      const fd = new FormData();
      fd.append('_id',jwtDecode(localStorage.getItem('token'))._id);
      fd.append('image',selectedfile);

 
     axios.post('http://localhost:3001/userroutes/signup/profileupdate',fd)
         .then(res =>{
             window.location.reload();  
     })
         .catch(error =>{
         console.log(error);
     })    

    
  }


    return (
      <>
      <div class="container">
        <div class="row">
            <div class="col">
              <h3>Profile Picture</h3>
              <Image
                width={400}
                height={380}
                src={picurl}
                style={{ borderRadius:'10px'}}
              />

              <form>
                <input type="file" name="file" onChange={e=>setSelectedfile(e.target.files[0])}/>
                <button className='btn btn-info' onClick={submitForm}>Change</button>
              </form>
            </div>


            <div class="col">
              <center>
                <h1>Your Profile Details</h1>


      <table className='table table-lg table-light table-responsive' style={{ width:'fit-content'}}>
        <thead class="thead-info table-dark" >
          <tr className='col-auto'>
            <th className='custom-th'>Name</th>
            <th className='custom-th'> Roll</th>
            <th className='custom-th'>Department</th>
            <th className='custom-th'>Year</th>
            <th className='custom-th'>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='custom-td'>{name}</td>
            <td className='custom-td'>{roll}</td>
            <td className='custom-td'>{dept}</td>
            <td className='custom-td'>{year}</td>
            <td className='custom-td'>{email}</td>
          </tr>
        </tbody>
      </table>

              </center>
            </div>
        </div>
      </div>
      </>

    );
}

export default ProfileUpdate;