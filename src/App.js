import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { getTypewriters } from './features/typewriters/typewritersSlice';

// import Typewriters from './pages/Typewriters/Typewriters';
import Home from './pages/Home';
import Error from './pages/Error';
import Loading from './components/Loading';
// import SingleTypewriter from './pages/SingleTypwriter/SingleTypewriter';
import SharedLayout from './pages/SharedLayout';
import SingleTypewriterLayout from './pages/SingleTypewriterLayout';

const Typewriters = lazy(() => import('./pages/Typewriters/Typewriters'));
const SingleTypewriter = lazy(() =>
  import('./pages/SingleTypwriter/SingleTypewriter')
);

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
  // at the end of the projest add bluts
  // fix images in slidertypewriter
  // add to reduce variable thats change on GET if respons is null show error page , single typewriter
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
