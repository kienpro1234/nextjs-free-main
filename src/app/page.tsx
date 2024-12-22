import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-3xl noto-sans-thin">Xin chào mọi người </div>
      <Image
        src={
          "https://photo2.tinhte.vn/data/attachment-files/2021/07/5557920_CV.jpg"
        }
        width={600}
        height={400}
        alt="anh"
      ></Image>
    </main>
  );
}
