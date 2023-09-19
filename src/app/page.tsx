import {Suspense} from "react";
import Component from "@/app/Component";

export default function Home() {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense>
        </main>
    )
}
