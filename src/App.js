import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Pages from './components/Pages';
import ContactForm from './components/Contact';

function App() {
  const [tabs] = useState([
    {
      name: 'My favorite projects',
      // name: 'portfolio',
      // description: 'My favorite applications!',
    },
     ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentTab={currentTab}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
            <Resume></Resume>
          

      </main>
      <Footer></Footer>
    </div>
  );
        }
    export default App;
