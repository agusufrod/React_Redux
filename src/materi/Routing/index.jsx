import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import Service from './Service';
import Client from './Client';
import Contact from './Contact';
import Post from './Post';
// import { Route } from 'react-router-dom';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route exact path="/" children={() => <Home />} />
          <Route path="/service" children={() => <Service />} />
          <Route path="/client" children={() => <Client />} />
          <Route path="/contact" children={() => <Contact />} />
          <Route path="/post" children={() => <Post />} />
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="client">
            <Client />
          </Route>
          <Route path="contact">
            <Contact />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
