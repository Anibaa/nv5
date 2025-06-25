// app/project/[id]/page.js

export default function ProjectDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800">Détails du projet {params.id}</h1>
      <p className="mt-2 text-gray-600">Voici les détails du projet numéro {params.id}.</p>
    </div>
  );
}
