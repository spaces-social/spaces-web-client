import { Title, useParams } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function UserCollections() {
  const params = useParams();
  return (
    <main>
      <Title>{params.user} / Collections</Title>
      <h1>Collections</h1>
    </main>
  );
}
