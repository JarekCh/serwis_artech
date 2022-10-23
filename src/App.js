import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { getTypewriters } from './features/typewriters/typewritersSlice';

import { getSingleTypewriter } from './features/singleTypewriter/singleTypewriterSlice';
import Typewriters from './pages/Typewriters/Typewriters';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleTypewriter from './pages/SingleTypewriter';
import SharedLayout from './pages/SharedLayout';
import SingleTypewriterLayout from './pages/SingleTypewriterLayout';

function App() {
  const { singleTypewriter } = useSelector((store) => store.singleTypewriter);

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
