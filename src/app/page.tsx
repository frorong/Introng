"use client";

import { collection, addDoc } from "firebase/firestore";
import fireStore from "@/firebase/firestore";

export default function Home() {
  const onClickUpLoadButton = async () => {
    await addDoc(collection(fireStore, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={onClickUpLoadButton}>Ada Lovelace 등록</button>
    </div>
  );
}
