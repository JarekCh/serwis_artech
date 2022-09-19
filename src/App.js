import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSiteContent } from './features/siteContent/siteContentSlice';

function App() {
  const { result, isLoading } = useSelector((store) => store.site);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiteContent());
  }, []);
  console.log('🚀 ~ file: App.js ~ line 7 ~ App ~ isLoading', isLoading);
  console.log('🚀 ~ file: App.js ~ line 7 ~ App ~ result', result);
  return <div className='App'>I'm Alive</div>;
}

export default App;
