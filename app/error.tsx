"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className=" min-h-screen h-full w-full bg-slate-900 flex flex-col justify-center items-center space-y-7">
      <h2 className=" text-white font-bold text-2xl">Something went wrong!</h2>
      <button
        className="rounded-lg bg-red-500 p-2 m-4 text-lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
