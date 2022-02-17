import React from 'react';
import s from "../../Scroll/Scroll.module.css";

const ErrorPage = () => {
    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}><div className={s.boxError}><img src="/img/error.jpg" alt="error" /></div>

                </div>
            </div>
        </>
    );
};

export default ErrorPage;