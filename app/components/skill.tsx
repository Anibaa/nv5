'use client';
// sta3malna client khater fama interaction bl filter 
import { useState, useEffect } from 'react';
import { skills } from '../models/skills';

export default function SkillList() {
  const [skills, setSkills] = useState<skills[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/data/skills.json')
      .then((res) => res.json())
      .then((data: skills[]) => setSkills(data));
  }, []);

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Skills: Client Side</h1>
         {/* bch nlawej w ttbadel bl e */}
      <input
        type="text"
        placeholder="Rechercher une compétence..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
         {/* if else  */}
      {filteredSkills.length === 0 ? (
        <p className="text-gray-500">Aucune compétence trouvée.</p>
      ) : (
        <ul className="space-y-3">
          {filteredSkills.map(skill => (
            <li key={skill.id} className="p-3 bg-gray-100 rounded shadow">
              <strong className="text-lg">{skill.name}</strong> - <span>{skill.level}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
