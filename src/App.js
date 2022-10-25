import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { getTypewriters } from './features/typewriters/typewritersSlice';

import Typewriters from './pages/Typewriters/Typewriters';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleTypewriter from './pages/SingleTypwriter/SingleTypewriter';
import SharedLayout from './pages/SharedLayout';
import SingleTypewriterLayout from './pages/SingleTypewriterLayout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteContent());
    dispatch(getTypewriters());
  }, []);

  // TODO
  // at the end of the projest add bluts
  // figure navbar at mobile to work hidden with motion
  // fonts and font size
  // change px to rem
  // add isEng(pl and en) to all img alts
  // add resolution control on sanity imges??
  // remove bg form logo with gimp
  // add custome hook for changeLangAnimation to share across components HOC
  // node.js for secure api keys
  // TODO

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='typewriters' element={<SingleTypewriterLayout />}>
            <Route index element={<Typewriters />} />
            <Route path=':slug' element={<SingleTypewriter />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
