import Layout from "@/components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Capabilities from "@/pages/Capabilities";
import Company from "@/pages/Company";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Work from "@/pages/Work";
// import { Company } from "./pages/Company";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/work" element={<Work />} />
          <Route path="/company" element={<Company />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;