import { Title, useParams } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function UserPosts() {
  const params = useParams();
  return (
    <main>
      <Title>{params.user} / Spaces</Title>
      <h1>Posts</h1>
    </main>
  );
}
