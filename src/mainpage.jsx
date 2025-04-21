import './mainpage.css'
import Button from '@mui/material/Button';
export default function Mainpage(){
    return(
        <div className="mainpage">
        <h1 className='firstheading'> Healty Made <br />Delicious Cake</h1>
        <Button variant="contained" className='btn2' sx={{ backgroundColor: " rgb(226, 178, 45)", borderColor: "yellow", color:"black", marginLeft:"60px" }}>Order Now</Button>
        </div>
    )
}