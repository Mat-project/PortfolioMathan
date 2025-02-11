import React from 'react'
import Image from 'react-bootstrap/esm/Image';
import { getImageUrl } from '../utils';
import styles from "./MainP.module.css";

const MainP = () => {
    const backImg=getImageUrl('smoke.jpeg')
  return (
    <main className={styles.full}> 
        
        <div className={styles.Name}> 
            <h1>Iam Mathan.M</h1>
            <h2>Full Stack Developer</h2>
            <h3>Freelancer</h3>
            <p>I am a passionate full-stack developer known for my confidence, discipline, and commitment to excellence. With a keen eye for design and a dedication to creating responsive websites, I consistently strive to deliver my best work on every project</p>
        </div>
        <div className={styles.Img}>
            <img src={getImageUrl("mathan/mathan.jpg")} alt="Loading..." />
        </div>
{/*         <hr /> */}
        
    </main>
  )
}

export default MainP