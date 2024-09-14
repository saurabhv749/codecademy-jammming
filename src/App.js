import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Library from "./pages/Library";
// Styles
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="library" element={<Library />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
