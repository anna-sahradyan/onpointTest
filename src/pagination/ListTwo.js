import React from 'react';
import list  from '../data/list.json';
import s from "./Pagination.module.css";
const ListTwo = () => {
    const arr =list.slice(3,6);

    return (
        <>
            <ul>
                {arr.map((item, index) => {
                    return <div key={`${item}_${index}`}>
                        <li className={s.num}><img src={item.id} alt='' width={20}/></li>
                        <li className={s.liText}><img src={item.text} alt="" width={250}/></li>

                    </div>
                })}
            </ul>
        </>
    );
};

export default ListTwo;