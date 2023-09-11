import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "update/:id",
    element: <Update />,
  },
  {
    path: "post",
    element: <Post />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
