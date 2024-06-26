import Page from "@/components/layout/page";
import Body from "@/components/pages/Work";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Work | Axcel Raul | @shotsbyaxcel",
  description: "Photography | Videography",
};

export default function Home() {

  return (
    <Page>
      <Body />
    </Page>
  );
}
