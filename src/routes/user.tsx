import { Outlet, Title, useParams } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function UserView() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  );
}
