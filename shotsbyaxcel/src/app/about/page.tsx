import Page from "@/components/layout/page";
import Body from "@/components/pages/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Axcel Raul | @shotsbyaxcel",
  description: "Photography | Videography",
};

export default function Home() {

  return (
    <Page>
      <Body />
    </Page>
  );
}
