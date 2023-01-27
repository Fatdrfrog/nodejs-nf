import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BaseComponent } from "./BaseComponent";
import { TypeComponent } from "./TypeComponent";
import { CityComponent } from "./CityComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseComponent />}>
          <Route path="/:type" element={<TypeComponent />}>
            <Route path="/:type/:city" element={<CityComponent />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
