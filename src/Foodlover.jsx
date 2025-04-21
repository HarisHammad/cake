 import './foodlover.css'
export default function Foodlover(){
    return(
        <div>
        <h1 className="foodlover">Food Lover's Say</h1>
        <div className='Ratings'>
         <div className="box">
            <p className='star'>⭐⭐⭐⭐⭐</p>
            <p className='comment'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
            <div className="containercircle">
            <div className="circle"><img src="blog2.jpg.webp" alt="" width={'60px'}/></div>
            <p className='circlename'>Chef 1</p>
            </div>
         </div>
         <div className="box">
         <p className='star'>⭐⭐⭐⭐⭐</p>
            <p className='comment'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
            <div className="containercircle">
            <div className="circle"><img src="blog2.jpg.webp" alt="" width={'60px'}/></div>
            <p className='circlename'>Chef 2</p>
            </div>
         </div>
         <div className="box" style={{borderRight:'none'}}>
         <p className='star'>⭐⭐⭐⭐⭐</p>
            <p className='comment'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
            <div className="containercircle">
            <div className="circle"><img src="blog2.jpg.webp" alt="" width={'60px'}/></div>
            <p className='circlename'>Chef 3</p>
            </div>
         </div>
        </div>
        
        </div>
    )
}