"use client";
import { ProgressProvider } from "@bprogress/next/app";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="6px"
      color="#1e833b"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Provider;
