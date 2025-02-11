import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../utils'

const Contact = () => {
  return (
    <footer id="contact" className={styles.foot}>
        <div className={styles.left}>
            <h1>Contact Me</h1>
            <p>Feel free to reach out</p>
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.linkdin}>
            <img src={getImageUrl('linkedinIcon.png')} alt="" />
            <div>linkdin@gmail.com</div>
          </div>
          <div className={styles.github}>
            <img src={getImageUrl('githubIcon.png')}
             alt="" />
            <div>github@gmail.com</div>
          </div>

        <div className={styles.email}> 
            <img src={getImageUrl('emailIcon.png')} alt="" />
            <div>mathanmass787@gmail.com</div>
        
        </div>
        </div>

    </footer>
  )
}

export default Contact