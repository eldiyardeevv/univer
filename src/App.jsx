import { RouterProvider } from "react-router-dom";
import router from "./routes/MyRouter";
import Header from "./component/header/Header";
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
