import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main">
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to="/post/1">satu</Link>
        </li>
        <li>
          <Link to="/post/2">satu</Link>
        </li>
        <li>
          <Link to="/post/3">satu</Link>
        </li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit natus sed. Magnam ratione veniam iure exercitationem quae assumenda nam quisquam deserunt eligendi laudantium animi iste cumque ex, fugit atque?</p>
    </div>
  );
};

export default Home;
