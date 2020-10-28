import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import Header from './ui/Header';
import theme from './ui/Theme';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Footer from './ui/Footer';
import {useState} from 'react';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value,setValue] = useState(0);
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    <Switch>
      <Route exact path="/" component = {()=>{return <div style={{height:'2000px'}}>Home</div>}}></Route>
      <Route exact path="/services" component = {()=>{return <div>Services</div>}}></Route>
      <Route exact path="/customsoftware" component = {()=>{return <div>Custom software</div>}}></Route>
      <Route exact path="/websites" component = {()=>{return <div>Websites</div>}}></Route>
      <Route exact path="/revolution" component = {()=>{return <div>Revolution</div>}}></Route>
      <Route exact path="/contact" component = {()=>{return <div>Contact</div>}}></Route>
      <Route exact path="/mobileapps" component = {()=>{return <div>Mobile apps</div>}}></Route>
      <Route exact path="/about" component = {()=>{return <div>About us</div>}}></Route>
      <Route exact path="/estimate" component = {()=>{return <div>Estimate</div>}}></Route>
    </Switch>
    <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
