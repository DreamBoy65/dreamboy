import axios from "axios";
let username = "DreamBoy65";
let token = "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";

export default async function handler(req, res) {
  let data = await fetch("user");
  let repos = await fetch("users/DreamBoy65/repos");
  let stars = repos.map((c) => c.stargazers_count).reduce((a, b) => a + b, 0);
  let issues = repos.map((c) => c.open_issues).reduce((a, b) => a + b, 0);
  let commitsCount = 0;
 /*
 for (const r of repos) {
    let cc = await fetch(`repos/DreamBoy65/${r.name}/commits`);
    commitsCount += cc.length;
  }
  */

  res.status(200).json({ data, repos, issues, commitsCount, stars });
}

async function fetch(path) {
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
