import { Title, useParams } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function UserContent() {
  const params = useParams();
  return (
    <main>
      <Title>{params.user} / Content</Title>
      <h1>Content</h1>
    </main>
  );
}
