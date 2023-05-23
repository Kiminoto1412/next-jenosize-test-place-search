"use client"; // This is a client component 👈🏽

import { getPlaceSearchByKeyword } from "@/api/placeSearchApi";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppContext } from "../app/context/appContext";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const { setFetchData } = useAppContext();
  const [search, setSearch] = useState("");

  const fetchPlaceSearchByKeyword = async () => {
    let res = await getPlaceSearchByKeyword(search);
    // console.log(res.data.results);
    setFetchData(res.data.results);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async (e) => {
    fetchPlaceSearchByKeyword(e.target.value);
    router.push("/restaurant");
  };
  return (
    <nav>
      <div className="sm:flex justify-between items-center p-5 border-b-[1px] ">
        <Link href="/" className="flex  items-center">
          <Image src="/jenosizeLogo.png" width={120} height={100} alt="logo" />
          <h1 className="ml-5 font-bold">Jenosize Web</h1>
        </Link>
        {/* search */}
        <div className="flex gap-5">
          <div className="relative">
            <div className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2">
              <FiSearch />
            </div>
            <input
              name="search"
              className="w-full pl-7 pr-5 md:w-64 h-9  border-gray-500 rounded sm:text-sm focus:border-blue-500 focus:ring-0 md:focus:w-96 duration-300 border-2 focus:outline-none"
              placeholder="Search"
              type="search"
              onChange={handleSearchChange}
              value={search}
              autoComplete="off"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="flex justify-center w-[38px] h-[38px] items-center py-1 px-6  border border-transparent shadow-sm text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
              onClick={handleSearchClick}
            >
              <div className="text-xl text-white">
                <AiOutlineSearch />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
