import { Pagenavbar } from "~/homelayout/pagenavbar";
import type { Route } from "./+types/home";
import { Homepagefunc } from "~/homelayout/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Basic Auth" },
    { name: "Homepage", content: "Welcome to Homepage" },
  ];
}

export default function Home() {
  return (
    <div>
      <Pagenavbar />
      <Homepagefunc />
    </div>
  );
}
