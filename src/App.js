import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home/Home';
import SearchResult from './pages/search result/SearchResult';
import _404 from './pages/404/_404';

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/searchresult" element={<SearchResult/>}/>
      <Route path="*" element={<_404/>}/>
      
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
