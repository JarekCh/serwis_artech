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
    // dispatch(getSingleTypewriter('asd'));
  }, []);

  // TODO
  // at the end of the projest add bluts
  // find and add font
  // figure navbar at mobile to work hidden with motion
  // fonts and font size
  // change px to rem
  // set bigger margin on sections
  // add isEng(pl and en) to all img alts
  // add resolution control on sanity imges??
  // add bg colors on section
  // remove bg form logo, toner and cardride with gimp
  // add custome hook for changeLangAnimation to share across components
  // add to top btn HOC
  // node.js for secure api keys
  // change slider animation
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
