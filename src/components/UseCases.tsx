'use client'

export default function UseCases() {
  const useCases = [
    {
      icon: '💼',
      title: 'Freelances & Consultants',
      description: 'Montrez votre expertise, attirez des clients qualifiés, développez votre personal branding.'
    },
    {
      icon: '🎓',
      title: 'Coachs & Formateurs',
      description: 'Présentez vos offres, partagez vos contenus, développez votre communauté en ligne.'
    },
    {
      icon: '🏢',
      title: 'PME & Artisans',
      description: 'Gagnez en crédibilité, générez des leads, digitalisez votre présence professionnelle.'
    },
    {
      icon: '🚀',
      title: 'Startups & Créateurs',
      description: 'Lancez-vous rapidement, testez votre marché, itérez sans perdre de temps.'
    }
  ]

  return (
    <section id="usecases" className="ws-section">
      <div className="ws-container">
        <div className="ws-section-header">
          <div className="ws-section-badge">
            🎯 Pour qui ?
          </div>
          <h2 className="ws-section-title">
            Conçu pour les professionnels exigeants
          </h2>
          <p className="ws-section-subtitle">
            Que vous soyez indépendant, dirigeant de PME ou créateur,<br />
            votre site doit refléter votre niveau d'exigence.
          </p>
        </div>

        <div className="ws-grid-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="ws-card">
              <div className="ws-card-icon">
                {useCase.icon}
              </div>
              <h3 className="ws-card-title">{useCase.title}</h3>
              <p className="ws-card-text">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
