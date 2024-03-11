import { MainContainer } from "../components/MainContainer";
import DetailedPageInfo from "../components/DetailedPageInfo";
import Form from "../components/Form";
import { getComments, getLikes, getPost } from "../../../sanity/lib/queries";
import Comments from "../components/Comments";
import { unstable_cache } from "next/cache";
import { LikedButton } from "../components/LikedButton";

export default async function DetailedView({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);
  const likes = await getLikes(params.id);
  console.log("likes", likes);
  const getCommentsThroughCache = unstable_cache(
    async (): Promise<Comment[]> => {
      const comments = await getComments(params.id);
      return comments;
    },
    [params.id],
    { tags: [params.id] }
  );

  const comments = await getCommentsThroughCache();

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
        <LikedButton likes={likes[0].likes} postId={params.id} />
        <Form id={params.id} />
        <Comments id={params.id} />
      </div>
    </MainContainer>
  );
}
