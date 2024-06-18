"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {

  const [khodam, setKhodam] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const animals = ["Kucing", "Tikus", "Kadal", "Kuda Nil", "Bunglon", "Siput", "Koala", "Kodok", "Monyet", "Anjing", "Harimau", "Kuda", "Komodo", "Gajah", "Cicak", "Ular", "Kura-kura", "Lele", "Singa", "Zebra", "Bebek", "Ayam", "Buaya", "Gorila", "Ikan", "Ubu-ubur", "Cacing", "Semut", "Udang", "Musang", "Kecoak", "Kupu-kupu"];
  const behaviours = ["Jawa", "Depresi", "Mekanik", "Metal", "Insom", "Skizo", "Klepto", "Bunting", "Birahi", "Sigma", "Raksasa", "Berkaki Seribu", "Skizo", "Sad boy", "Mewing", "Gyatt", "Yapper"];

  const randomIndexAnimal = Math.floor(Math.random() * animals.length);
  const randomIndexBehaviour = Math.floor(Math.random() * behaviours.length);

  // const khodam = animals[randomIndexAnimal] + " " + behaviours[randomIndexBehaviour];

  const checkKhodam = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsResult(true);
      setName(e.target.nama.value);
      setKhodam(animals[randomIndexAnimal] + " " + behaviours[randomIndexBehaviour]);
    }, 5000);
  }

  const resetKhodam = (e: any) => {
    e.preventDefault();
    setKhodam("");
    setIsResult(false);
    setName("");
  }

  return (
    <main className="bg-[#1E1E20] h-screen w-full m-0 overflow-hidden">
      <div className="w-auto h-full custom-bg m-0 overflow-hidden">
        <Image className="absolute z-[1] w-full h-full object-cover bg-center bg-no-repeat overflow-hidden" src="/bg-tiger.png" alt="tiger" width={1000} height={700}/>
        
        <div className="w-auto h-screen flex justify-center items-center relative z-10 m-0 overflow-hidden">
        <div className="text-white font-thin text-[12px] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y=0 z-[1] my-1">Developed by <Link className="text-[#97D3FF] font-bold" href="https://twitter.com/maruu_snk" target="_blank">Maruu</Link> & <Link className="text-[#97D3FF] font-bold" href="https://twitter.com/jows__" target="_blank">Jows</Link></div>
          <div className="flex-col text-white bg-[#9394ab3f] p-10 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-xl sm:w-screen md:w-screen lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-1">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold title">Cek Khodam</h2>
                { !isLoading && !isResult && <form onSubmit={(e) => checkKhodam(e)} className="flex flex-col justify-center items-center">
                  <div className="mt-5 flex flex-col justify-center items-center">
                    <div className="text-center text-sm font-light">Cek khodam yang ada di dalam diri kamu</div>
                    <input className="text-sm custom-input-text mt-2" name="nama" type="text" placeholder="Tulis nama kamu di sini" required />
                  </div>
                  <button className="mt-5 bg-[#5F59D0] px-8 py-2 rounded-[200px] hover:bg-[#4e4aa7]" id="btn-check" type="submit" >CHECK</button>
                </form> }
                {isLoading && <div className="flex flex-col justify-center items-center mt-5">
                  <div className="loading w-[80px] h-[80px] relative overflow-visible"></div>
                  <div className="text-white mt-5 text-sm font-extralight text-center">Kami sedang memeriksa khodam yang ada di dalam diri kamu</div>
                </div> }
                {!isLoading && isResult && <div className="flex flex-col justify-center items-center">
                  <div className="text-white text-center text-sm font-extralight mt-2">Khodam yang ada di dalam diri <span className="font-bold text-[#C3F8FF]">{name}</span>:</div>
                  <div className="result-text text-center text-4xl font-bold mt-7 mb-7 text-[#C3F8FF]">{khodam}</div>
                  <div className="text-[12px] text-gray-400 text-center">Jangan lupa share ke yang lain agar mereka tahu sosok aseli yang ada di dalam diri kamu</div>
                  <button onClick={(e) => resetKhodam(e)} className="mt-3 text-[12px] bg-[#5F59D0] text-white px-4 py-1 rounded-full">Ulangi</button>
                </div> }
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
