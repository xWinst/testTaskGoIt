import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserCard } from 'components';
import s from './UsersList.module.css';

const UsersList = () => {
    const { list, filter, sortBy, following } = useSelector(
        state => state.users
    );
    const [numberVisibleUsers, setNumberVisibleUsers] = useState(9);
    const [isEnd, setIsEnd] = useState(false);

    const visibleList = list
        .filter(({ id }) => {
            if (filter === 'follow') return !following.includes(id);
            if (filter === 'following') return following.includes(id);
            return true;
        })
        .slice(0, numberVisibleUsers);

    if (sortBy !== 'unsorted') {
        if (sortBy === 'user') {
            visibleList.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        } else visibleList.sort((a, b) => b[sortBy] - a[sortBy]);
    }

    const load = () => {
        let newValue = numberVisibleUsers + 9;
        if (newValue >= list.length) {
            newValue = list.length - 1;
            setIsEnd(true);
        }
        setNumberVisibleUsers(newValue);
    };

    return visibleList.length > 0 ? (
        <>
            <ul className={s.list}>
                {visibleList.map(user => (
                    <li className={s.item} key={user.id}>
                        <UserCard
                            user={user}
                            isFollow={following.includes(user.id)}
                        />
                    </li>
                ))}
            </ul>
            <div className={s.btnBox}>
                {isEnd ? (
                    <p>No more users to load</p>
                ) : (
                    <button className={s.btn} type="button" onClick={load}>
                        Load more
                    </button>
                )}
            </div>
        </>
    ) : filter === 'following' ? (
        <div className={s.text}>You have not following to any user yet</div>
    ) : (
        <div className={s.text}>
            There are no users that you would not follow :)
        </div>
    );
};

export default UsersList;
