import { Form } from "react-bootstrap";
import { useState,useRef} from "react"




const handlesubmit = (e,name,email,message,number) => {
  
 e.preventDefault()   
    console.log(name,email,message,number)
   var mailbody =`Name=${name} <br/> Email=${email} <br/> Number=${number} <br/> Message= ${message} <br/>`

    const rq={
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body :JSON.stringify({
            "to":"mbnrj123@gmail.com",
             "subject":"Thank You for Contacting Us",
              "message":mailbody
        })


    }
    fetch('http://localhost:4000/',rq).then(res=>res.json()).then(data=>console.log(data))
};

    
      
    
function Mailer () {
   const [pname,setPname]=useState("")
   const [pemail,setPemail]=useState("")
   const [pnumber,setPnumber]=useState(-1)
   const [pmessage,setPmessage]=useState("")
   const form = useRef();
    return (
    <div className="container border"
    style={{marginTop:"100px",
    width:"50%",
    height:"80%",

    backgroundImage:`url("https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto=")`,
    backgroundPosition: "Centre",
    backgroundSize:"cover",}}>
        <h1 style ={{marginTop:"25px"}}>Contact Form</h1>
        <form onSubmit={(e)=>{handlesubmit(e,pname,pemail,pmessage,pnumber,form)}} 
        className="row"style={{ margin:"50px 100px 125px 150px"}}>
            <label className="h3">Name</label>
            <input type ='text' name='Name'placeholder="Name" className="form-control" onChange={(e)=>{setPname(e.target.value)}} />
            <label className="h3">Email</label>

            <input type ='email' name='User Email' placeholder="Email" className="form-control" onChange={(e)=>{setPemail(e.target.value)}}/>
            <Form.Text classname="text-muted">
                We'll never Share your Email Address,trust us 
            </Form.Text>
            <label className="h3">Number</label>
            <input type ='number' name='Phone Number' placeholder="Number" onChange={(e)=>{setPnumber(e.target.value)}}/>
            <label className="h3">Message</label>
            <textarea name ='message'  rows='4' className="form-control" onChange={(e)=>{setPmessage(e.target.value)}}/>
           

            <input type="submit" value="Send" className="form-control btn btn-primary"
            style={{marginTop:'40px'}}
            
            />
            
           
            
        </form>
        

    </div>
     );
     
}
export default Mailer;