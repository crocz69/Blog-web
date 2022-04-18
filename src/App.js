import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About'
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
//Components
import NavBar from './component/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/About' element={<About/>} />
      <Route exact path='/articleList' element={<ArticleList/>} />
      <Route exact path='/Article/:name' element={<Article/>} />
      <Route path = "*" element = {<NotFound/>} />
      </Routes>
</div>
</Router>
  );
}

export default App;
// install router dom in terminal npm install --save react-router-dom