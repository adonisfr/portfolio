import Image from "next/image";

export default function Skill({ logo, name }) {
  console.log("image", logo);
  return (
    <div className="flex flex-col items-center justify-center">
      {logo && (
        <div>
          <Image src={logo} alt="image" height={46} width={46} />
        </div>
      )}

      <div className="font-bold  ">
        <h1 className={`${logo ? "text-xl" : "text-2xl"}`}>{name}</h1>
      </div>
    </div>
  );
}
