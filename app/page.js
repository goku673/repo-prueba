"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./components/button";

export default function Home() {
  let nombre = "Juan"; 


   return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 sm:p-8 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
        <h1 className="text-3xl font-bold underline">Hello, {nombre}!</h1>
      </div>
    </main>
   
  );
}












