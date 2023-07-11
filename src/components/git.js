import axios from "axios";
let username = "DreamBoy65";
let token = "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";

export default async function Git() {
  const user = await getUser()

  let str = `${user.data.login}'s Github Stats`;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full pl-[20px] text-[#9745f5] font-bold">{str}</div>
      <div className="w-full flex flex-row">
        <div className="mt-[5px] ml-[22px] w-[40%] flex flex-col">
          <div className="font-bold text-[10pt] flex flex-row items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="star.png" />
            <span>Stars: </span>
          </div>
          <div className="font-bold text-[10pt] flex flex-row items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="lock-open.png" />
            <span>Public Repos: </span>
          </div>
          <div className="font-bold text-[10pt] flex flex-row items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="lock.png" />
            <span>Private Repos: </span>
          </div>
          <div className="font-bold text-[10pt] flex flex-row items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="bug.png" />
            <span>Issues: </span>
          </div>
          <div className="font-bold text-[10pt] flex flex-row items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="user.png" />
            <span>Followers: </span>
          </div>
        </div>

        <div className="mt-[5.5px] w-[20%] flex flex-col">
          <span className="font-bold text-[10pt]">{user.stars}</span>
          <span className="font-bold text-[10pt]">
            {user.data.public_repos}
          </span>
          <span className="font-bold text-[10pt]">
            {user.data.total_private_repos}
          </span>
          <span className="font-bold text-[10pt]">{user.issues}</span>
          <span className="font-bold text-[10pt]">{user.data.followers}</span>
        </div>

        <div className="w-[40%] flex justify-center items-center">
          <img
            className="rounded-full w-[60px] h-[60px] ring-1 ring-offset-8 ring-offset-black ring-[#9745f5]"
            src={user.data.avatar_url}
          />
        </div>
      </div>
    </div>
  );
}

async function getUser() {
  let data = await Fetch("user");
  let repos = await Fetch("users/DreamBoy65/repos");
  let stars = repos.map((c) => c.stargazers_count).reduce((a, b) => a + b, 0);
  let issues = repos.map((c) => c.open_issues).reduce((a, b) => a + b, 0);
  let commitsCount = 0;
  /*
 for (const r of repos) {
    let cc = await fetch(`repos/DreamBoy65/${r.name}/commits`);
    commitsCount += cc.length;
  }
  */

  return { data, repos, issues, commitsCount, stars };
}

async function Fetch(path) {
  return await axios
    .get("https://api.github.com/" + path, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((data) => data.data)
    .catch((e) => null);
}
