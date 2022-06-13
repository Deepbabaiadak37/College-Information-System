import React , { useState } from "react";
import pic from'../images/adminadd.png';
import axios from 'axios';


function AddNewAdminCredential()
{
    const [type,setType]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const formSubmit= (event)=>
    {
      event.preventDefault();
        if(!type || !email || !password)
        {
            alert("All fields are mandatory !!");
        }
        else
        {
            if(password.length<=5)
            {
                alert("Password length should be greater than 5");
            }
            else
            {
                var config = {
                    method: 'post',
                    url: 'http://localhost:3001/userroutes/admin/add',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : ({
                      "type": type,
                      "email":email,
                      "password":password
                    })
                  };
            
                  axios(config)
                      .then(function (res) {
                        console.log(res);
                        
                        
                      })
                  .catch(function (error) {
                      console.log(error)
                  });
            }
        }
         
        
    }
  
   
    return(
        <>
        <h1 className="text-center">Add Admins</h1>
        <br></br>
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput2">Admin Type</label>
                        <select className="form-control" onChange={e=>setType(e.target.value)} value={type}>
                            <option className="text-center" value="">--Select Admin Type--</option>    
                            <option className="text-center" value="1">Main Admin</option>
                            <option className="text-center" value="2">Teachers</option>
                            <option className="text-center" value="3">Hostel Admin</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Admin Email</label>
                        <input type="text" class="form-control" onChange={e=>setEmail(e.target.value)} value={email} id="exampleFormControlInput3" placeholder="Enter Email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea4">Password</label>
                        <input type="text" class="form-control" onChange={e=>setPassword(e.target.value)} value={password} id="exampleFormControlInput3" placeholder="Enter Passwprd"/>
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

export default AddNewAdminCredential;