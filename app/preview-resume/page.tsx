"use client";

import { generateHtml } from "@/src/lib/generateHtml";
import { RootState } from "@/src/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PreviewResume() {
  const [htmlContent, setHtmlContent] = useState("");
  const { data } = useSelector((state: RootState) => state.resume);

  useEffect(() => {
    async function loadData() {
      
      if (!data) return;
      const html = generateHtml(data);
      setHtmlContent(html);
    }
    loadData();
  }, [data]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
