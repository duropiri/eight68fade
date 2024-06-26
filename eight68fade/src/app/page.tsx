import Page from "@/components/layout/page";
import Body from "@/components/pages/Home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "eight68fade | @eight68fade_barbershop",
  description: "eight68fade Barbershop & Education🇨🇼",
};

export default function Home() {
  return (
      <Page>
        <Body />
      </Page>
  );
}
