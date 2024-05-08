// Components
import { IoIosCodeWorking } from "react-icons/io";

// Styles
import styles from './SkillItem.module.scss';

export default function SkillItem({ skills } : { skills: string[] }) {
  return (
    <>
      <ul className={styles.skills}>
        {
          skills.map((skill, index) => {
            return (
              <li key={`skill_${index}`} className={styles.skill}>
                <IoIosCodeWorking />
                <div>{ skill }</div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}