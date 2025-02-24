"use client";

import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../src/components/nav-bar";
import { AppDispatch, RootState } from "@/src/redux/store";
import { useEffect } from "react";
import { fetchResumeData } from "@/src/redux/resumeState";
import Loading from "@/src/components/global/loading";
import ErrorMessage from "@/src/components/global/error-message";
// import Footer from "../src/components/Footer";

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.resume
  );

  useEffect(() => {
    if (!data && !loading && !error) {
      dispatch(fetchResumeData());
    }
  }, [data, loading, error, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
        return <ErrorMessage message="Error loading personal infos." />;
  }

  return (
    <div>
      <NavBar />
      <main>{children}</main>
      {/* <Footer /> */}


      {/* reCAPTCHA Disclaimer
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-primary-500 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          className="text-primary-500 hover:underline"
        >
          Terms of Service
        </a>{" "}
        apply.
      </footer>
       */}
    </div>
  );
}
