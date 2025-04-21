import "./location.css";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from '@mui/icons-material/Phone';
export default function Location() {
  return (
    <div className="mainlocationcontainer">
      <div className="locationcontainer">
        <p className="location">
          Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
          tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="btn11">
          {" "}
          <Button
            variant="outlined"
            className="btn12"
            style={{
              color: " White",
              borderColor: "grey",
              padding: "10px",
              textTransform: "none",
              marginTop: "50px",
              width: "150px",
              marginLeft: "35px",
            }}
          >
            <InstagramIcon style={{ marginRight: "10px" }} /> Instagram
          </Button>
          <Button
            variant="outlined"
            className="btn12"
            style={{
              color: "White",
              borderColor: "grey",
              padding: "10px",
              textTransform: "none",
              marginLeft: "20px",
              marginTop: "50px",
              width: "150px",
            }}
          >
            <FacebookIcon style={{ marginRight: "10px" }} /> Facebook
          </Button>
          <Button
            variant="outlined"
            className="btn12"
            style={{
              color: " White",
              borderColor: " grey",
              padding: "10px",
              textTransform: "none",
              marginLeft: "20px",
              marginTop: "50px",
              width: "150px",
            }}
          >
            <TwitterIcon style={{ marginRight: "10px" }} />
            Twitter
          </Button>
        </div>
      </div>
      <div className="mainphonecontainer">
        <div className="phonecontainer">
          <NearMeIcon />
          <h2 className="phonecolor">Location</h2>
          <p className="phonepara">4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
        </div>
        <div className="phonecontainer" style={{ marginLeft: "40px" }}>
          <PhoneIcon />
          <h2 className="phonecolor">Contact</h2>
          <p className="phonepara">913-473-7000</p>
          <p className="phonepara">contact@cakeshop.com</p>
        </div>
      </div>
    </div>
  );
}
