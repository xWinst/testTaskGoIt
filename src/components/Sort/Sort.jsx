import { useSelector, useDispatch } from 'react-redux';
import { setSortBy } from 'redux/usersReducer';
import { Select } from 'components';
import s from './Sort.module.css';

const filters = ['unsorted', 'user', 'tweets', 'followers'];

const Sort = () => {
    const sortBy = useSelector(state => state.users.sortBy);
    const dispatch = useDispatch();

    const sortSelection = value => {
        dispatch(setSortBy(value));
    };

    return (
        <div className={s.container}>
            <p>Sort by:</p>
            <Select
                list={filters}
                onSelect={sortSelection}
                value={sortBy}
                name="filter"
            />
        </div>
    );
};

export default Sort;
