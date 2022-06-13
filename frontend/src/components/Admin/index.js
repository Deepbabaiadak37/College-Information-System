import React, { useState } from 'react';
import Header from '../Header/index';
import Footer from '../footer/index';
import '../Signup/Signup.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


function Admin()
{
    const [password,setPassword]=useState("");
    const [type,setType]=useState("");
    const [email,setEmail]=useState("");

    const submit=(event)=>{
        event.preventDefault();
        if(!password || !type || !email)
        {
            alert("All Fields Are Mandatory !!");
        }
        else
        {
            var config = {
                method: 'post',
                url: 'http://localhost:3001/userroutes/admin/',
                headers: { 
                'Content-Type': 'application/json'
                },
                data : ({
                'email': email,
                'type': type ,
                "password":password
                })
            };
        
            axios(config)
                .then(function (res) 
                {
                    if(res.data.status==400)
                    {
                        alert(res.data.message);
                    }
                    else if(res.data.status==401)
                    {
                        alert(res.data.error);
                    }
                    else if(res.data.status==200)
                    {
                        localStorage.clear();
                        const login_det=(jwtDecode( res.data.token));
                        if(login_det.type==1)
                        {
                            localStorage.clear();
                            localStorage.setItem("mainadmin-token",res.data.token);
                            window.location='/adminmain';
                        }
                        else if(login_det.type==2)
                        {
                            localStorage.clear();
                            localStorage.setItem("teacheradmin-token",res.data.token);
                            window.location='/adminteacher';
                        }
                        else if(login_det.type==3)
                        {
                            localStorage.clear();
                            localStorage.setItem("hosteladmin-token",res.data.token);
                            window.location='/adminhostel';
                        }
                    }
                    else
                        alert("Unexpected Error !!")
                    
                })
                .catch(function (error) 
                {
                        console.log(error)
                });
        }
        
    }


    return(
        <>
        <Header/>

        <div style={{ background:'',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="container login-container">
            <div className="row">
                <div className="col-md-4 offset-md-4 form  login-form">
                    
                        <h2 style={{color: '#5757d1',fontWeight:'bold'}} className="text-center"> 
                            Admin Login
                        </h2>
                    <form>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i style={{color:'black'}} class="fa fa-envelope" aria-hidden="true"></i></div>
                            </div>
                            <input className="form-control" type="text" name="email" placeholder="Your Id" required autocomplete="off" onChange={e=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <br></br>

                        <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <i style={{color:'black'}} className="fa fa-sort" aria-hidden="true"></i>
                                    </div>
                                </div>
                    
                                <select className="form-control" onChange={e=>setType(e.target.value)} value={type}>
                                    <option className="text-center" value="">--Select Your Admin Type--</option>    
                                    <option className="text-center" value="1">Main Admin</option>
                                    <option className="text-center" value="2">Teachers</option>
                                    <option className="text-center" value="3">Hostel Admin</option>
                                </select>
                        </div>                         
                        
                        <br></br>
                        
                        <div className="input-group mb-2">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i style={{color:'black'}} class="fa fa-key" aria-hidden="true"></i></div>
                            </div>
                            <input className="form-control" type="password" name="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)} value={password}/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button className="form-control button" onClick={submit} >Login</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        <Footer/>
        </>

    );

}


export default Admin;