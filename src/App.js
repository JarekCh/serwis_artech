import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { getTypewriters } from './features/typewriters/typewritersSlice';

// import Home from './pages/Home';
import Loading from './components/Loading';
import SharedLayout from './pages/SharedLayout';
import SingleTypewriterLayout from './pages/SingleTypewriterLayout';

const Home = lazy(() => import('./pages/Home'));
const Typewriters = lazy(() => import('./pages/Typewriters/Typewriters'));
const SingleTypewriter = lazy(() =>
  import('./pages/SingleTypwriter/SingleTypewriter')
);
const Error = lazy(() => import('./pages/Error'));

function App() {
  const { isEnglish } = useSelector((store) => store.language);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteContent());
    dispatch(getTypewriters());
  }, []);

  // TODO  //
  // add isEng(pl and en) to all img alts
  // node.js for secure api keys
  // check classes and styling at the end
  // check func logic
  // at the end of the projest add bluts
  // fix margins beetween sections
  // LAZY LOAD
  // TODO

  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
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
