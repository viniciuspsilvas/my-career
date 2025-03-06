import EditPostPageClient from "../edit-post-page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <EditPostPageClient id={id} />;
}
