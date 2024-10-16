import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailTemplates from './components/EmailTemplates';
import TemplatePreview from './pages/TemplatePreview';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailTemplates />} />
        <Route path="/preview/:templateName" element={<TemplatePreview />} />
      </Routes>
    </Router>
  );
}

export default App;
