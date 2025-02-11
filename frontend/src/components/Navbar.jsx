import React, {useState} from 'react';
import { getImageUrl } from "../utils"; // Assuming this function properly returns the URL of the image
import styles from "./Navbar.module.css";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Assuming getImageUrl returns the URL of the image
  const imageUrl = getImageUrl('photo.jpeg');
  const [menuOpen,setMenuOpen]=useState(false)



  return (
    <nav className={styles.Navbar}>
      <div className={styles.title}>
        <Image src={imageUrl} alt="Loading ..." style={{width:"30px",height:"30px"}} roundedCircle />
        <Link to="/">Portfolio</Link>
      </div>
      <div className={styles.meanu}>
        <img src={menuOpen ? getImageUrl("closeIcon.png") :  getImageUrl("menuIcon.png")} alt="Loading ..." className={styles.meanuImg} onClick={()=>{setMenuOpen(!menuOpen)}}/>
        <ul className={`${styles.meanuitems} ${menuOpen && styles.menuOpen}` } onClick={()=>{setMenuOpen(false)}}>
        <li>
            <a href="#aboutme" >about</a>
          </li>
          <li>
            <a href="#skill" >skill</a>
          </li>
          <li>
            <a href="#projects">project</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
