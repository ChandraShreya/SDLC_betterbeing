"use client";
import { Provider } from "react-redux";
// import { store } from "../store/store";
import { ReactNode } from "react";
// import { Toaster } from "sonner";
// import { store } from "../store/store";
import { SessionProvider } from "next-auth/react"
import { store } from "../store/store";
import { Toaster } from "sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <SessionProvider>
        <Provider store={store}>{children}
          <Toaster position="top-center"
            theme="dark"
            richColors
            duration={3000} />
        </Provider>



      </SessionProvider>
    </>

  )
}

