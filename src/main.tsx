import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { App } from "./App";
import { queryClient } from "./service/queryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
