import "./emails.css";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Email() {
  return (
    <div className="mainemailcontainer">
      <div className="mailcontainer">
        <h1 className="mailheading">Get in Touch</h1>
        <textarea
          placeholder="Enter your message"
          style={{ backgroundColor: "transparent", color: "white",  width:'750px', height:'200px',padding:'20px'}}
        ></textarea>
              <input type="text" placeholder="Enter Your Name" style={{width:'360px' ,backgroundColor:'transparent',height:'50px',color:'white',border:'1px solid white', marginTop:'25px',padding:'20px'}}/>
              <input type="text" placeholder="Enter Email Address" style={{width:'360px' ,backgroundColor:'transparent',height:'50px',color:'white',border:'1px solid white', marginTop:'25px',padding:'20px',marginLeft:'30px'}}/>
              <input type="text" placeholder="Enter Subject" style={{width:'750px' ,backgroundColor:'transparent',height:'50px',color:'white',border:'1px solid white', marginTop:'25px',padding:'20px'}}/>
              <Button variant="contained" className='btn2' sx={{ backgroundColor: " rgb(226, 178, 45)", borderColor: "yellow", color:"black", marginTop:'30px'}}>Send</Button>
      </div>
      <div className="tabcontainer">
        <div className="homeicon">
        <HomeIcon style={{color:"white",fontSize:'3rem'}}/>
        <p className="homeiconpara">Buttonwood, California.<br/>Rosemead, CA 91770</p>
        </div>
        <div className="homeicon" style={{marginTop:'40px'}}>
        <TabletAndroidIcon style={{color:"white",fontSize:'3rem'}}/>
        <p className="homeiconpara">
        +1 253 565 2365<br/>Mon to Fri 9am to 6pm</p>
        </div>
        <div className="homeicon" style={{marginTop:'40px'}}>
        <MailOutlineIcon style={{color:"white",fontSize:'3rem'}}/>
        <p className="homeiconpara">support@colorlib.com.<br/>Send us your query anytime!</p>
        </div>
        
      

      </div>
    </div>
  );
}
