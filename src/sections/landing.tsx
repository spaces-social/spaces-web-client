import { A } from "solid-start";

function Landing() {
  return (
    <div class="flex h-screen w-screen flex-row items-center justify-center bg-black">
      <div class="mx-16">
        <img src="assets/media/logo_full.svg" />
      </div>
      <div class="mx-16 w-60">
        <form class="flex flex-col ">
          <input
            name="email"
            type="email"
            placeholder="Username / Email"
            required
            class="my-2 h-10 rounded-md pl-3"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            class="my-2 h-10 rounded-md pl-3"
          />
          <div class="mt-6 flex flex-col">
            <button
              class="mb-4 h-14 w-full rounded-2xl bg-accent-medium text-xl font-semibold text-seasalt"
              type="submit"
            >
              Login
            </button>
            <A class="text-accent-medium hover:underline" href="">
              Register
            </A>
          </div>
        </form>
      </div>
      <div class="absolute bottom-0 h-[1px] w-full animate-loop bg-rainbow bg-50% bg-fixed " />
      <div class="absolute bottom-0 h-[10px] w-full animate-loop bg-rainbow bg-50% bg-fixed blur-xl " />
    </div>
  );
}

export default Landing;
