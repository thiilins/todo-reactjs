import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TaskList />
    </>
  );
}
