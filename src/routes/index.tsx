import { Title } from "solid-start";
import { Outlet } from "solid-start";
import Counter from "~/components/Counter";

export default function Main() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1 class="text-2xl font-bold underline">Index Main Page</h1>
      <Counter />
      <p>
        Visit
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
          <Outlet />
        </a>
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
