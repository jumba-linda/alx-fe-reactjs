// src/App.jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage'; // keep from Task 1 (optional)


function App() {
return (
<>
<Header />
<MainContent />
<Footer />


{/* Optional: render Task 1 component below the required three */}
<WelcomeMessage />
</>
);
}


export default App;
