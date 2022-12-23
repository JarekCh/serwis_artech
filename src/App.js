import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { getTypewriters } from './features/typewriters/typewritersSlice';

import Loading from './components/Loading';
import SharedLayout from './pages/SharedLayout';
import SingleTypewriterLayout from './pages/SingleTypewriterLayout';
import ScrollToTop from './utils/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Typewriters = lazy(() => import('./pages/Typewriters/Typewriters'));
const SingleTypewriter = lazy(() =>
  import('./pages/SingleTypwriter/SingleTypewriter')
);
const Error = lazy(() => import('./pages/Error'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Privacy = lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  const { isEnglish } = useSelector((store) => store.language);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteContent());
    dispatch(getTypewriters());
  }, [dispatch]);

  // TODO
  // fix problems from lighthouse
  // Code review/refactor logic, css

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='typewriters' element={<SingleTypewriterLayout />}>
                <Route index element={<Typewriters isEnglish={isEnglish} />} />
                <Route
                  path=':slug'
                  element={<SingleTypewriter isEnglish={isEnglish} />}
                />
              </Route>
              <Route path='shop' element={<Shop isEnglish={isEnglish} />} />
              <Route
                path='privacy-policy'
                element={<Privacy isEnglish={isEnglish} />}
              />
              <Route path='*' element={<Error isEnglish={isEnglish} />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
