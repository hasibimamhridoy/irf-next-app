import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-lg"
      ></Image>
      <span className="font-bold text-xl text-gray-800 hidden sm:block">
        IRF
      </span>
    </Link>
  );
};

export default Logo;
