import { Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Service = () => {
  const match = useLocation();
  return (
    <div className="main">
      <h2>Service Page</h2>
      <ul>
        <li>
          <Link to={`${match.url}/computer`}>Computer</Link>
        </li>
        <li>
          <Link to={`${match.url}/smartphone`}>Smartphone</Link>
        </li>
        <li>dua</li>
        <li>tiga</li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit natus sed. Magnam ratione veniam iure exercitationem quae assumenda nam quisquam deserunt eligendi laudantium animi iste cumque ex, fugit atque?</p>

      <hr></hr>

      <switch>
        <Route path={`${match.url}/Computer`}>komputer, CPU, monitor, Dll</Route>
        <Route path={`${match.url}/smartphone`}>ASUS, Iphone, Realme, Dll</Route>
      </switch>
    </div>
  );
};

export default Service;
