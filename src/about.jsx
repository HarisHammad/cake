import './about.css'
export default function About(){
    
    return (
        <div className='About'>
            <h1 className='heading'>This is Schilers. Awesome Food <br /> Theme. Purchase it and eat <br /></h1>
            <h2 className='heading2'> Burgers.</h2>
         
           <div className="maincontainer">
             <div className='mainheading'>
                <h1 className='mainheading1'>This is Schilers. Awesome Food Theme.  Purchase it and eat Burgers</h1>
                     <p className='aboutpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
                     <p className='aboutpara'> Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
             </div>
             <div className='mainpic'>
                  <img src="about1.jpg.webp" alt="" />
             </div>
           </div>
        </div>
    )
}