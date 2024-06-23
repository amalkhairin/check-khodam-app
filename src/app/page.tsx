"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function Home() {

  const router = useRouter();
  const inputRef = useRef(null);

  const [khodam, setKhodam] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [flag2, setFlag2] = useState(true);

  const animals = ["Kucing", "Tikus", "Kadal", "Anomali", "Kuda Nil", "Bunglon", "Siput", "Koala", "Kodok", "Monyet", "Anjing", "Arwah", "Harimau", "Kambing", "Berang-berang", "Kuda", "Komodo", "Gajah", "Cicak", "Ular", "Anomali", "Kura-kura", "Lele", "Laba-laba", "Singa", "Zebra", "Bebek", "Ayam", "Buaya", "Gorila", "Semut", "Rubah", "Naga", "Naga", "Ikan", "Ubu-ubur", "Cacing", "Semut", "Udang", "Musang", "Monyet", "Kecoak", "Ulat Bulu", "Rubah", "Kupu-kupu", "Laba-laba", "Biawak", "Kurama", "Anomali", "Tikus", "Raja", "Raja", "Lipan", "Jangkrik", "Lipan", "Ulat Bulu", "Kucing", "Panda", "Anomali", "Sepuh"];
  const behaviours = ["Jawa", "Depresi", "Mekanik", "Insom", "Skizo", "Klepto", "Bunting", "Sigma", "Cupu", "Raksasa", "Stress", "Berkaki Seribu", "Skizo", "Sad boy", "Kayang", "Metal", "Mewing", "Gyatt", "Idol", "Yapper", "Skizo", "Second Choice :)", "Ambis", "Sigma", "Dribble", "Jawa", "Kayang", "Ngesot", "Sunda", "Panuan", "Kalimantan", "Kutub", "Sumatera", "Idol", "Sunda", "Sumatera", "Yapper", "Ngesot", "Ambis", "Kayang", "Pemarah", "Kocak", "Second Choice :)", "Push Up", "Gila", "Cupu", "Silver", "Emas", "Perak", "Cilacap", "Kocak", "Stress"];

  const things = ["Speaker JBL", "Toa Masjid", "Lemari 2 Pintu", "Kulkas", "Ice Cream", "Taplak Meja", "Pecel Lele", "Charger Iphone", "Airpods", "Kalkulator", "Sendal Jepit", "Undur-undur Maju", "Bagas Dribble", "Remote AC", "Sendal Jepit", "Sapu Lidi", "Gagang Pintu", "Tutup Toples", "Rice Cooker", "Gerobak Ketoprak", "Ban Motor", "Bakwan Jagung", "Rice Cooker", "Nugget Rebus", "Asep Kulkas", "Bintang Skibidi", "Helikopter", "Laba-laba Sunda", "Raja Beruang", "Nastar", "Ice Cream", "Seblak Ceker", "Macan Cisewu", "Zaki Indomie", "Singkong Rebus", "Farhan Kebab", "Rizal Perkedel", "Joko Kopling", "Botol Yakult", "Reza Wangsaf", "Sigit Rendang", "Biawak Alaska", "Budi Martabak", "Nurdin Basket", "Edgar Burger", "Aspal Tol Cipularang", "Tuyul Mohawk", "Aldi Taher", "Cocomelon", "Maaf yang ini khodamnya kabur", "Orang Normal 😀", "Kereta Thomas", "Botol Yakult", "Ice Cream", "Raja Khodam 👑", "Kura-kura Ninja", "Batagor"]

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
    // const input = document.getElementById("inputnama");
    // if (input && input instanceof HTMLInputElement) {
    setName(e.target.inputn.value);
    // }
    setIsLoading(true);
    setFlag2(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsResult(true);
      setFlag2(true);
      setKhodam(randomKhodam);
    }, 5000);
  }

  const resetKhodam = (e: any) => {
    // e.preventDefault();
    router.refresh();
    // setKhodam("");
    // setFlag2(true);
    // setIsResult(false);
    // setName("");
  }

  return (
    <main className="h-screen w-full m-0 overflow-hidden">
      <div className="w-auto h-full custom-bg m-0 overflow-hidden">
        <div className="w-auto h-screen flex flex-col justify-center items-center relative z-10 m-0 overflow-hidden">
          <div className="w-full h-screen flex flex-col justify-center items-center">
            {/* <div className="flex flex-col justify-center mb-4 px-5 py-2 rounded-lg bg-[#dcad6746] items-center text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[20px]">
              <div className=" text-white text-center">Mulai 22 Juni 2024, Website check khodam akan dialihkan ke</div>
              <div><Link className="text-[#d9f3ff] underline font-bold" href="https://check-your-khodam-new.netlify.app">https://check-your-khodam-new.netlify.app</Link></div>
            </div> */}
            <div className="flex-col text-white bg-[#9394ab3f] p-10 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-xl sm:w-screen md:w-screen lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-1">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl font-bold title">Cek Khodam</h2>
                {!isLoading && !isResult && <form onSubmit={(e) => checkKhodam(e)} className="flex flex-col justify-center items-center">
                  <div className="mt-5 flex flex-col justify-center items-center">
                    <div className="text-center font-light text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl">Cek khodam yang ada di dalam diri kamu</div>
                    <input id="inputnama" name="inputn" className="sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl custom-input-text mt-2" placeholder="Tulis nama kamu di sini" required />
                  </div>
                  <button className="mt-5 bg-[#5F59D0] px-8 py-2 rounded-[200px] hover:bg-[#4e4aa7] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[24px]" id="btn-check" type="submit" >CHECK</button>
                </form>}
                {isLoading && <div className="flex flex-col justify-center items-center mt-5">
                  <div className="loading w-[80px] h-[80px] relative overflow-visible"></div>
                  <div className="text-white mt-5 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl font-extralight text-center">Kami sedang memeriksa khodam yang ada di dalam diri kamu</div>
                </div>}
                {!isLoading && isResult && <div className="flex flex-col justify-center items-center">
                  <div className="text-white text-center text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl font-extralight mt-2">Khodam yang ada di dalam diri <span className="font-bold text-[#C3F8FF]">{name}</span>:</div>
                  <div className="result-text text-center text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-7 mb-7 text-[#C3F8FF]">{khodam}</div>
                  <div className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] text-gray-400 text-center">Jangan lupa share ke yang lain agar mereka tahu sosok aseli yang ada di dalam diri kamu</div>
                  <a href="/" onClick={(e) => resetKhodam(e)} className="mt-3 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-3xl bg-[#5F59D0] text-white px-4 py-1 rounded-full">Ulangi</a>
                </div>}
                {flag2 && <div className="flex flex-col mt-5 justify-center items-center">
                  <div className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[18px] text-white text-center">Permainan lainnya:</div>
                  <Link href="https://cupid-meter.vercel.app/" target="_blank" className="text-[#ffd3e0] px-8 py-2 font-bold text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[20px] 2xl:text-[20px]">Cupid Meter</Link>
                </div>}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-1">
            <div className="text-center text-white my-2 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[20px]">Support kami di <Link className="text-[#ff7676] font-bold" href="https://trakteer.id/maru-maru/tip?open=true" target="_blank">Trakteer Maru</Link> & <Link className="text-[#ff7676] font-bold" href="https://trakteer.id/jows/tip?open=true" target="_blank">Trakteer Jows</Link></div>
            <div className="text-white font-thin text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[11px] 2xl:text-[18px] text-center">Developed by <Link className="text-[#97D3FF] font-bold" href="https://twitter.com/maruu_snk" target="_blank">Maruu</Link> & <Link className="text-[#97D3FF] font-bold" href="https://twitter.com/jows__" target="_blank">Jows</Link></div>
          </div>
        </div>
      </div>
    </main>
  );
}
