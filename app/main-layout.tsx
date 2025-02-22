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
    </div>
  );
}
