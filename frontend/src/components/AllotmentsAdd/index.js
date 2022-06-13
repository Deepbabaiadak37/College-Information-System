import React , { useState } from "react";
import pic from'../images/5.jpg';
import axios from 'axios';


function AllotmentsAdd()
{
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [roomno,setRoomno]=useState("")
    const [year,setYear]=useState("")
    const [dept,setDept]=useState("")


    const formSubmit= (event)=>
    {
      event.preventDefault();
     
      if(!year || !dept || !roomno || !contact || !name)
      {
        alert("All fields are mandatory !!")

      }
      else
      {
        var config = {
          method: 'post',
          url: 'http://localhost:3001/userroutes/allotment',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : ({
            "year": year,
            "dept":dept,
            "room":roomno,
            "contact":contact,
            "name" :name
          })
        };
  
        axios(config)
            .then(function (res) {
              if(res.data.status==422)
                alert("Room Already Alloted !!")
              else if(res.data.status==200)
                {
                  alert("Alloted Successfully !!")
                  setYear("");
                  setDept("")
                  setRoomno("")
                  setContact("")
                  setName("")
                }
                else
                  alert("Unexpected Error !!")
            })
        .catch(function (error) {
           
        });
      }  
    }
  
   
    return(
        <>
        <h1 className="text-center">Hostel Room  Allot</h1>
        <br></br>
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" onChange={e=>setName(e.target.value)} value={name} id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput2">Contact</label>
                          <input type="number" class="form-control" onChange={e=>setContact(e.target.value)} value={contact} id="exampleFormControlInput2" placeholder="Contact number"/>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput3">Room No</label>
                          <input type="text" class="form-control" onChange={e=>setRoomno(e.target.value)} value={roomno} id="exampleFormControlInput3" placeholder="Room No"/>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput2">year</label>
                        <select  className="form-control"  onChange={e=>setYear(e.target.value)} value={year} >
                            <option className="text-center" value="0">--Select Year--</option>
                            <option className="text-center" value="1">1st Year</option>
                            <option className="text-center" value="2">2nd Year</option>
                            <option className="text-center" value="3">3rd Year</option>
                            <option className="text-center" value="4">4th Year</option>
                    
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">dept</label>
                        <select  className="form-control"  onChange={e=>setDept(e.target.value)} value={dept} >
                            <option className="text-center" value="">--Select dept--</option>
                            <option className="text-center" value="CSE">CSE</option>
                            <option className="text-center" value="IT">IT</option>
                            <option className="text-center" value="ECE">ECE</option>
                            <option className="text-center" value="EE">EE</option>
                            <option className="text-center" value="ME">ME</option>
                    
                        </select>
                    </div>

                    <div className="d-flex justify-content-center " >
                        <button style={{width:'100%'}} onClick={formSubmit} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
            </div>
        </>
        
    );
}

export default AllotmentsAdd;