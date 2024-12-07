import teamImage1 from "@/assets/img/team/team_1.png";
import teamImage2 from "@/assets/img/team/team_2.png";
import teamImage3 from "@/assets/img/team/team_3.png";

const getTeamMembers = () => {
  const team = [
    {
      id: 1,
      name: "Rick Jefferson",
      img: teamImage1,
      desig: "Founder & CEO",
      duration: "1500",
    },
    {
      id: 2,
      name: "Angel Lewis-Jefferson",
      img: teamImage2,
      desig: "Co-Founder & Majority Owner",
      duration: "1700",
    },
    {
      id: 3,
      name: "Vincent Greene",
      img: teamImage3,
      desig: "Director of Client Relations",
      duration: "1900",
    },
    {
      id: 4,
      name: "Rick Jefferson",
      img: teamImage1,
      desig: "Founder & CEO",
      duration: "2100",
    },
    {
      id: 5,
      name: "Angel Lewis-Jefferson",
      img: teamImage2,
      desig: "Co-Founder & Majority Owner",
      duration: "2300",
    },
    {
      id: 6,
      name: "Vincent Greene",
      img: teamImage3,
      desig: "Director of Client Relations",
      duration: "2500",
    },
    {
      id: 7,
      name: "Rick Jefferson",
      img: teamImage1,
      desig: "Founder & CEO",
      duration: "2700",
    },
    {
      id: 8,
      name: "Angel Lewis-Jefferson",
      img: teamImage2,
      desig: "Co-Founder & Majority Owner",
      duration: "2900",
    },
    {
      id: 9,
      name: "Vincent Greene",
      img: teamImage3,
      desig: "Director of Client Relations",
      duration: "3100",
    },
  ];
  return team;
};

export default getTeamMembers;
