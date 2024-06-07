import React from "react";
// import Image from 'next/image'


export default function Home() {
  return (
      <>
        <h1>Welcome to Euro 2024</h1>
        <img src="./UEFA_Euro_2024.svg.png" width={200} className={"m-auto"} alt=""/>
          {/*<Image*/}
          {/*    src="/UEFA_Euro_2024.svg.png"*/}
          {/*    width={500}*/}
          {/*    height={300}*/}
          {/*    alt="Euro_2024"*/}
          {/*/>*/}
      </>

  );
}