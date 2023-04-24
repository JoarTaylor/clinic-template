import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/spinner/spinner.component";
import GlobalStyles from "./styles/theme";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Clinic = lazy(() => import("./Routes/Clinic/Clinic"));
const Home = lazy(() => import("./Routes/Home/Home"));
const Contact = lazy(() => import("./Routes/Contact/Contact"));
const Courses = lazy(() => import("./Routes/Courses/Courses"));
const Hours = lazy(() => import("./Routes/Courses/Courses"));
const Staff = lazy(() => import("./Routes/Staff/Staff"));

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/Kliniken" element={<Clinic />} />
              <Route path="/Personal" element={<Staff />} />
              <Route path="/Kurser" element={<Courses />} />
              <Route path="/Kontakt" element={<Contact />} />
              <Route path="/Öppettider" element={<Hours />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
