// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Link,
  Meta,
  Scripts,
} from "solid-start";
import "./root.css";
import SpacesRouter from "./smc_router";
import SpacesTitle from "./s_title";

export default function SpacesClient() {
  return (
    <Html lang="en">
      <Head>
        <SpacesTitle>Spaces</SpacesTitle>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
}
