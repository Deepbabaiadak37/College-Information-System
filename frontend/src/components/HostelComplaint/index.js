import React , { useState } from "react";
import pic from'../images/a5.png';
import axios from 'axios';


function HostelComplaint()
{
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [roomno,setRoomno]=useState("")
    const [details,setDetails]=useState("")

    const formSubmit= (event)=>{
      event.preventDefault();
        if(!name || !contact || !roomno || !details)
        {
            alert("Please fill all the Fields!!")
           

        }
        else
        {
            if(contact.length!=10)
            {
                alert("Please Enter 10 digit Contact !!")
            }
            else
            {
                var config = {
                    method: 'post',
                    url: 'http://localhost:3001/userroutes/hostelcomplain',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : ({
                      "details": details,
                      "roomno":roomno,
                      "contact":contact,
                      "name" :name
                    })
                  };
            
                  axios(config).then(function (res) {
                        alert("Complain Added Successfully!!");
                        setName("");
                        setContact("");
                        setRoomno("");
                        setDetails("");
                      })
                  .catch(function (error) {
                      console.log(error)
                  });
            }
        }
    }
  
   
    return(
        <>
        <h1 className="text-center">Hostel Complain Form</h1>
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

                    <div class="form-group">
                        <label for="exampleFormControlInput2">Contact</label>
                        <input type="number" class="form-control" onChange={e=>setContact(e.target.value)} value={contact} id="exampleFormControlInput2" placeholder="Contact number"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Room No</label>
                        <input type="text" class="form-control" onChange={e=>setRoomno(e.target.value)} value={roomno} id="exampleFormControlInput3" placeholder="Room No"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea4">Enter Your Complain:</label>
                        <textarea class="form-control" onChange={e=>setDetails(e.target.value)} value={details} id="exampleFormControlTextarea4" rows="3"></textarea>
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

export default HostelComplaint;