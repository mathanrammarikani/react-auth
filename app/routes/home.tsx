import type { Route } from "./+types/home";
import { Homepagefunc } from "~/homelayout/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Basic Auth" },
    { name: "Homepage", content: "Welcome to Homepage" },
  ];
}

export default function Home() {
  return <Homepagefunc />;
}
