export type TimelineItem = {
  id: string
  name: string
  value: string
  date: string
  href?: string | null
}

export const timeline: TimelineItem[] = [
  {
    id: "65daf76da26313b51aec19ec",
    name: "Package released",
    value:
      "The postcss-obfuscate-custom-properties package is now available for the first time!",
    date: "2023-12-09T15:00:00.000Z",
    href: "https://github.com/minagishl/postcss-obfuscate-custom-properties",
  },
  {
    id: "65ef2b34ec3f0f462bebb3f3",
    name: "My Birthday",
    value:
      "Today I turned 15 years old! Thank you to everyone who helped me celebrate!",
    date: "2023-12-14T17:00:00.000Z",
    href: "",
  },
  {
    id: "65db006ba26313b51aee0318",
    name: "Joined Gisoukurabu",
    value: "One post made me decide to join Gisoukurabu to participate in OSS!",
    date: "2024-01-01T15:30:00.000Z",
    href: "https://github.com/tech-creative-club/",
  },
  {
    id: "65daf791a26313b51aec21ea",
    name: "Package released",
    value:
      "The postcss-classname-obfuscator package is now available for the first time!",
    date: "2024-01-19T15:00:00.000Z",
    href: "https://github.com/minagishl/postcss-classname-obfuscator",
  },
  {
    id: "65daf7b3a26313b51aec2b4c",
    name: "Publication of my portfolio",
    value:
      "For the first time in my life, I created a portfolio and published it on the Internet.",
    date: "2024-02-09T15:00:00.000Z",
    href: "https://minagishl.com",
  },
  {
    id: "65daf74aa26313b51aec04f2",
    name: "Tokyo OSS Party 2024",
    value: "Gisoukurabu Receives Award for Community Problem Solving",
    date: "2024-02-25T07:00:00.000Z",
    href: "",
  },
  {
    id: "65f714ffa08457373a8d05ae",
    name: "Participated in the Open Data hackathon!",
    value:
      "I attended and gave a presentation, but I don't even remember what I said! I'm sure I was too nervous to answer correctly.",
    date: "2024-03-15T20:00:00.000Z",
    href: "https://odhackathon.metro.tokyo.lg.jp/",
  },
  {
    id: "66a7d511413128195f55acf9",
    name: "Introducing to the Developer",
    value: "Hono developer praised our article!",
    date: "2024-07-26T17:30:00.000Z",
    href: "https://x.com/yusukebe/status/1817165793169432683",
  },
  {
    id: "66a7d4d4413128195f55a1f9",
    name: "Featured on Zenn's Trends",
    value:
      "An article about creating an avatar-generating application with Hono + Satori + CLoudflare ranked #8 in Trends!",
    date: "2024-07-27T18:00:00.000Z",
    href: "https://zenn.dev/minagishl/articles/5fd539d5562c86",
  },
  {
    id: "6807d8d9da65f98c48dd62cd",
    name: "ZEN Study Moving Web page Contest 2024 Summer",
    value: "Award of Excellence",
    date: "2024-10-31T18:00:00.000Z",
    href: "https://progedu.github.io/webappcontest/2024/summer/result/index.html",
  },
  {
    id: "6807d86eda65f98c48dd5b4d",
    name: "ZEN Study Moving Web App Contest 2024 Winter",
    value: "Special Viewer's Award.",
    date: "2025-03-04T08:00:00.000Z",
    href: "https://progedu.github.io/webappcontest/2024/winter/entry/result.html",
  },
]
