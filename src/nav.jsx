import "./nav.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
export default function Nav() {
  return (
    <div className="nav">
      <p>
        <TwitterIcon className="twi" style={{transition: '2s all ease' }}/>{" "}
        <InstagramIcon style={{ marginLeft: "20px", transition: '2s all ease' }}  className="twi"/>{" "}
        <FacebookIcon style={{ marginLeft: "20px",transition: '2s all ease'  }} className="twi"/>
      </p>
      <img src="logo.png.webp" alt="" />
      <Button
      className="btn9"
        variant="outlined"
        sx={{ color: "yellow", borderColor: "yellow"}}
      >
        Call us +92 3105 296 649{" "}
      </Button>
    </div>
    
  );
}
