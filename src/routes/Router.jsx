import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const ForemPage = lazy(() => import("../pages/ForemPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forem" element={<ForemPage />} />

          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
