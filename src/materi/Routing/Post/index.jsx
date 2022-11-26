import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Post = () => {
  const history = useNavigate();
  const { id } = useParams();
  return (
    <div className="main">
      <h4>Post ke- {id}</h4>
      <p>deskripsi</p>
      <button onClick={() => history.push('/')}>Kembali</button>
    </div>
  );
};

export default Post;
