import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiOracle,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <SiNextdotjs size={40} />, name: "Next.js" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
  { icon: <SiTailwindcss size={40} />, name: "TailwindCSS" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
  { icon: <SiMysql size={40} />, name: "MySQL" },
  { icon: <SiOracle size={40} />, name: "Oracle Cloud" },
  { icon: <FaDocker size={40} />, name: "Docker" },
  { icon: <FaWordpress size={40} />, name: "WordPress" },
  { icon: <FaGitAlt size={40} />, name: "Git" },
];

export default function IconSkill() {
  return (
    <div className="skills-carousel">
      <div className="skills-track">
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="skill-cell">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
