import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Eli Amalia",
    designation: "Chief Executive Officer",
    image: "/images/team/eli.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "George Miracle Theophylus",
    designation: "Chief Technology Officer",
    image: "/images/team/rekel.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Nabila Zwei ",
    designation: "Chief Creative Officer",
    image: "/images/team/nabila.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Salwa Naima Purnomo ",
    designation: "Chief Financial Officer",
    image: "/images/team/salwa.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Team Langkah"
            title="PEOPLE BEHIND LANGKAH!"
            paragraph="Halo sobat Langkah!, penasaran nggak sih sama tim keren dibalik aplikasi Langkah"
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
