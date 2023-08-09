import { useLocation } from "solid-start";

function SectionHeading() {
  const location = useLocation();

  return (
    <section class="flex h-24 items-end border-b">
      <h1 class="font-mono mb-2 ml-2 text-2xl font-bold text-white">
        {location.pathname}
      </h1>
    </section>
  );
}

export default SectionHeading;
