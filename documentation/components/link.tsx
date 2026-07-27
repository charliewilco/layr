import type { ComponentChildren } from "preact";

interface LinkProps {
  href: string;
  children: ComponentChildren;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function withBase(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href;
  }

  return `${base}${href}`;
}

export function Link({ href, children }: LinkProps) {
  return <a href={withBase(href)}>{children}</a>;
}
