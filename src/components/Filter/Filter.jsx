import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/usersReducer';
import { Select } from 'components';
import s from './Filter.module.css';

const filters = ['all', 'follow', 'following'];

const Filter = () => {
    const filter = useSelector(state => state.users.filter);
    const dispatch = useDispatch();

    const changeFilter = value => {
        dispatch(setFilter(value));
    };

    return (
        <div className={s.container}>
            <p>Show:</p>
            <Select
                list={filters}
                onSelect={changeFilter}
                value={filter}
                name="filter"
            />
        </div>
    );
};

export default Filter;
