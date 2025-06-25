
import { useState, useEffect } from 'react';
import { Project } from '../models/project';

export default async function Projects() {
  const data = await fetch('http://localhost:3000/data/projects.json')
  const projects: Project[] = await data.json()
 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Liste des Projets: Server Side</h1>
      <p>Plus Rapide si il y'a pas interaction avec l'utilisateur</p>
      <ul className="space-y-4">
        {projects.map((proj) => (
          <li key={proj.id} className="p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p>{proj.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
