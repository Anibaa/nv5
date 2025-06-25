// app/page.js
import Formulaire from './components/form';
import Hero from './components/hero';
import Projects from './components/projects';
import SkillList from './components/skill';

export default function Home() {

  return (
    <main>
      <Hero />
      <Projects/>
      <SkillList />
      <Formulaire/>
    </main>
  );
}
