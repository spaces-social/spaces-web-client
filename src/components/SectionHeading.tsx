import { useLocation } from "solid-start";

function SectionHeading() {
  const location = useLocation();

  return (
    <section class="flex items-end h-24 border-b">
      <h1 class="ml-2 mb-2 font-mono font-bold text-2xl text-white">
        {location.pathname}
      </h1>
    </section>
  );
}

export default SectionHeading;
