import { JSXElement } from "solid-js";
import { Title } from "solid-start";

interface SpacesTitle {
  children: JSXElement;
}

function SpacesTitle({ children }: SpacesTitle) {
  return <Title>{children}</Title>;
}

export default SpacesTitle;
