import Image from "next/image";
import profileImage from "../../../public/images/griteach_logo_circle.png";

export default function HeroPage() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src={profileImage}
        alt={"logo"}
        width={250}
        height={250}
        className="mt-8"
      />
      <h1 className="mt-2 font-bold text-3xl">{`Hi, I'm griteach`}</h1>
      <h2 className="font-semibold text-lg">{`Full-stack Engeenier`}</h2>
      <p>{`초보 개발자의 성장노트`}</p>
    </section>
  );
}
