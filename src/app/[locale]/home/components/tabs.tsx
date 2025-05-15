"use client"

const tabContent = [
  {
    title: "Pour les Étudiants",
    description:
      "Découvrez nos programmes conçus spécialement pour les étudiants. Nous offrons des cours adaptés à tous les niveaux, des ateliers pratiques et des opportunités de networking pour vous aider à développer vos compétences et à préparer votre avenir professionnel.",
    features: [
      "Cours flexibles adaptés à votre emploi du temps",
      "Projets pratiques avec des entreprises partenaires",
      "Mentorat personnalisé avec des professionnels",
      "Accès à notre communauté d'étudiants",
    ],
  },
  {
    title: "Pour les Professionnels",
    description:
      "Nos programmes pour professionnels sont conçus pour vous aider à développer de nouvelles compétences, à vous reconvertir ou à vous perfectionner dans votre domaine. Avec des formats adaptés aux emplois du temps chargés et des contenus axés sur les besoins du marché.",
    features: [
      "Formation continue et certifications reconnues",
      "Cours du soir et week-end disponibles",
      "Programmes de reconversion professionnelle",
      "Réseau d'entreprises partenaires pour votre évolution de carrière",
    ],
  },
]

export function Tabs({ activeTab }: { activeTab: number }) {
  return (
    <div className="w-full">
      {/* Tab Content */}
      <div className="mt-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">{tabContent[activeTab].title}</h2>
          <p className="text-gray-700 mb-6">{tabContent[activeTab].description}</p>

          <h3 className="text-xl font-semibold mb-3">Ce que nous offrons:</h3>
          <ul className="space-y-2">
            {tabContent[activeTab].features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#0084FF] mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="sm:px-1.5 sm:py-2 xl:px-4 lg:py-3  bg-[#000D85] text-white rounded-full shadow-lg font-medium">
              {activeTab === 0 ? "S'inscrire comme étudiant" : "S'inscrire comme professionnel"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
