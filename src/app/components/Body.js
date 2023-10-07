"use client"
import React from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";

export default function Body() {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Samavia","Learn with me","I love coding"],
    loop:true,
    delaySpeed:2000,
  });
  return (
    <section>
      <div>
        {/* First part */}
        <div>
          <div>
            <h1>
              <span>{text}</span>
              <Cursor/>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
