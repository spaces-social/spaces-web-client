// @refresh reload
import { Suspense } from "solid-js";
import { Body, ErrorBoundary, Head, Html, Meta, Scripts } from "solid-start";
import "./root.css";
import SpacesRouter from "./s_router";
import SpacesTitle from "./s_title";

export default function SpacesClient() {
  return (
    <Html lang="en">
      <Head>
        <SpacesTitle>Spaces</SpacesTitle>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <SpacesRouter />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
};
