// "use client";

import dynamic from "next/dynamic";

const FBAuthDyn = dynamic(() => import("@/comps/fb"));

export default function Home() {
  return (
    <main>
      <FBAuthDyn />
    </main>
  );
}
