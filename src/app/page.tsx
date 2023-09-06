import Image from "next/image";
import bg from "../assets/bg.jpg";
import Dialog from "@/components/Dialog";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src={bg}
          alt="bg"
          quality={100}
          fill
          sizes="100vw"
          className="absolute top-0 left-0 object-cover "
        />
        <Dialog />
      </div>
    </div>
  );
}
