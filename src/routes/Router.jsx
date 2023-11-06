import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ForemLayout from "../layout/ForemLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const WritePage = lazy(() => import("../pages/WritePage"));

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
          <Route path="/write" element={<WritePage />} />

          <Route path="/forem" element={<ForemLayout />}>
            <Route index element={<ForemPage />} />
            <Route path="best" element={<BestPage />} />
            <Route path="question" element={<QuestionPage />} />
          </Route>

          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUPPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
