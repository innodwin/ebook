
import { Footer, Header } from './components';
import { HomePage } from './pages';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header />
     <AllRoutes/>
     <Footer />
    </div>
  );
}

export default App;
