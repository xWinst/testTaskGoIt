import { useDispatch } from 'react-redux';
import { Icon } from 'components';
import { followUser } from 'redux/usersOperations';
import s from './UserCard.module.css';

const getFormatted = number => {
    return new Intl.NumberFormat('en-EN').format(number);
};

const UserCard = ({ user, isFollow }) => {
    const dispatch = useDispatch();

    const follow = () => {
        let { id, followers } = user;
        if (isFollow) followers--;
        else followers++;

        dispatch(followUser({ id, followers, isFollow }));
    };

    return (
        <div className={s.container}>
            <Icon icon="logo" cn={s.icon} w={76} h={22} />
            <div className={s.line}></div>
            <div className={s.avatarBox}>
                <div className={s.avatar}>
                    <img src={user.avatar} alt="avatar" width={62} />
                </div>
            </div>
            <p className={s.text}>{getFormatted(user.tweets)} tweets</p>
            <p className={s.text}>{getFormatted(user.followers)} followers</p>
            <button
                className={s.btn}
                type="button"
                onClick={follow}
                style={{
                    backgroundColor: isFollow
                        ? 'var(--accent-color)'
                        : 'var(--main-color)',
                }}
            >
                {isFollow ? 'following' : 'follow'}
            </button>
        </div>
    );
};

export default UserCard;
