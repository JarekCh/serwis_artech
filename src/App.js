import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSiteContent } from './features/siteContent/siteContentSlice';
import { languagePL, languageEN } from './features/language/languageSlice';

function App() {
  const { result, isLoading } = useSelector((store) => store.site);
  const { isEnglish } = useSelector((store) => store.language);

  const dispatch = useDispatch();

  const handleLanguage = () => {
    if (!isEnglish) {
      return dispatch(languagePL());
    }
    if (isEnglish) {
      return dispatch(languageEN());
    }
  };

  useEffect(() => {
    dispatch(getSiteContent());
  }, []);

  console.log('🚀 ~ file: App.js ~ line 7 ~ App ~ isLoading', isLoading);
  console.log('🚀 ~ file: App.js ~ line 7 ~ App ~ result', result);
  console.log('🚀 ~ file: App.js ~ line 9 ~ App ~ isEnglish', isEnglish);

  return (
    <div className='App'>
      <h1>I'm Alive</h1>
      <button onClick={handleLanguage}>lang EN/PL</button>
    </div>
  );
}

export default App;
