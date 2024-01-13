import './App.css'
import Home from './components/Home'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { LanguageToggle } from './components/LanguageToggle';

function App() {

  return (
    <I18nextProvider i18n={i18n}>   
      <LanguageToggle/>  
      <Home/>      
    </I18nextProvider>
  )
}

export default App
