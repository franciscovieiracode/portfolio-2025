import SkillList from "../SkillList/SkillList";
import styles from "./SkillsStyles.module.css";
import checkImgDark from "../../assets/darkCheck.png";
import checkImgLight from "../../assets/darkCheck2.png";

import { useTheme } from "../ThemeContext/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();

  const checkImg = theme === "light" ? checkImgDark : checkImgLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkImg} skill="HTML" />
        <SkillList src={checkImg} skill="CSS" />
        <SkillList src={checkImg} skill="JavaScript" />
        <SkillList src={checkImg} skill="React" />
        <SkillList src={checkImg} skill="Angular" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkImg} skill="Spring" />
        <SkillList src={checkImg} skill=".Net" />
        <SkillList src={checkImg} skill="Node" />
        <SkillList src={checkImg} skill="Express" />
        <SkillList src={checkImg} skill="SQL" />
        <SkillList src={checkImg} skill="MongoDB" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkImg} skill="Git" />
        <SkillList src={checkImg} skill="JUnit" />
        <SkillList src={checkImg} skill="Bootstrap" />
        <SkillList src={checkImg} skill="Tailwind CSS" />
      </div>
    </section>
  );
}
