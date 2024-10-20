import Home from "./Routes/Home";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="add" element={<AddStudent />} />
      <Route path="student">
        <Route index element={<Student />} />
      </Route>
      <Route path="student">
        <Route index element={<Student />} />
        <Route path=":id" element={<EditStudent />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
