import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));

const ForemPage = lazy(() => import("../pages/ForemPage"));
const BestPage = lazy(() => import("../pages/BestPage"));
const QuestionPage = lazy(() => import("../pages/QuestionPage"));

const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUPPage = lazy(() => import("../pages/SignUpPage"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/forem" element={<ForemPage />} />
          <Route path="/forem/best" element={<BestPage />} />
          <Route path="/forem/question" element={<QuestionPage />} />

          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUPPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
