"use client";

import { useState } from "react";
import Image from "next/image";
import { Howl } from "howler";

const HomePage = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleClick = () => {
    setBgImage("/cat.png");

    if (!isMusicPlaying) {
      const sound = new Howl({
        src: ["/music.mp3"],
        autoplay: true,
        loop: true
      });
      sound.play();
      setIsMusicPlaying(true);
    }

    setIsBookOpen(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center transition-colors duration-500 relative"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      {!isBookOpen ? (
        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-pink-600 transition"
          onClick={handleClick}>
          Open Birthday Surprise!
        </button>
      ) : (
        <BookComponent />
      )}

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 absolute bottom-0 mb-4">
        Made by Akiza❄️
      </footer>
    </div>
  );
};

const BookComponent = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < 3) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const closeBook = () => {
    setPage(0);
  };

  return (
    <div className="relative w-[340px] h-[520px] bg-pink-500 shadow-xl rounded-md perspective">
      {page === 0 && (
        <div className="absolute inset-0 bg-pink-400 p-6 flex flex-col items-center justify-center rounded-md">
          <h2 className="text-3xl font-bold text-white">Happy Birthday🎉</h2>
          <h2 className="text-3xl font-bold text-white">Paula Archie😺</h2>
          <Image src="/cake.png" alt="Cake" width={480} height={480} quality={90} />
        </div>
      )}

      {/* First Page */}
      {page === 1 && (
        <div className="absolute inset-2 bg-white p-4 rounded-md shadow-inner">
          <h3 className="text-lg font-semibold">Selamat Ulang Tahun🎉🎉</h3>
          <p className="mt-4">
            Hai Paula, selamat atas bertambahnya umur ya, semoga dilimpahkan rezeki dan rahmat oleh
            Tuhan Yang Maha Esa.
          </p>
          <p className="mt-4">Semoga apa yang ingin kamu capai, dapat terwujudkan ya</p>
          <p className="mt-4">Dan apa yang belum tersemogakan segera tersemogakan oakwoka</p>
          <p className="mt-4">Aamiin. o(〃＾▽＾〃)o</p>
        </div>
      )}

      {/* Second Page */}
      {page === 2 && (
        <div className="absolute inset-2 bg-white p-4 rounded-md shadow-inner">
          <h3 className="text-lg font-semibold">Motivasi & Dukungan</h3>
          <p className="mt-4">
            &quot;Paula, tetaplah percaya pada dirimu sendiri! Setiap langkah yang kamu ambil, baik
            besar maupun kecil, membawa kamu lebih dekat ke impianmu. Tidak masalah seberapa sulit
            tantangannya, kamu sudah membuktikan berkali-kali bahwa kamu bisa melewatinya dengan
            senyuman dan semangat yang tak pernah padam. Dunia ini mungkin kadang tidak mudah, tapi
            ingatlah bahwa kamu tidak berjalan sendiri. Ada banyak orang yang mendukungmu, termasuk
            aku&quot;.
          </p>
        </div>
      )}

      {/* Third Page */}
      {page === 3 && (
        <div className="absolute inset-2 bg-white p-4 rounded-md shadow-inner">
          <h3 className="text-lg font-semibold">Motivasi & Dukungan</h3>
          <p className="mt-4">
            &quot;Teruslah berkarya, teruslah menginspirasi, dan tetaplah menjadi dirimu yang
            autentik dan penuh kebaikan. Jangan takut untuk bermimpi lebih tinggi, karena kamu
            memiliki potensi yang luar biasa. Teruslah berusaha, percaya pada kemampuanmu, dan
            jadikan setiap rintangan sebagai batu loncatan menuju kesuksesanmu. We believe in
            you!&quot;
          </p>
        </div>
      )}

      {/* Page Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
        {page > 0 && (
          <button className="bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded" onClick={prevPage}>
            Back
          </button>
        )}
        {page < 3 && (
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 py-1 px-3 rounded"
            onClick={nextPage}>
            Next
          </button>
        )}
        {page === 3 && (
          <button
            className="bg-red-500 text-white hover:bg-red-600 py-1 px-3 rounded"
            onClick={closeBook}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
