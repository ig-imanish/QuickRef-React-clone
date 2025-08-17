import "./Navbar.css";
export default function NavbarLogo() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="icon">
            <img src="../../public/quickref.png" alt="" style={{ height: '77px', width: '77px'}}/>
          </div>
          <div className="name">
            Quick
            <span className="green">Ref</span>
            .ME
          </div>
        </div>
       <div className="right">
         <div className="search">
          <div className="icon">
            <i class="ri-search-line" style={{color: "white"}}></i>
          </div>
          <div className="search-bar">
            <span>Search for cheatsheet</span>
          </div>
        </div>
        <div className="cards">
          <div className="card key">
            <i class="ri-command-line"></i>k
          </div>
          <div className="card github">
          <img src="https://img.shields.io/github/stars/Fechin/reference?style=social" alt="" />
          </div>
        </div>
        <div className="social-media">
          <div className="large-twitter">
           
           <i class="ri-twitter-fill" style={{color: "white"}}></i> <span  style={{color: "white"}}>Follow Me</span>
          </div>
          <div className="card toggle">
             <i class="ri-sun-line" style={{color: "white"}}></i>
          </div>
          <div className="card facebook">
            <i class="ri-facebook-circle-line" style={{color: "white"}}></i>
          </div>
           <div className="card twitter">
            <i class="ri-twitter-fill" style={{color: "white"}}></i>
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
