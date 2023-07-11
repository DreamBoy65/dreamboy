"use client";

export default async function Npm() {
  const data = await fetch("/api/npm").then((res) =>
    res.json()
  );
  
  let img = `https://npmjs.com${data.avatar}`;
  let str = `xDreamBoy's NPM stats`;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full pl-[20px] text-[#9745f5] font-bold">{str}</div>

      <div className="w-full flex flex-row h-full">
        <div className="mt-[5px] ml-[22px] w-[40%] flex flex-col">
          <div className="font-bold text-[10pt] flex flex-row items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="package.png" />
            <span>Packages: </span>
          </div>
          <div className="font-bold text-[10pt] flex flex-row items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="download.png" />
            <span>Downloads: </span>
          </div>
        </div>

        <div className="mt-[5.5px] w-[20%] flex flex-col">
          <span className="font-bold text-[10pt]">{data.packs.length}</span>
          <span className="font-bold text-[10pt]">{data.downloads}</span>
        </div>

        <div className="w-[40%] flex justify-center items-center h-full flex justify-center">
          <img
            className="rounded-full w-[60px] h-[60px] ring-1 ring-offset-8 ring-offset-black ring-[#9745f5]"
            src={img}
          />
        </div>
      </div>
    </div>
  );
}
