import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SR
          </a>
          <div className="itemContainer">
            <span>(862)216-0043</span>
          </div>
          <div className="itemContainer">
            <span>shafat.rahman@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/srahman9"><FontAwesomeIcon icon={["fab","github"]}></FontAwesomeIcon></a>
          </div>
          <div className="itemContainer">
            <a href="https://stackoverflow.com/users/17378905/srahman"><FontAwesomeIcon icon="fa-brands fa-stack-overflow" /></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}