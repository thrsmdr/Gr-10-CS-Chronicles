import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './src/components/NavBar';
import HomePage from './pages/HomePage';
import DictionaryPage from './pages/DictionaryPage';
import ArticleSelectPage from './pages/ArticleSelectPage';
import InfoPage from './pages/InfoPage';
import ArticlePage from './pages/ArticlePage'; 
import LessonSelectPage from './pages/LessonSelectPage';
import PhaseMenuPage from './pages/PhaseMenuPage';
import QuizPage from './pages/QuizPage'

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/info" element={<InfoPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/lessons" element={<LessonSelectPage />} />
          <Route path="/lesson-menu/:categoryName" element={<PhaseMenuPage />} />
          <Route path="/quiz/:categoryName/:phaseId" element={<QuizPage />} />
          <Route path="/article" element={<ArticleSelectPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
