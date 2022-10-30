import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../app/feactures/posts/postsSlice";
import { AppDispatch, RootState } from "../app/store";
import { useSelector } from "react-redux";

export default function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const posts: any = useSelector<RootState>((state) => state.postReducer.posts);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {posts && posts.map((post: any) => {
        return (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}
