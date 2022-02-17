import React from 'react';
import s from './About.module.css';
import {NavLink} from "react-router-dom";
import AnimatedPage from "../../Animation/AnimationPage";


const About = () => {
    return (
        <AnimatedPage>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.brandBox}>

                        <img src="/img/ball-3.png" alt="ball" width={80} className={`${s.ball6} ${s.box} ${s.three}`}/>
                        <img src="/img/ball-2.png" alt="ball" width={30} className={`${s.ball3} ${s.box} ${s.one}`}/>
                        <img src="/img/blue-2ball.png" alt="ball" width={180} className= {`${s.ball4} ${s.box}${s.three}`}/>
                        <div className={s.bottle}>
                            <img src="/img/flacon-1.png" alt="" width={150} className={s.bottleImg}/>

                            <img src="/img/blue-ball.png" alt="ball" width={60} className={`${s.ball1} ${s.box} ${s.one}`}/>
                            <img src="/img/ball-3.png" alt="ball" width={80}/>
                            <img src="/img/ball-2.png" alt="ball" width={160} className={`${s.ball5} ${s.box}${s.one}`}/>
                            <img src="/img/green-ball.png" alt="ball" width={100} className={`${s.ball4} ${s.box}${s.three}`}/>
                            <img src="/img/blue-2ball.png" alt="ball" width={180} className={s.ball2}/>
                            <img src="/img/ball-3.png" alt="ball" width={80}className= {`${s.ball4} ${s.box}${s.three}`}/>
                            <img src="/img/ball-2.png" alt="ball" width={30} className={s.ball3}/>
                            <img src="/img/ball-2.png" alt="ball" width={40}/>
                            <img src="/img/bg-pink-2.png" alt="" className={s.sp} width={150}  />
                        </div>

                        <div className={s.partChange}>
                            <img src="/img/title-3.png" alt="title" className={s.title1}/>
                            <img src="/img/title-3a.png" alt="titleBrand" className={s.title2}/>
                            <div className={s.text1}>
                                <img src="/img/icon-1.png" alt="" className={s.icon1}/>
                                <p><img src="/img/text-3c.png" alt=""width={180}/></p>

                            </div>

                            <div className={s.text2}>
                                <img src="/img/icon-2.png" alt=""className={s.icon2}/>
                                <p><img src="/img/text-3b.png" alt="" width={110}/> </p>
                            </div>
                            <div className={s.btnNext}><NavLink to={'/pagination'}><img src="/img/btn-next2.png" alt="" width={150}/></NavLink></div>

                        </div>


                    </div>

                </div>

            </div>
        </AnimatedPage>
    );
};

export default About;