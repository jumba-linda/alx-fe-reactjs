// src/App.jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';


function App() {
return (
<>
<Header />
<MainContent />
<Footer />


{/* Task 3: User profile using props */}
<UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
</>
);
}


export default App;
