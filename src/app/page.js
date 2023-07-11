import Git from "@comp/git.js";

export default async function Home() {
  let { data } = await fetch(
    "https://api.lanyard.rest/v1/users/813299347819069520"
  ).then((res) => res.json());
  let avatar = `https://cdn.discordapp.com/avatars/813299347819069520/${data.discord_user.avatar}.png`;

  return (
    <main className="fixed top-0 left-0 right-0 overflow-y-scroll overflow-x-hidden h-full">
      <div className="md:h-[80px] h-[50px] w-full flex items-center gap-[5px]">
        <img className="h-[90%] w-auto rounded-full ml-[5px]" src="dr.png" />
        <div className="w-full">{data.discord_user.username}</div>
      </div>

      <div className="w-full flex flex-col mt-10 items-center">
        <div className="w-full flex justify-end mr-[15px] text-right mb-[5px]">
          <div className="w-[60%]">
            Hello im {data.discord_user.global_name}, Nice to meet yall. If you
            want to talk to me you can just DM me on discord or instagram.
          </div>
        </div>

        <div className="w-full flex justify-center mt-[10px] mb-[10px]">
          <img
            className="headimg w-[50%] h-auto rounded-full ring-1 ring-offset-8 ring-offset-black ring-[#9745f5]"
            src={avatar}
          />
        </div>

        <div className="w-full flex justify-start ml-[15px] text-left mt-[5px]">
          <div className="w-[60%]">
            Im interested in programming and stuff, i have some maintained
            projects as well, always eager to learn new things.
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center md:gap-[20px]">
        <div className="w-[390px] ring-2 ring-offset-4 ring-offset-black ring-[#9745f5] rounded-[5px] m-[5px] mt-[20px] mb-[10px] h-[130px]">
        <Git />
        </div>
        <div className="w-[390px] ring-2 ring-offset-4 ring-offset-black ring-[#9745f5] rounded-[5px] m-[5px] mt-[20px] mb-[10px] h-[130px]"></div>
      </div>
    </main>
  );
}
