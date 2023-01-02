import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import GetData from "./GetData";
import HandleData from "./HandleData";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GetData />
        <HandleData />
      </div>
    </QueryClientProvider>
  );
}

export default App;
