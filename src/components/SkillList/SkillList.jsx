export default function SkillList({ src, skill }) {
    return (
      <span>
        <img src={src} alt="Check Item" />
        <p>{skill}</p>
      </span>
    );
  }
