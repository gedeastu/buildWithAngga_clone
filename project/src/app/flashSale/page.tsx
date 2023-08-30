"use client";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
export default function FlashSale() {
  return (
    <>
      <div>
        <h1 className="text-black">Flash Sale</h1>
        <Link href={"/flashSale/data"}>Data</Link>
      </div>
    </>
  );
}
