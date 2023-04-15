import { createPortal } from 'react-dom';
import s from './Notify.module.css';
import { Icon } from 'components';
import { useDispatch } from 'react-redux';
import { resetError } from 'redux/usersReducer';

const notifyRoot = document.querySelector('#modal');

const Notify = ({ notify }) => {
    const dispatch = useDispatch();

    const close = () => {
        dispatch(resetError());
    };
    return createPortal(
        <div className={s.overlay}>
            <div className={s.modal}>
                <div className={s.box}>
                    <Icon icon="error" w={30} />
                    <p>ERROR</p>
                </div>
                <div className={s.text}>{notify}</div>
                <div className={s.btnBox}>
                    <button className={s.btn} type="button" onClick={close}>
                        ok
                    </button>
                </div>
            </div>
        </div>,
        notifyRoot
    );
};

export default Notify;
