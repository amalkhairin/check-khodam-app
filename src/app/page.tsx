"use client"

import Link from "next/link";
import React, { useState } from "react";

export default function Home() {

  const [khodam, setKhodam] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [flag2, setFlag2] = useState(true);

  const animals = ["Kucing", "Tikus", "Kadal", "Kuda Nil", "Bunglon", "Siput", "Koala", "Kodok", "Monyet", "Anjing", "Harimau", "Kuda", "Komodo", "Gajah", "Cicak", "Ular", "Kura-kura", "Lele", "Laba-laba", "Singa", "Zebra", "Bebek", "Ayam", "Buaya", "Gorila", "Naga", "Naga", "Ikan", "Ubu-ubur", "Cacing", "Semut", "Udang", "Musang", "Kecoak", "Kupu-kupu", "Laba-laba"];
  const behaviours = ["Jawa", "Depresi", "Mekanik", "Metal", "Insom", "Skizo", "Klepto", "Bunting", "Birahi", "Sigma", "Raksasa", "Berkaki Seribu", "Skizo", "Sad boy", "Mewing", "Gyatt", "Yapper", "Yapper", "Skizo", "Ambis", "Sigma", "Dribble", "Dribble", "Jawa", "Sigma", "Ngesot", "Sunda", "Kalimantan", "Kutub", "Sumatera", "Sunda", "Sumatera", "Sunda", "Yapper", "Ngesot", "Ambis"];

  const things = ["Speaker JBL", "Toa Masjid", "Lemari 2 Pintu", "Kulkas", "Taplak Meja", "Pecel Lele", "Charger Iphone", "TWS", "Kalkulator", "Sendal Jepit", "Undur-undur Maju", "Bagas Dribble", "Sendal Jepit", "Sapu Lidi", "Gagang Pintu", "Tutup Toples", "Rice Cooker", "Gerobak Ketoprak", "Ban Motor", "Bakwan Jagung", "Rice Cooker", "Nugget Rebus", "Asep Kulkas", "Bintang Sigma", "Helikopter", "Laba-laba Sunda", "Raja Beruang", "Nastar", "Seblak Ceker", "Macan Cisewu", "Zaki Indomie", "Farhan Kebab", "Rizal Perkedel", "Joko Kopling", "Reza Wangsaf", "Sigit Rendang", "Biawak Alaska", "Janda Pirang", "Budi Martabak", "Nurdin Basket", "Edgar Burger", "Aspal Tol Cipularang", "Tuyul Mohawk"]

  const randomIndexAnimal = Math.round(Math.random() * (animals.length - 1));
  const randomIndexBehaviour = Math.round(Math.random() * (behaviours.length - 1));
  const randomIndexThing = Math.round(Math.random() * (things.length - 1));

  const randomTest = Math.round(Math.random());

  let randomKhodam = "";
  let randomAnimal = animals[randomIndexAnimal];
  let randomBehaviour = behaviours[randomIndexBehaviour];
  let randomThing = things[randomIndexThing];

  if (randomKhodam === "" || randomKhodam === undefined || randomKhodam === null) {
    randomKhodam = "NPC Biasa"
  }
  if (randomAnimal === "" || randomAnimal === undefined || randomAnimal === null) {
    randomKhodam = animals[0];
  }
  if (randomBehaviour === "" || randomBehaviour === undefined || randomBehaviour === null) {
    randomKhodam = behaviours[0];
  }
  if (randomThing === "" || randomThing === undefined || randomThing === null) {
    randomKhodam = things[0];
  }

  if (randomTest === 0) {
    randomKhodam = randomAnimal + " " + randomBehaviour;
  } else {
    randomKhodam = randomThing; 
  }

  const checkKhodam = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setFlag2(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsResult(true);
      setFlag2(true);
      setName(e.target.nama.value);
      setKhodam(randomKhodam);
    }, 5000);
  }

  const resetKhodam = (e: any) => {
    e.preventDefault();
    setKhodam("");
    setFlag2(true);
    setIsResult(false);
    setName("");
  }

  return (
    <main className="h-screen w-full m-0 overflow-hidden">
      <div className="w-auto h-full custom-bg m-0 overflow-hidden">
        <div className="w-auto h-screen flex justify-center items-center relative z-10 m-0 overflow-hidden">
        <div className="flex flex-col justify-center items-center absolute bottom-0 left-[50%] translate-x-[-50%] translate-y=0 z-[-1] my-1">
          <div className="text-center text-white my-2 sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[20px]">Support kami di <Link className="text-[#ff7676] font-bold" href="https://trakteer.id/maru-maru/tip?open=true" target="_blank">Trakteer</Link></div>
          <div className="text-white font-thin sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[11px] 2xl:text-[18px] text-center">Developed by <Link className="text-[#97D3FF] font-bold" href="https://twitter.com/maruu_snk" target="_blank">Maruu</Link> & <Link className="text-[#97D3FF] font-bold" href="https://twitter.com/jows__" target="_blank">Jows</Link></div>
        </div>
          <div className="flex-col text-white bg-[#9394ab3f] p-10 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-xl sm:w-screen md:w-screen lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-1">
              <div className="flex flex-col justify-center items-center">
                <h2 className="sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl font-bold title">Cek Khodam</h2>
                { !isLoading && !isResult && <form onSubmit={(e) => checkKhodam(e)} className="flex flex-col justify-center items-center">
                  <div className="mt-5 flex flex-col justify-center items-center">
                    <div className="text-center font-light sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl">Cek khodam yang ada di dalam diri kamu</div>
                    <input className="sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl custom-input-text mt-2" name="nama" type="text" placeholder="Tulis nama kamu di sini" required />
                  </div>
                  <button className="mt-5 bg-[#5F59D0] px-8 py-2 rounded-[200px] hover:bg-[#4e4aa7] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[24px]" id="btn-check" type="submit" >CHECK</button>
                </form> }
                {isLoading && <div className="flex flex-col justify-center items-center mt-5">
                  <div className="loading w-[80px] h-[80px] relative overflow-visible"></div>
                  <div className="text-white mt-5 sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl font-extralight text-center">Kami sedang memeriksa khodam yang ada di dalam diri kamu</div>
                </div> }
                {!isLoading && isResult && <div className="flex flex-col justify-center items-center">
                  <div className="text-white text-center sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl font-extralight mt-2">Khodam yang ada di dalam diri <span className="font-bold text-[#C3F8FF]">{name}</span>:</div>
                  <div className="result-text text-center sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-7 mb-7 text-[#C3F8FF]">{khodam}</div>
                  <div className="sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] text-gray-400 text-center">Jangan lupa share ke yang lain agar mereka tahu sosok aseli yang ada di dalam diri kamu</div>
                  <button onClick={(e) => resetKhodam(e)} className="mt-3 sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-3xl bg-[#5F59D0] text-white px-4 py-1 rounded-full">Ulangi</button>
                </div> }
                {flag2 && <div className="flex flex-col mt-5 justify-center items-center">
                  <div className="sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[18px] text-white text-center">Permainan lainnya:</div>
                  <Link href="https://cupid-meter.vercel.app/" target="_blank" className="text-[#ffd3e0] px-8 py-2 font-bold sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[20px] 2xl:text-[20px]">Cupid Meter</Link>
                </div>}
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
