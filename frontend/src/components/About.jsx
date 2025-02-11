import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../utils';
const About = () => {
  return (
    <div id='aboutme' className={styles.aboutme}>
        <fieldset className={styles.box}>

          <legend>
            <h1>About My Work</h1>
          </legend>

          <div className={styles.aboutLeft}>
              <img src={getImageUrl('mathan/editedAboutPic.jpg')} alt="" />
          </div>

          <div className={styles.aboutRight}>
            
            <li>
              <img src={getImageUrl('cursorIcon.png')} alt="Loading.." />
            <div className={styles.top}>
              <h4>
              Frontend Developer
              </h4>
            <p>I am a frontend developer proficient in React.js. I specialize in creating responsive designs tailored to meet user requirements.{/*  Additionally, I have the skills to build robust and reliable designs */}.
            </p>
            </div>

            </li>
            <li>
              <img src={getImageUrl('serverIcon.png')} alt="Loading.." />
            <div className={styles.bottom}>
              <h4>
                Backend Developer
              </h4>
              <p>I am proficient in backend development using Django, Django Rest Framework, Python, and MySQL{/* . I have experience building robust backend systems and APIs using these technologies */}.
              </p>
            </div>
            </li>
          </div>
          
        </fieldset>
    </div>
  );
}

export default About;
