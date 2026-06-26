import React from 'react'
import { SEO } from '../components/SEO'
import { Banner } from '../components/ui/Banner'

const sections = [
  {
    title: 'Éditeur du site',
    content: [
      "Le site togomediasawards.tg est édité par l'association Togo Médias Awards (TMA), régie par la loi togolaise relative aux associations.",
      'Raison sociale : Association Togo Médias Awards',
      'Siège social : Lomé, Quartier Administratif, République du Togo',
      'Téléphone : +228 90 00 00 00',
      'Email : contact@togomediasawards.tg',
      "Numéro d'enregistrement : [À insérer — Récépissé de déclaration]",
      'Objet social : Promouvoir l’excellence journalistique et l’innovation dans le secteur des médias au Togo.',
    ],
  },
  {
    title: 'Directeur de la publication',
    content: [
      'Le Directeur de la publication est le Président de l’association Togo Médias Awards, désigné statutairement par l’assemblée générale de l’association.',
      'Toute demande relative à la direction de la publication peut être adressée par voie postale ou électronique à l’adresse mentionnée ci-dessus.',
    ],
  },
  {
    title: 'Hébergement',
    content: [
      'Le site est hébergé par Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.',
      'Solutions techniques : Vercel Platform (Edge Network) — infrastructure cloud scalable, certifiée SOC 2.',
      'En cas de dysfonctionnement technique, veuillez contacter notre support à contact@togomediasawards.tg.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    content: [
      'L’ensemble du contenu du site togomediasawards.tg (textes, images, vidéos, logos, icônes, charte graphique, marques) est protégé par le droit d’auteur et le droit des marques, conformément au Code togolais de la propriété intellectuelle et aux conventions internationales (OMPI, Accord de Berne).',
      "Toute reproduction, représentation, modification, distribution ou exploitation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans l'autorisation expresse et écrite de l'association Togo Médias Awards, est strictement interdite et pourra donner lieu à des poursuites judiciaires.",
      'Les marques, noms commerciaux, logos et signes distinctifs figurant sur le site sont la propriété exclusive de Togo Médias Awards ou font l’objet d’une autorisation d’utilisation. Toute utilisation non autorisée engage la responsabilité de son auteur.',
      'Sont notamment interdites : la reproduction sur support papier ou numérique, le framing, le hotlinking, l’extraction systématique de données (scraping), et toute forme de réutilisation non conforme à l’usage privé.',
    ],
  },
  {
    title: 'Responsabilité',
    content: [
      "L'association Togo Médias Awards s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, elle ne saurait garantir l'exhaustivité, l'exactitude ou l'absence de modification par un tiers (intrusion, virus).",
      "L'association décline toute responsabilité :",
      '- En cas de préjudice direct ou indirect résultant de l’utilisation du site ou de l’impossibilité d’y accéder ;',
      '- En cas d’inexactitude ou d’omission des informations fournies par les candidats via les formulaires de candidature ;',
      '- En cas de dommages causés par un virus, un cheval de Troie ou tout autre logiciel malveillant transmis via le site ;',
      '- En cas de contenus publiés par des tiers sur les espaces interactifs ou les réseaux sociaux associés ;',
      '- En cas de liens hypertextes renvoyant vers des sites tiers, sur lesquels l’association n’exerce aucun contrôle.',
      'L’utilisateur reconnaît utiliser le site sous sa seule et unique responsabilité.',
    ],
  },
  {
    title: 'Liens hypertextes',
    content: [
      'Le site peut contenir des liens hypertextes vers d’autres sites internet. Ces liens sont fournis à titre informatif. Togo Médias Awards n’exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de protection des données.',
      'Tout site public ou privé est autorisé à établir, sans autorisation préalable, un lien hypertexte vers la page d’accueil du site togomediasawards.tg, à condition que ce lien ne soit pas utilisé à des fins commerciales ou publicitaires, et que la mention « Site des Togo Médias Awards » soit clairement identifiable.',
      'Le framing ou l’insertion du site à l’intérieur de la page d’un site tiers est interdit.',
    ],
  },
  {
    title: 'Formulaires et collecte de données',
    content: [
      'Les informations recueillies via les formulaires de candidature et de contact font l’objet d’un traitement informatisé destiné à la gestion des candidatures et des demandes.',
      "Conformément à la loi togolaise n° 2018-021 relative à la protection des données à caractère personnel et au Règlement général sur la protection des données (RGPD — UE 2016/679), l'utilisateur dispose :",
      '- D’un droit d’accès, de rectification et d’effacement de ses données ;',
      '- D’un droit à la limitation et à l’opposition du traitement ;',
      '- D’un droit à la portabilité de ses données ;',
      '- Du droit de retirer son consentement à tout moment.',
      'Pour exercer ces droits, contactez-nous à : contact@togomediasawards.tg.',
      'Voir notre Politique de confidentialité pour plus de détails.',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'Le site utilise des cookies strictement nécessaires à son fonctionnement technique (session, authentification, équilibrage de charge). Ces cookies ne collectent pas de données personnelles et ne nécessitent pas de consentement préalable.',
      'Aucun cookie publicitaire, analytique ou de traçage tiers n’est déployé sans le consentement explicite de l’utilisateur.',
      "L'utilisateur peut configurer son navigateur pour refuser les cookies ou être averti lors de leur dépôt.",
    ],
  },
  {
    title: 'Droit applicable et juridiction',
    content: [
      'Les présentes mentions légales sont régies par le droit togolais. Tout litige relatif à l’utilisation du site sera soumis à la compétence exclusive des tribunaux de Lomé (Togo), sous réserve des règles de procédure applicables.',
      'La langue officielle des présentes est le français. En cas de traduction, seule la version française fait foi.',
    ],
  },
  {
    title: 'Modification des mentions',
    content: [
      "L'association Togo Médias Awards se réserve le droit de modifier les présentes mentions légales à tout moment et sans préavis. Il est recommandé aux utilisateurs de consulter régulièrement cette page.",
      'Date de dernière mise à jour : Juin 2026.',
    ],
  },
]

export const MentionsLegales: React.FC = () => (
  <>
    <SEO title="Mentions légales" description="Mentions légales du site officiel des Togo Médias Awards 2026 — Lomé, Togo." />
    <Banner title="Mentions" highlight="légales" />

    <div className="pt-16 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-text-muted leading-relaxed mb-12">
          Conformément aux dispositions de la loi togolaise et des réglementations applicables, nous mettons à disposition du public les informations relatives à l’édition et à l’exploitation du site officiel des Togo Médias Awards.
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-sm font-bold text-text-main mb-3 uppercase tracking-wider">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.content.map((line, j) => (
                  <p key={j} className={`text-sm leading-relaxed ${line.startsWith('-') ? 'pl-5 text-text-muted' : 'text-text-muted'}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)
