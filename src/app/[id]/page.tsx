import { MainContainer } from "../components/MainContainer";
import DetailedPageInfo from "../components/DetailedPageInfo";
import Form from "../components/Form";
import { getLikes, getPost } from "../../../sanity/lib/queries";
import Comments from "../components/Comments";
import { unstable_cache } from "next/cache";
import { LikedButton } from "../components/LikedButton";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DetailedView({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/");
  }

  return (
    <MainContainer>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto",
          gap: "10px",
        }}
      >
        <DetailedPageInfo post={post} postId={params.id} />
        <Form id={params.id} />
        <Comments id={params.id} />
      </div>
    </MainContainer>
  );
}
