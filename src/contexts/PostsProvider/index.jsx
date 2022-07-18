import P from "prop-types";
import { useReducer } from "react";
import { data } from './data';
import { reducer } from "./reducer";
import { PostsContext } from "./context";

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return <PostsContext.Provider value={{postsState, postsDispatch}}>{children}</PostsContext.Provider>;
};


PostsProvider.propTypes = {
    children: P.node.isRequired,
};