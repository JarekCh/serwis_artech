import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { getTypewriters } from './features/typewriters/typewritersSlice';

import { getSingleTypewriter } from './features/singleTypewriter/singleTypewriterSlice';
import Typewriters from './pages/Typewriters';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleTypewriter from './pages/SingleTypewriter';
import SharedLayout from './pages/SharedLayout';
import SingleTypewriterLayout from './pages/SingleTypewriterLayout';

function App() {
  const { writersResult } = useSelector((store) => store.typewriters);
  const { singleTypewriter } = useSelector((store) => store.singleTypewriter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteContent());
    // dispatch(getTypewriters());
    // dispatch(getSingleTypewriter('asd'));
  }, []);

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
