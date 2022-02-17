import React from 'react';
import s from './Main.module.css';
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"
import AnimatedPage from "../../Animation/AnimationPage";
const Main = () => {



    return (
        <AnimatedPage>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.virus}
                         initial='hidden'
                         animate='show'
                         exit='exit'
                    >

                        <motion.img src="/img/virus-8.png" alt="virus" width={50} className={s.virus8a}
                                    initial={{ opacity: 10, y: 180}}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeInOut",
                                        duration: 2,
                                        delay: 3,
                                        type: "spring",
                                        repeat: 'Infinity',
                                        restSpeed: 0.5 ,

                                    }}
                        />

                        <img src="/img/virus-3.png" alt="virus" width={50} className={`${s.virus3a} ${s.box} ${s.one}`}/>
                        <img src="/img/virus-1.png" alt="virus" width={50} className={`${s.virus1} ${s.box} ${s.three}`}/>
                        <img src="/img/virus-5.png" alt="virus" width={180} className={s.virus5}/>
                        <img src="/img/privet.png" alt="textTitle" width={300} className={s.text2}/>
                        <div className={s.text}>
                            <motion.img src="/img/bg-pink.png" alt="sp" width={200} className={s.sp1}
                                        initial={{ opacity: 10, x: 280 }}
                                        animate={{ opacity: 0.5, x: 0}}
                                        transition={{
                                            ease: "easeIn",
                                            duration: 4,
                                            repeatDelay: 2,
                                            type: "spring",
                                            repeatType: 'reverse',
                                            repeat:'Infinity'
                                        }}


                            />
                            <img src="/img/text-1.png" alt="text" width={500} className={s.text1}/></div>
                        < NavLink to={'/scroll'}>

                            <div className={s.btnWhat}><img src="/img/btn -what.png" alt="" width={300}/>
                            </div>
                        </NavLink>

                        <motion.img src="/img/virus-2.png" alt="virus" width={70} className={s.virus2}
                                    initial={{opacity: 0, scale: 0 }}
                                    animate={{opacity: 0.5, scale:0.5}}
                                    transition={{
                                        ease: "easeIn",
                                        duration: 2,
                                        repeatDelay: 2,
                                        type: "spring",
                                        repeat: 'Infinity'}}/>

                        <motion.img src="/img/bg-pink-2.png" alt="sp" width={200} className={s.sp2}
                        />
                        <motion.img src="/img/virus-8.png" alt="virus" width={70} className={s.virus8b}  initial={{ opacity: 10, y: -280}}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeInOut",
                                        duration: 3,
                                        delay: 3,
                                        type: "spring",
                                        repeatDelay: 2,
                                        repeat: 'Infinity',
                                        repeatType: 'reverse',
                                        restSpeed: 0.5 ,

                                    }}/>

                        <motion.img src="/img/virus-3.png" alt="virus" width={50} className={s.virus3b}

                                    drag
                                    dragConstraints={{ left: 0, right: 300 }}
                                    dragElastic={0.2}
                        />

                        <motion.img src="/img/virus-7.png" alt="virus" width={350} className={s.virus7}
                                    initial={{ opacity: 10, x: [280,0,100] }}
                                    animate={{ opacity:0.5, x: 10 }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 3,
                                        repeatDelay: 2,
                                        type: "tween",
                                        repeatType: 'reverse',
                                        repeat:'Infinity'

                                    }}/>


                    </div>

                </div>

            </div>
        </AnimatedPage>
    );
};

export default Main;