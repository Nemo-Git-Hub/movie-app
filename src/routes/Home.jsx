import Search from "../components/Search";
import PageLayout from "../components/layouts/PageLayout";

import List from "./List";

export default function Home() {
  return (
    <PageLayout>
      <Search />
      <List />
    </PageLayout>
  );
}
