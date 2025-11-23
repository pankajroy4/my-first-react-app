import { useState } from "react";

export function Skills() {
  const [profile, setProfile] = useState({ name: "", skills: [] });
  const [skill, setSkill] = useState("")

  function handleNameChange(e) {
    setProfile(prev => ({
      ...prev,
      name: e.target.value
    }
    ))
  }

  function handleSkillChange(e) {
    setSkill(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (skill.trim() === "") return;

    setProfile(prev => {
      if (prev.skills.includes(skill.toLowerCase())) {
        return prev;
      }
      return {
        ...prev,
        skills: [...prev.skills, skill.trim()]
      };
    });

    setSkill("");
  }

  function handleDelete(s) {
    let allSkills = profile.skills.filter(sk => sk !== s);

    setProfile(prev => ({
      ...prev,
      skills: allSkills
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleNameChange} value={profile.name} />
        <input name="skill" placeholder="Enter skill" onChange={handleSkillChange} value={skill} />
        <button type="submit">Add Skill</button>
      </form>

      <p>Name: {profile.name}</p>
      {
        profile.skills.length > 0 &&
        <div>
          <h3>Your Skills: </h3>
          {profile.skills.map(s => (
            <span key={s} className="badge bg-primary me-2 mx-2">
              {s}
              <button
                type="button"
                className="btn-close btn-close-white ms-2"
                onClick={() => handleDelete(s)}
                aria-label="Remove"
                style={{ fontSize: "0.6rem" }}
              ></button>
            </span>
          ))}
        </div>
      }
    </>
  );
}