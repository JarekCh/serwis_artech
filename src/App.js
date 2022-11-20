import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { getTypewriters } from './features/typewriters/typewritersSlice';

import Home from './pages/Home';
import Loading from './components/Loading';
import SharedLayout from './pages/SharedLayout';
import SingleTypewriterLayout from './pages/SingleTypewriterLayout';

const Typewriters = lazy(() => import('./pages/Typewriters/Typewriters'));
const SingleTypewriter = lazy(() =>
  import('./pages/SingleTypwriter/SingleTypewriter')
);
const Error = lazy(() => import('./pages/Error'));

function App() {
  const { isEnglish } = useSelector((store) => store.language);
  const { lowRangeFilter, highRangeFilter } = useSelector(
    (store) => store.typewriters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteContent());
    dispatch(getTypewriters({ lowRangeFilter, highRangeFilter }));
  }, []);

  // TODO
  // paggination, lazy load gogle maps
  // node.js for secure api keys
  // fix problems from lighthouse
  // Code revie/refactor logic, css
  // TODO

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
            <Route path='*' element={<Error isEnglish={isEnglish} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
