/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NextLink from "next/link";

interface PropsLink {
  href: string;
  children: React.ReactChild;
}

export default function Link(props: PropsLink) {
  const {href} = props;
  const {children} = props;
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
}
