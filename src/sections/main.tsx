import { JSX } from "solid-js";
import { A, Outlet } from "solid-start";

type SelectorProps = {
  path: string;
  children: JSX.Element;
};

function SectionSelector({
  path,
  children,
  ...props
}: SelectorProps): JSX.Element {
  return (
    <A
      href="/home"
      class="mb-2 ml-12 font-inter text-s-size-36 font-medium text-zinc-100"
    >
      Home
    </A>
  );
}

function MainView() {
  const navbar = (
    <nav class="sticky left-0 top-0 flex h-screen w-[420px] flex-row bg-black">
      <div class="flex-grow bg-zinc-800" />
      <div class="flex w-[80%] min-w-[337px] flex-col">
        <div class="mt-12  flex h-24 flex-col items-center">
          <A href="/">
            <img src="assets/media/logo_full.svg" class="w-[221px]">
              Logo goes here
            </img>
          </A>
        </div>
        <div class="mt-6 flex flex-col">
          <A
            href="/home"
            class="mb-2 ml-12 font-inter text-s-size-36 font-medium text-zinc-100"
          >
            Home
          </A>
          <A
            href="/browse"
            class="mb-2 ml-12 font-inter text-s-size-36 font-medium text-zinc-100"
          >
            Browse
          </A>
          <A
            href="/submissions"
            class="mb-2 ml-12 font-inter text-s-size-36 font-medium text-zinc-100"
          >
            Submissions
          </A>
          <A
            href="/collections"
            class="mb-2 ml-12 font-inter text-s-size-36 font-medium text-zinc-100"
          >
            Collections
          </A>
        </div>
      </div>
    </nav>
  );

  const content = (
    <main class="flex min-h-screen flex-grow flex-col border-x bg-black">
      <Outlet />
    </main>
  );

  const sidebar = (
    <aside class="sticky right-0 top-0 flex  h-screen w-[420px] flex-col items-center bg-black  text-zinc-100">
      Side Column
    </aside>
  );

  return (
    <div class="relative flex w-screen flex-row justify-center overflow-clip bg-zinc-900">
      {navbar}
      {content}
      {sidebar}
    </div>
  );
}

export default MainView;
