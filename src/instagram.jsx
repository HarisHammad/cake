import "./instagram.css";
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Instagram() {
  return (
    <div className="instagramcontainer">
      <h1 className="instagram">Follow us on Instagram</h1>
      <Button variant="outlined" className="btn10" style={{color:' rgb(223, 171, 31)',borderColor:' rgb(223, 171, 31)',padding:'10px',textTransform:'none',marginLeft:'44%',marginTop:'50px'}}> 
        <InstagramIcon style={{marginRight:'10px'}}/> Cakesshop</Button>
        <div className="fourimg">
<img src="instra1.jpg.webp" alt="" className="firstimg"/>
<img src="instra3.jpg.webp" alt="" className="firstimg"/>
<img src="instra4.jpg.webp" alt="" className="firstimg"/>
<img src="instra2.jpg.webp" alt="" className="firstimg"/>
        </div>
        
    </div>
  );
}
