import type { ReactElement } from "react";
import Layout from "../components/layout";
import NestedLayout from "@/components/nested_layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <ul>
      <li>hello world</li>
      <li>
        <Link prefetch={false} href={`blog`}>
          naverTest
        </Link>
      </li>
    </ul>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
