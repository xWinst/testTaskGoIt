import { createPortal } from 'react-dom';
import s from './Loader.module.css';

const loaderRoot = document.querySelector('#loader');

const Loader = () => {
    return createPortal(
        <div className={s.overlay}>
            <div className={s.spinner}>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
            </div>
        </div>,
        loaderRoot
    );
};

export default Loader;
