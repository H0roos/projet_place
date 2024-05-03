import React from "react"
import Link from "next/link"
import Image from "next/image"

export const Header = () => (
  <div className="justify-between flex p-4 bg-green-400 text-white">
    <Link href="/">Home</Link>
    <Link href="/">
      <Image
        src="/image_logo/c9c2ec5684a3d8a5f0a2573c521448fd.png"
        alt=""
        width={80}
        height={80}
      />
    </Link>
    <Link href="/places">Add</Link>
  </div>
)
