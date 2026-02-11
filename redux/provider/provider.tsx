"use client";
import { Provider } from "react-redux";
// import { store } from "../store/store";
import { ReactNode } from "react";
// import { Toaster } from "sonner";
// import { store } from "../store/store";
import {SessionProvider} from "next-auth/react"
import { store } from "../store/store";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
    <SessionProvider>
      <Provider store={store}>{children}</Provider>

        

    </SessionProvider>
    </>

  )
}

