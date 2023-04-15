import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UsersList, Loader, Notify, Filter, Sort, Icon } from 'components';
import { getAllUsers } from 'redux/usersOperations';

const Tweets = () => {
    const isLoading = useSelector(state => state.users.isLoading);
    const error = useSelector(state => state.users.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="goBack" onClick={() => navigate('/')}>
                <Icon icon="arrow-left" w={20} />
                <p>Go Home</p>
            </div>
            <h1 className="title">Users List</h1>
            {isLoading && <Loader />}
            <div className="optionsBox">
                <Filter />
                <Sort />
            </div>
            <UsersList />
            {error && <Notify notify={error} />}
        </div>
    );
};

export default Tweets;
