// src/components/Post.jsx
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  return <h2>Viewing Post #{id}</h2>;
}

export default Post;
