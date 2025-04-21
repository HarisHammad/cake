import Email from "./emails"
import Mainpage2 from "./mainpage2"
import Nav3 from "./Nav3"
import Location from "./location"
export default function Contact(){
    return(
        <div>
            <Mainpage2/>
            <Email/>
              <Nav3/>
                <Location/>
        </div>
    )
}