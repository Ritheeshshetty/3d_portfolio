import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import styles from '../styles';
import services from '../constants'
import { fadeIn,textVariant } from '../utils/motion';
const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.styles.sectionSubText}>Introduction</p>
    <h2 className={styles.styles.sectionHeadText}>Overview.</h2>
   </motion.div>
   </>
  )
}

export default About