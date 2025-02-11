import React from 'react';
import styles from './Skill.module.css';
import { getImageUrl } from '../utils'; 

const Skill = () => {
  return (
    <div id='skill' className={styles.Skill}>

      <h1 className={styles.title}>My Skills</h1> 
    <div className={styles.Img}>
      <div className={styles.img1}>
        <img src={getImageUrl('html.png')} alt="" />
        <div>Html</div>
      </div>

      <div className={styles.img2}>
        <img src={getImageUrl('css.png')} alt="" />
        <div>Css</div>
      </div>

      <div className={styles.img3}>
        <img src={getImageUrl('Bootsrap.jpg')} alt="" />
        <div>Bootstrap</div>
      </div>

      <div className={styles.img4}>
        <img src={getImageUrl('react.png')} alt="" />
        <div>React J.S</div>
      </div>

      <div className={styles.img4}>
        <img src={getImageUrl('react.png')} alt="" />
        <div>React J.S</div>
      </div>

      <div className={styles.img5}>
        <img src={getImageUrl('Python.jpg')} alt="" />
        <div>Python</div>
      </div> 

      <div className={styles.img6}>
        <img src={getImageUrl('dj.jpg')} alt="" />
        <div>Django</div>
      </div>

      <div className={styles.img7}>
        <img src={getImageUrl('mongodb.png')} alt="" />
        <div>Mongodb</div>
      </div>

      <div className={styles.img8}>
        <img src={getImageUrl('PSql.jpg')} alt="" />
        <div>PostgresSQL</div>
      </div>

      <div className={styles.img9}>
        <img src={getImageUrl('MySql.jpg')} alt="" />
        <div>MySQL</div>
      </div>
    </div> 
    
    </div>
  )
}

export default Skill