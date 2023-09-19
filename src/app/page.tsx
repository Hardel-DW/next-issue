import {Suspense} from "react";
import Component from "@/app/Component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
    </main>
  )
}
