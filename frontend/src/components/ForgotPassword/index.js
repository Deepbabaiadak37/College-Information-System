import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../footer';
import axios from 'axios';
import { GiIgloo } from 'react-icons/gi';


export default function ForgotPassword()
{
    const [email,setEmail]=useState("");
    const [otp,setOtp]=useState("");
    const [visibility0,setVisibility0]=useState('visible')
    const [visibility1,setVisibility1]=useState('hidden')
    const [visibility2,setVisibility2]=useState('visible')
    const [visibility3,setVisibility3]=useState('hidden')
    const [visibility4,setVisibility4]=useState('hidden')
    const [visibility5,setVisibility5]=useState('hidden')
    const [visibility6,setVisibility6]=useState('hidden')
    const [visibility7,setVisibility7]=useState('hidden')


    const submitform=(event)=>{
        event.preventDefault();
        
        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/forgotpssword/',
            headers: { 
            'Content-Type': 'application/json'
            },
            data:
            {
                'email':email
            }
        };
    
        axios(config).then(function (res) 
            {
                if(res.data.status==200)
                {
                   setVisibility1('visible')
                   setVisibility2('hidden')
                   setVisibility3('visible')
                   setVisibility0('hidden')
                   setVisibility4('visible')
                }
                else if(res.data.status==400)
                {
                    alert(res.data.msg)
                }
                else
                {
                    console.log(res)
                }
            })
            .catch(function (error) 
            {
                console.log(error);
             });
    }

    const submitotp=(event)=>{
        event.preventDefault();
        console.log(otp)
        setVisibility7('visible')
        setVisibility6('visible')
        setVisibility5('visible')

        setVisibility1('hidden')
        setVisibility2('hidden')
        setVisibility3('hidden')
        setVisibility0('hidden')
        setVisibility4('hidden')

    }

    const changepasswd=()=>{

    }



    return (
        <>
        <Header/>

        <div className='container' style={{ height:'50vh',background:'linear-gradient(to right,#0f0c29, #302b63, #24243e)'}}>
            <div className='row '>
                <div className=' d-flex justify-content--center'>
                    <form className='form-group'>
                        <input class="form-control" type="email" placeholder='Enter Your Email ' style={{ visibility :visibility0}} onChange={(e)=>setEmail(e.target.value)}/>
                        <input className='form-control' type="text" placeholder='Enter OTP' maxLength="6" onChange={(e)=>setOtp(e.target.value)} style={{ visibility :visibility4}}/>

                        <input className='form-control' type="text" placeholder='Enter New Password' maxLength="6"  style={{ visibility :visibility5}}/>               
                        <input className='form-control' type="text" placeholder='Confirm Password' maxLength="6"  style={{ visibility :visibility6}}/>
                       
                        <button id="resend-id" type="button" onClick={submitform} style={{ border:'none',padding:'10px',visibility: visibility1,backgroundColor: 'deeppink',color:'white' }}>Resend otp</button>
                        <button id="send-id" className='btn btn-success' onClick={submitform} style={{ visibility: visibility2 }}> Send otp</button>
                        <button className='btn btn-success' onClick={submitotp} style={{ visibility: visibility3 }}> submit</button>

                        <button className='btn btn-info' onClick={changepasswd} style={{ visibility: visibility7 }}> Change Password</button>
                    </form>
                </div>
                
            </div>
        </div>
        <Footer/>
        </>

    );
}

