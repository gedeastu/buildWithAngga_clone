import React from "react";
import Image from "next/image";
import Link from "next/link";
import MenuBar from "./menuBar";
// Fetch API:
async function getLink() {
  const res = await fetch(process.env.LINK_DAILY_API, {
    next: {
      revalidate: 0, //use 0 to OPT out of using cache
    },
  });
  return res.json();
}
export default async function Navbar() {
  //Handle Refresh Button:
  const handleRefresh = () => {
    // setTimeout(() => {
    //   location.reload();
    // }); // Set the delay in milliseconds (2 seconds in this example)
  };

  // Var useRouter:
  // const router = useRouter();

  //The state from hooks folder in toggleHook file
  const linksDaily = await getLink();
  return (
    <>
      <nav className="grid grid-cols-3 place-content-between w-full place-items-center py-8">
        <MenuBar
          DailyLink={linksDaily.map((link, index) => (
            <>
              <Link key={link.id} href={link.href}>
                <Image
                  src={link.img}
                  width={50}
                  height={50}
                  alt={link.nameLink}
                ></Image>
                <h1>{link.nameLink}</h1>
              </Link>
            </>
          ))}
          ResourcesLink={linksDaily.map((link, index) => (
            <>
              <Link key={link.id} href={link.href}>
                <Image
                  src={link.img}
                  width={50}
                  height={50}
                  alt={link.nameLink}
                ></Image>
                <h1>{link.nameLink}</h1>
              </Link>
            </>
          ))}
        />
        <Link href={`/`}>
          <Image
            src={`buildwithangga_logo.svg`}
            alt=""
            className=""
            width={60}
            height={60}
          />
        </Link>
        <div id="login" className="">
          <button className="bg-[#E5E9F2] h-10 w-32 rounded-full font-bold">
            Masuk
          </button>
        </div>
      </nav>
    </>
  );
}
