import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { OpenChatProvider } from "./contexts/OpenChatContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
function Root() {
  return (
    <UserProvider>
      <OpenChatProvider>
        <Outlet />
      </OpenChatProvider>
    </UserProvider>
  );
}
export default App;
