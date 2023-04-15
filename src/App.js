import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Loader } from 'components';
import { Home } from 'pages';

const Tweets = lazy(() => import('pages/Tweets'));

export const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="tweets" element={<Tweets />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
};
