
import { Posts } from "../../components/Posts";
import { PostsProvider } from "../../contexts/PostsProvider";
import "./App.css";

// App.jsx
function App() {

  return (
    <PostsProvider>
      <Posts/>
    </PostsProvider>
  );
}

export default App;
