import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import styles from '../styles';
import services from '../constants'
import { fadeIn,textVariant } from '../utils/motion';
import { p } from 'framer-motion/client';
// import { max } from 'three/examples/jsm/nodes/Nodes.js';

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max:45,
          scale:1,
          speed:450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="w-16" />
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.styles.sectionSubText}>Introduction</p>
    <h2 className={styles.styles.sectionHeadText}>Overview.</h2>
   </motion.div>
   <motion.p 
   variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
   I am a highly skilled web applications developer with a passion for creating innovative, user-centered digital solutions using advanced web technologies. With in-depth knowledge of the MERN stack and expertise in sophisticated tools for interactive experiences, I excel at balancing technology and creativity in any project. As a quick learner with a passion for continuous improvement, I stay updated with the latest trends and technologies, enabling me to adapt and deliver exceptional results.
  <br /> Technical experience aside, I come across with problem-solving abilities, a detail-oriented mindset, and some excellent collaboration skills. Whatever the project or any team assigned to me, I can promise that I will give my best. This has been demonstrated by my involvement in designing interactive user interfaces and creating secure, scalable backends.
   </motion.p>
   <div className='mt-20 flex flex-wrap gap-10'>
    {services.services.map((service,index)=>(
      <ServiceCard key={service.title} index={index} {...service}/>
    ))}
   </div>
   </>
  )
}

export default About