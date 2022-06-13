import React , { useState } from "react";
import pic from'../images/addfaculty.png';
import axios from 'axios';

function AdminTeacherManage()
{
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [type,setType]=useState("")
    const [designation,setDesignation]=useState("")

const formSubmit= (event)=>
{
      event.preventDefault();

    if(!address || !email || !contact || !name || !designation || !type )
    {
        alert("All fields are Mandatory !!")

    }
    else
    {
        if(contact.length!=10)
            alert("10 digit contact is required !!")
        else
        {
            var config = {
                method: 'post',
                url: 'http://localhost:3001/userroutes/teachermanage',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : ({
                  "address": address,
                  "email":email,
                  "contact":contact,
                  "name" :name,
                  "designation":designation,
                  "type":type
                })
              };
        
              axios(config)
                  .then(function (res) {
                    if(res.data.status==200)
                    {
                        alert("Added Successfully !!")
                        setName("");
                        setEmail("");
                        setContact("");
                        setName("");
                        setDesignation("");
                        setType("");
                        setAddress("");
                    }    
                    else if(res.data.status==400)
                        alert(res.data.msg)
                    else
                        alert("Unexpected Error !!")
                    
                    
                  })
              .catch(function (error) {
                  console.log(error)
              });
        }
    }

         
        
    }
  
   
    return(
    <>
        <h1 className="text-center">Add Faculty</h1>
        <br></br>
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Teacher Name</label>
                        <input type="text" class="form-control" onChange={e=>setName(e.target.value)} value={name} id="exampleFormControlInput1" placeholder="Enter Name"/>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput2">Contact</label>
                                <input type="number" class="form-control" onChange={e=>setContact(e.target.value)} value={contact} id="exampleFormControlInput2" placeholder="Contact number"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput2">Designation</label>
                                <input type="text" class="form-control" onChange={e=>setDesignation(e.target.value)} value={designation} id="exampleFormControlInput2" placeholder="Designation"/>
                            </div>
                        </div>
                    </div>
                   
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Email</label>
                        <input type="text" class="form-control" onChange={e=>setEmail(e.target.value)} value={email} id="exampleFormControlInput3" placeholder="Enter Email ID"/>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput3">Type</label>
                        <select className="form-control"  onChange={e=>setType(e.target.value)} value={type}>
                            <option className="text-center" value="">--select--</option>
                            <option className="text-center" value="1">Staff</option>
                            <option className="text-center" value="2">Faculty</option>
                        </select>

                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea4">Address</label>
                        <textarea class="form-control" onChange={e=>setAddress(e.target.value)} value={address} id="exampleFormControlTextarea4" rows="3"></textarea>
                    </div>

                    <div>
                        <button onClick={formSubmit} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default AdminTeacherManage;