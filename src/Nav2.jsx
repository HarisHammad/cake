import { Link } from "react-router";
import "./Nav2.css"
export default function Nav2() {
  return (
    <div className="nav2">
         <nav>
        <Link to={"/"}>Home</Link>
        <a href="#">Cakes</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <Link to={'/contact'}>Contact</Link>
        
     </nav>
     
    </div>
  );
}
