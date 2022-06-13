import React, { useRef, useState } from "react";
import axios from "axios";
import admin_image from '../images/admins.png';


function ViewNewAdminCredentials()
{
    const [type,setType]=useState("")
    const [details,setDetails]=useState([])
    const [modalvisible,setModalvisible]=useState(false)
    const [password,setPassword]=useState("")
    const ref=useRef()

    const changeType=(event)=>{
        event.preventDefault();
        setType(event.target.value);

        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/admin/getadmins',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "type": event.target.value
            })
          };
    
          axios(config)
              .then(function (res) {
                var arr=[];
                for(let i=0;i<res.data.length;i++)
                {
                    arr.push(res.data[i]);
                }
                
                setDetails(arr);
              })
          .catch(function (error) {
              console.log(error);
          });
      

    }

    const deletefunc=(id,e)=>
    {
        var config = {
            method: 'delete',
            url: 'http://localhost:3001/userroutes/admin/deleteadmin',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "_id":id
            })
          };
    
          axios(config)
            .then(function (res) { 
                if(res.status==200)
                {
                    alert("admin Deleted Successfully!")
                }   
                var config = {
                    method: 'post',
                    url: 'http://localhost:3001/userroutes/admin/getadmins',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : ({
                      "type": type
                    })
                  };
            
                  axios(config)
                      .then(function (res) {
                        var arr=[];
                        for(let i=0;i<res.data.length;i++)
                        {
                            arr.push(res.data[i]);
                        }
                        
                        setDetails(arr);
                      })
                  .catch(function (error) {
                      console.log(error);
                  }); 
            })
            .catch(function (error) {
                console.log(error)
            });

    }

    const submitNewPassword=(id,e)=>{
        e.preventDefault();
        console.log(document.getElementById(id).value)
        if(document.getElementById(id).value!="")
        {
            if(document.getElementById(id).value.length<=5)
            {
                alert("Password length should be greater than 5 !!");
            }
            else
            {
                var config = {
                    method: 'post',
                    url: 'http://localhost:3001/userroutes/admin/changepassword',
                    headers: { 
                    'Content-Type': 'application/json'
                    },
                    data : ({
                    "_id":        id,
                    "password":   document.getElementById(id).value
                    })
                };
            
                axios(config)
                    .then(function (res) { 
                        if(res.status==200)
                        {
                            alert("Password Changed Successfully!")
                        }
                            
                    })
                    .catch(function (error) 
                    {
                        alert(error)
                });
            }
        }
        else
        {
            alert("Enter Password!!")
        }

        document.getElementById(id).value="";
    }

    


    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <h3 className="d-flex justify-content-center">Search Admin's Details & Credentials</h3>
                </div>
                    
                <div className="col-md-6 col-lg-6"> 
                    <select className="form-control" onChange={changeType} value={type}>
                        <option className="text-center" value="">--Select Your Admin Type--</option>    
                        <option className="text-center" value="1">Main Admin</option>
                        <option className="text-center" value="2">Teachers</option>
                        <option className="text-center" value="3">Hostel Admin</option>
                    </select>
                </div>
               
            </div>
            </div>
            


            <br></br>

            {
                details.length? (
                    <div className=" d-flex justify-content-center">
                    <table class="table table-hover table-dark" >
                    <tbody>
                        {
                            details.map((item,index)=>(
                                <>
                                <tr>
                                    <th scope="row">{   index+1             }</th>
                                    <td>{               item.email          }</td>
                                    <td><input  id={item._id}  onChange={(e)=>setPassword(e.target.value)} style={{ padding:'4px',border:'none',borderRadius:'13px',color:'black'}} type="password"  placeholder="new password"/>&nbsp;<button style={{ border:'none',padding:'5px',background:'#ff0084',color:'white',borderRadius:'18px'}} onClick={submitNewPassword.bind(this,item._id)}>change password</button></td>

                                    
                                    <td onClick={deletefunc.bind(this,item._id)}><img src="https://cdn-icons-png.flaticon.com/128/812/812853.png" style={{ color:'red'}} width="25" height="25" /></td>
        
                                </tr>

                                </>
        
                            ))
                        }
                        
        
                        
                    </tbody>
                    </table>
                    </div>

                ):(
                    <>
                    <div className="container">
                    <br></br>
                        <div className="row d-flex justify-content-center">
                        
                            <img src={admin_image} width="50%" height="500"/>
                   
                        </div>
                    </div>
                    </>
                )
            }
           
        </>
    )
}


export default ViewNewAdminCredentials;