import {React} from 'react';
import { DeleteOutlined} from '@ant-design/icons';
import axios from 'axios';


const NoticeItems=(props)=>
{

    const deletefunc=(id,e)=>{
       
        var config = {
            method: 'delete',
            url: 'http://localhost:3001/userroutes/hostelnotice/delete',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'id':id
            })
          };

          axios(config)
                  .then(function (res) {
                    if(res.data.status==200)
                    {
                        alert(res.data.msg);
                        window.location.reload();
                    }
                    else if(res.data.status==422)
                    {
                        alert(res.data.msg);

                    }
                    else
                        alert("Unexpected Error !!")
                   
                  })
              .catch(function (error) {
                    console.log(error);
              });
    }


    return(
        <>
       { props.name.map((item,index)=> (
                        
                        <tr id={item._id}>
                            <td>{index+1}</td>
                            <td colspan="1">{item.notice}</td>
                            <td style={{ float:'right'}} colspan=""><button onClick={deletefunc.bind(this,item._id)} className="btn btn-cus-red"><DeleteOutlined  style={{ fontSize: '22px', color: 'white' }} /> </button></td>             
                        </tr>
                        )
                    )
       }
        </>
    );
}


export default NoticeItems;