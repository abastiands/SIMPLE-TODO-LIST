import './App.css';
import { GlobalProvider } from './Context/GlobalContext';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header/index'
import Main from './Layouts/Main';

function App() {
  return (
    <div className="App w-full h-full min-h-screen relative">
      <GlobalProvider>
        <Header />
        <Main />
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
