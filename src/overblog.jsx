import './overblog.css'
import Button from '@mui/material/Button';
export default function Overblog(){
    return(
        <div>
        <div className="overblogcontainer">
<h1 className='overblog'>Over Blog</h1>
<Button variant="contained" className='btn2' sx={{ backgroundColor: " rgb(226, 178, 45)", borderColor: "yellow", color:"black", marginLeft:"60px" }}>More Blog</Button>
        </div>
        <div className="imgcontainer">
         <img src="blog2.jpg.webp" alt=""  className='blogimg'/>
         <div className="aboutblogcontainer"style={{marginRight:'30px'}}>
            <h2 className='aboutblog'>Tomato, black olive, feta & anchovy tart ulla mco laboris</h2>
            <p className='blogpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
            <p className='learnmore'>LEARN MORE</p>
         </div>
         <img src="instra2.jpg.webp" alt=""  className='blogimg'/>
         <div className="aboutblogcontainer" >
            <h2 className='aboutblog'>Tomato, black olive, feta & anchovy tart ulla mco laboris</h2>
            <p className='blogpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
            <p className='learnmore'>LEARN MORE</p>
         </div>
        </div>
        </div>
    )
}