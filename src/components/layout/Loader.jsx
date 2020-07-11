import React from 'react';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div>
            <div class={s.lds_spinner}>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
