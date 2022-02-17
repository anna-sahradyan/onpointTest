import React from 'react';
import s from './Scroll.module.css';
import AnimatedPage from "../Animation/AnimationPage";
import {motion} from 'framer-motion';

const Scroll = () => {

    return (
        <AnimatedPage>

            <div className={s.contentDiv}>
                <div className={s.content}>
                    <img src="/img/title-2.png" alt="title" className={s.title}/>
                    <div className={s.boxRec}>
                        <div className={s.scrollBg}>
                            <div className={s.scrollDiv} >
                                <div className={s.scrollObject}>
                                    <p><b>Lorem ipsum dolor sit amet, </b>Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Accusamus beatae deserunt, ipsum libero maiores molestiae,
                                        mollitia omnis praesentium quia quisquam ratione recusandae saepe sit soluta,
                                        sunt suscipit tenetur veniam voluptate.consectetur adipisicing elit. Animi atque
                                        cumque
                                        distinctio dolore fugiat illum incidunt iusto, laboriosam natus nulla quae
                                        quisquam saepe soluta. Animi ea facilis quidem similique? Accusantium!
                                    </p>
                                    <p>Assumenda atque consectetur distinctio dolores, eius eligendi enim error esse
                                        est eum ex ipsa ipsum iste iure iusto laboriosam modi natus neque quisquam quo
                                        quod quos ratione sapiente sed ut!
                                    </p>
                                    <p>Fugit, similique, vero. Amet autem excepturi iste nesciunt repudiandae
                                        veritatis? Aliquid debitis dicta ducimus eaque earum, est excepturi facilis
                                        laudantium nemo omnis quisquam quos reiciendis repellendus reprehenderit,
                                        tenetur ullam, voluptates.
                                    </p>
                                    <p>Ab accusamus architecto at blanditiis deserunt, dolor eaque expedita labore
                                        laborum molestiae nisi provident quidem quo tempora tenetur! Consectetur, ea,
                                        harum? Alias aspernatur consequuntur delectus deserunt dolores expedita facilis
                                        praesentium!
                                    </p>
                                    <p>Iusto magnam maxime repudiandae tempora. Amet consequuntur error explicabo iste
                                        maiores nam nostrum nulla qui quos sequi? Accusamus aliquid animi asperiores,
                                        cumque excepturi hic iusto magni mollitia pariatur unde vero!
                                    </p>
                                    <p>Atque beatae consequatur dolorem, dolores eaque facilis hic illum inventore
                                        iste magnam, molestiae molestias nemo nostrum odio officia optio quo ratione
                                        saepe tenetur velit? Atque quasi quisquam quos rem saepe!
                                    </p>
                                    <p>Ad blanditiis distinctio doloremque eaque iusto magni molestias perferendis
                                        quae quod sed. Aliquam asperiores autem dolorem ducimus ex exercitationem
                                        molestias mollitia nam necessitatibus nemo, obcaecati reiciendis temporibus, vel
                                        veniam veritatis.
                                    </p>
                                    <p>At atque aut cupiditate dolore eveniet ex, incidunt ipsam ipsum iure neque,
                                        nihil non odio perspiciatis repellat sed temporibus tenetur. Asperiores
                                        consequatur ducimus eaque laboriosam molestiae quasi quisquam quo sit.
                                    </p>
                                    <p>Aliquid blanditiis consectetur dolorum, et labore maiores nobis odit ratione
                                        saepe voluptas. Dolor quisquam sed veniam! Aliquid asperiores at est eum,
                                        eveniet exercitationem fuga id ipsa maxime non tenetur vel?
                                    </p>
                                    <p><b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit. A, autem cum deleniti distinctio dolor earum eos eveniet iure labore maxime nemo numquam pariatur provident quae quaerat quam sit unde voluptas!
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className={s.sp}>
                            <motion.img src="/img/bg-pink.png" alt="sp" width={250} className={`${s.sp1} `} initial={{ opacity: 10, x: 10 }}
                                        animate={{ opacity: 0.5, x:-480}}
                                        transition={{
                                            ease: "easeIn",
                                            duration: 4,
                                            repeatDelay: 2,
                                            type: "keyframes",
                                            repeatType: 'reverse',
                                            repeat:'Infinity'
                                        }}/>
                            <motion.img src="/img/bg-pink.png" alt="sp" width={500} className={`${s.sp2}`} initial={{ opacity: 10, x: 10}}
                                        animate={{ opacity: 0.5, x: -480}}
                                        transition={{
                                            ease: "easeIn",
                                            duration: 4,
                                            repeatDelay: 2,
                                            type: "keyframes",
                                            repeatType: 'reverse',
                                            repeat:'Infinity'
                                        }}/>
                            <motion.img src="/img/bg-pink.png" alt="sp" width={600} className={`${s.sp3}`} initial={{ opacity: 10, x: 10}}
                                        animate={{ opacity: 0.5, x:-480}}
                                        transition={{
                                            ease: "easeIn",
                                            duration: 4,
                                            repeatDelay: 2,
                                            type: "keyframes",
                                            repeatType: 'reverse',
                                            repeat:'Infinity'
                                        }}/>
                            <motion.img src="/img/bg-pink.png" alt="sp" width={150} className={`${s.sp4} `} initial={{ opacity: 10, x:10}}
                                        animate={{ opacity: 0.5, x: -480}}
                                        transition={{
                                            ease: "easeIn",
                                            duration: 4,
                                            repeatDelay: 2,
                                            type: "keyframes",
                                            repeatType: 'reverse',
                                            repeat:'Infinity'
                                        }}/>
                            <motion.img src="/img/bg-pink.png" alt="sp" width={400} className={`${s.sp5} `} initial={{ opacity: 10, x: 10}}
                                        animate={{ opacity: 1, x: -480}}
                                        transition={{
                                            ease: "easeIn",
                                            duration: 4,
                                            repeatDelay: 2,
                                            type: "keyframes",
                                            repeatType: 'reverse',
                                            repeat:'Infinity'
                                        }}/>
                        </div>
                    </div>

                </div>

            </div>
        </AnimatedPage>);
};

export default Scroll;