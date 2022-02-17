import React, {useRef, useState} from 'react';
import s from '../../src/pagination/Pagination.module.css';
import {NavLink} from "react-router-dom";
import ListOne from "../pagination/ListOne";
import ListTwo from "../pagination/ListTwo";
import AnimatedPage from "../Animation/AnimationPage";


const PaginationList = () => {
    const refNext = useRef();
    const refPrev = useRef();
    const [flag, setFlag] = useState(false);

    const clickHandlerPrev = (e) => {
        e.preventDefault()
        if (e.target) {
            setFlag(true);
            refNext.current.style.backgroundColor='#e470a3';
            refNext.current.style.border='none';
            refPrev.current.style.backgroundColor='white';
            refPrev.current.style.border='.5px solid black';
        }


    }
    const clickHandlerNext = (e) => {
        e.preventDefault();
        if (e.target) {
            setFlag(false);
            refNext.current.style.backgroundColor = 'white';
            refPrev.current.style.backgroundColor='#e470a3';
            refPrev.current.style.border='none';
            refNext.current.style.border='.5px solid black';
        }


    }

    return (
        <AnimatedPage>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.brandBox}>
                        <img src="/img/ball-3.png" alt="ball" width={80} className={s.ball6}/>
                        <img src="/img/ball-2.png" alt="ball" width={30} className={s.ball3}/>
                        <img src="/img/blue-2ball.png" alt="ball" width={180} className={`${s.ball4} ${s.box} ${s.one}`}/>
                        <div className={s.bottle}>
                            <img src="/img/flacon-1.png" alt="" width={150} className={s.bottleImg}/>
                            <img src="/img/blue-ball.png" alt="ball" width={60} className={`${s.ball1} ${s.box} ${s.one}`}/>
                            <img src="/img/ball-3.png" alt="ball" width={80}className={` ${s.box} ${s.one}`}/>
                            <img src="/img/ball-2.png" alt="ball" width={160} className={s.ball5}/>
                            <img src="/img/green-ball.png" alt="ball" width={100}/>
                            <img src="/img/blue-2ball.png" alt="ball" width={180} className={s.ball2}/>
                            <img src="/img/ball-3.png" alt="ball" width={80}className={` ${s.box}${s.one}`}/>
                            <img src="/img/ball-2.png" alt="ball" width={30} className={s.ball3}/>
                            <img src="/img/ball-2.png" alt="ball" width={40}className={` ${s.box}${s.three}`}/>
                            <img src="/img/bg-pink-2.png" alt="" className={s.sp} width={150}/>
                        </div>
                        <div className={s.partChange}>
                            <div className={s.blockPagination}>
                                <div className={s.boxList}>
                                    <img src="/img/title-4a.png" alt="title" className={s.title1}/>
                                    <img src="/img/title-3a.png" alt="titleBrand" className={s.title2}/>
                                    <NavLink to={'/brand'}><img src="/img/close1.png" alt="close" className={s.close}/></NavLink>
                                    <div className={s.listLi}>

                                        <div className={s.blockBtn}>
                                            <div className={s.prevBtn} ref={refPrev}></div>
                                            <img src="/img/btn-prev.png" alt="prev" width={8}
                                                 onClick={clickHandlerPrev}
                                                 className={s.prev}/>

                                            <div className={s.nextBtn} ref={refNext}></div>
                                            <img src="/img/btn-2.png" alt="next-right"
                                                 width={8}
                                                 onClick={clickHandlerNext} className={s.next}/>


                                        </div>
                                        {flag ? <ListOne/> : <ListTwo/>}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


        </AnimatedPage>);
};

export default PaginationList;