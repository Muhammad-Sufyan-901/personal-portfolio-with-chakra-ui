import type { Profile } from "@/types";

export const profileData: Profile = {
  name: "Muhammad Sufyan",
  region: "Indonesia",
  CV: "/assets/pdf/Muhammad Sufyan CV.pdf",
  divisions: ["Frontend Developer", "Backend Developer", "Mobile Developer", "Software Tester"],
  pictures: ["/assets/images/home-profile.webp", "/assets/images/about-profile.webp"],
  descriptions: [
    "I am creating stunning software for your business, Intermediate experienced in web design and development.",
    "Hello everyone! I am Muhammad Sufyan, a frontend mobile and website developer. I am a intermediate experienced and I hope with this I can always learning something new to be able to invent digital applications that can help many people in the future. Could work independently or in a team.",
  ],
  experiences: [
    {
      number: 3,
      title: "Years Of Experience",
    },
    {
      number: 7,
      title: "Framework & Tech Stack Used",
    },
    {
      number: 10,
      title: "Successed Projects",
    },
  ],
};
