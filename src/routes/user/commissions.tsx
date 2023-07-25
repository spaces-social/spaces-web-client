import { Title, useParams } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function UserCommissions() {
  const params = useParams();
  return (
    <main>
      <Title>{params.user} / Commissions</Title>
      <h1>Commissions</h1>
    </main>
  );
}
