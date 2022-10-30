import { Formik, Form } from "formik";
import {createPost} from '../api/post.request';
import { createNewPost } from "../app/feactures/posts/postsSlice";
import { useDispatch } from "react-redux";
export default function CreatePost() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
          try {
            dispatch(createNewPost());
             const repsonse = await createPost(values);
            console.log(repsonse);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange }) => (
          <Form>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="text"
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
