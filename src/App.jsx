import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./RootLayout/RootLayout"
import Home from "./pages/Home";
import Notes from "./pages/Notes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Route>
    )
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
