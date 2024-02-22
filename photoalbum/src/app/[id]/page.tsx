"use client";
import { MainContainer } from "../components/MainContainer";
import DetailedPageInfo from "../components/DetailedPageInfo";
import Form from "../components/Form";
import { useParams } from "next/navigation";
import { getPost } from "../../../sanity/lib/queries";

export default async function DetailerView() {
  const params = useParams<{ id: string }>();
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
        <DetailedPageInfo post={post} />
        <Form />
      </div>
    </MainContainer>
  );
}
