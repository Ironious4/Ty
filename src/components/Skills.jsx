import React from "react";

const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Python", level: 84 },
    { name: "Flask", level: 80 },
    { name: "SQL", level: 78 },
];

function Skills() {
    return (
        <div className="bg-black text-white py-20" id="skills">
            <h3 className="text-4xl font-bold text-center mb-12 text-blue-500">My Skills</h3>
            <div className="flex flex-wrap justify-center">
                {skills.map((skill) => (
                    <div key={skill.name} className="relative m-8">
                        <div className="w-60 h-60 rounded-full border-4 border-gray-300 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300" style={{ background: `conic-gradient(from 0deg, rgba(0, 0, 255, 0.5) ${skill.level * 3.6}deg, rgba(255, 255, 255, 0.5) ${skill.level * 3.6}deg)` }}>
                            <div className="absolute text-center">
                                <div className="text-2xl font-bold">{skill.level}%</div>
                                <div>{skill.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
