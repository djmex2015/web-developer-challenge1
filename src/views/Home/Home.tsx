import { Header, Panel } from "../../components";
import { DataProvider } from "../../contexts/DataProvider";

export function Home() {
  return (
    <DataProvider>
      <Header></Header>
      <Panel></Panel>
    </DataProvider>
  );
}
