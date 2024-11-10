import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Store />} />
          <Route path="/catalog/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
