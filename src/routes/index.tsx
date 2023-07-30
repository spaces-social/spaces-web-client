import { A, Outlet } from "solid-start";

function MainView() {
  const navbar = (
    <nav class="flex flex-col bg-black w-2/12">
      <svg>Logo goes here</svg>
      <A href="/home" class="my-6 ml-12">
        Home
      </A>
      <A href="/browse" class="my-6 ml-12">
        Browse
      </A>
      <A href="/submissions" class="my-6 ml-12">
        Submissions
      </A>
      <A href="/collections" class="my-6 ml-12">
        Collections
      </A>
    </nav>
  );

  const content = (
    <main class="max-w-[60%] flex-grow overflow-scroll bg-black border-x">
      <Outlet />
    </main>
  );

  const sidebar = (
    <aside class="flex flex-col items-center bg-black w-2/12">
      Side Column
    </aside>
  );

  return (
    <div class="w-screen h-screen flex flex-row justify-center bg-zinc-900">
      {navbar}
      {content}
      {sidebar}
    </div>
  );
}

export default MainView;
