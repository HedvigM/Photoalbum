import { MainContainer } from "../components/MainContainer";
import DetailedPageInfo from "../components/DetailedPageInfo";
import Form from "../components/Form";
import { getPost } from "../../../sanity/lib/queries";
import Comments from "../components/Comments";

export default async function DetailedView({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

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
