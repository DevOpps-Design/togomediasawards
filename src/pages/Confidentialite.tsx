import React from 'react'
import { SEO } from '../components/SEO'
import { Banner } from '../components/ui/Banner'

const sections = [
  {
    title: 'Qui sommes-nous ?',
    content: [
      "L'association Togo Médias Awards (TMA), dont le siège est à Lomé (Togo), est le responsable du traitement des données à caractère personnel collectées sur le site togomediasawards.tg.",
      'Email du délégué à la protection des données : contact@togomediasawards.tg',
      'La présente politique de confidentialité vous informe de la manière dont nous collectons, utilisons, partageons et protégeons vos données personnelles dans le cadre de votre utilisation du site et de nos services.',
    ],
  },
  {
    title: 'Données collectées',
    content: [
      'Nous collectons les catégories de données suivantes :',
      '',
      'Données d’identification : Nom, prénom, adresse email, numéro de téléphone (via le formulaire de contact et de candidature).',
      "Données professionnelles : Média ou structure de rattachement, fonction, catégorie de prix choisie (via le formulaire de candidature).",
      "Fichiers uploadés : Photo professionnelle ou logo de structure, fournis volontairement par le candidat.",
      "Données de navigation : Adresse IP, type de navigateur, pages visitées, durée de session — collectées à des fins statistiques anonymisées (via Vercel Analytics et/ou des cookies techniques).",
      '',
      'Aucune donnée sensible (origine raciale ou ethnique, opinions politiques, croyances religieuses, données biométriques, santé, vie sexuelle) n’est collectée intentionnellement.',
    ],
  },
  {
    title: 'Finalités et bases juridiques du traitement',
    content: [
      'Vos données sont traitées pour les finalités suivantes :',
      '',
      '1. Gestion des candidatures aux Togo Médias Awards',
      '   Base légale : Exécution de mesures précontractuelles et intérêt légitime de l’association.',
      '   Données traitées : identité, email, média, catégorie, fichier uploadé, description.',
      '',
      '2. Réponse aux demandes via le formulaire de contact',
      '   Base légale : Consentement de l’utilisateur.',
      '   Données traitées : nom, email, objet, message.',
      '',
      "3. Informations et communications relatives à l'édition",
      "   Base légale : Intérêt légitime de l'association à promouvoir ses activités.",
      '',
      '4. Amélioration du site et analyse d’audience',
      '   Base légale : Consentement (pour les cookies non essentiels) ou intérêt légitime (statistiques anonymisées).',
    ],
  },
  {
    title: 'Destinataires des données',
    content: [
      'Les données collectées sont destinées exclusivement aux membres habilités de l’association Togo Médias Awards ainsi qu’aux membres du jury, dans le cadre strict de l’évaluation des candidatures.',
      'Elles ne font l’objet d’aucune cession, location ou échange à des tiers à des fins commerciales.',
      'Peuvent toutefois être destinataires des données, à des fins strictement techniques :',
      '- L’hébergeur du site (Vercel Inc.) dans le cadre de la maintenance et de la sécurité ;',
      '- Les prestataires de messagerie électronique pour l’acheminement des messages issus des formulaires.',
      'Ces sous-traitants sont contractuellement tenus de respecter la confidentialité et la sécurité des données, conformément à la réglementation applicable.',
    ],
  },
  {
    title: 'Durée de conservation',
    content: [
      'Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :',
      '',
      '- Candidatures : 2 ans après la date de clôture de l’édition concernée, sauf réclamation en cours.',
      '- Demandes de contact : 1 an à compter du dernier échange.',
      '- Données de navigation (logs anonymisés) : 13 mois maximum.',
      '',
      'Passé ces délais, les données sont définitivement supprimées ou anonymisées.',
    ],
  },
  {
    title: 'Vos droits',
    content: [
      'Conformément à la loi togolaise n° 2018-021 relative à la protection des données à caractère personnel et au Règlement général sur la protection des données (RGPD), vous disposez des droits suivants :',
      '',
      "1. Droit d'accès — Obtenir la confirmation que des données vous concernant sont ou non traitées et, le cas échéant, en obtenir une copie.",
      "2. Droit de rectification — Demander la correction de données inexactes ou incomplètes.",
      "3. Droit à l'effacement (droit à l'oubli) — Demander la suppression de vos données dans les limites prévues par la loi.",
      "4. Droit à la limitation du traitement — Demander le gel temporaire du traitement de vos données.",
      "5. Droit à la portabilité — Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.",
      "6. Droit d'opposition — Vous opposer au traitement de vos données pour des motifs légitimes.",
      "7. Droit de retirer votre consentement — À tout moment, sans remettre en cause la licéité du traitement antérieur.",
      '',
      'Pour exercer ces droits, adressez votre demande par email à contact@togomediasawards.tg ou par courrier postal au siège de l’association. Nous nous engageons à répondre dans un délai maximum de 30 jours.',
      'En cas de réponse insatisfaisante, vous avez le droit d’introduire une réclamation auprès de l’Autorité de protection des données personnelles du Togo (APDP) ou de la CNIL (si vous êtes en France).',
    ],
  },
  {
    title: 'Sécurité des données',
    content: [
      'Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données personnelles :',
      '',
      '- Chiffrement des échanges via protocole TLS/SSL (certificat HTTPS) ;',
      '- Accès restreint aux données aux seules personnes habilitées ;',
      '- Mots de passe forts et authentification pour les accès administrateurs ;',
      '- Infrastructure hébergée sur une plateforme certifiée SOC 2 (Vercel) ;',
      '- Procédures de sauvegarde et de reprise après sinistre.',
      '',
      'Cependant, aucun système n’est infaillible. En cas de violation de données susceptible d’engendrer un risque élevé pour vos droits et libertés, nous vous en informerons dans les meilleurs délais.',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'Le site togomediasawards.tg utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement :',
      '',
      '- Cookies de session : nécessaires à la navigation et à la sécurité du site.',
      "- Cookies d'équilibrage de charge : assurant une disponibilité optimale du site.",
      '',
      "Ces cookies ne collectent pas de données personnelles et ne nécessitent pas de consentement préalable conformément à l'article 82 de la loi Informatique et Libertés et aux lignes directrices de la CNIL.",
      'Aucun cookie publicitaire, réseau social ou analytics non anonymisé n’est déployé sans votre consentement explicite.',
      "Vous pouvez configurer votre navigateur pour gérer les cookies. Le blocage des cookies techniques peut toutefois affecter le fonctionnement du site.",
    ],
  },
  {
    title: 'Services tiers',
    content: [
      'Le site peut intégrer des contenus ou services provenant de tiers (vidéos YouTube, liens vers des réseaux sociaux, etc.). Ces services disposent de leurs propres politiques de confidentialité sur lesquelles nous n’avons aucun contrôle.',
      'Nous vous encourageons à consulter les politiques de confidentialité de ces services avant de les utiliser.',
      'Liste des services tiers susceptibles d’être utilisés :',
      '- YouTube (Google LLC) — Politique de confidentialité : policies.google.com/privacy',
      '- Facebook, Twitter, LinkedIn — pour le partage de contenu et les icônes sociales.',
    ],
  },
  {
    title: 'Transferts internationaux',
    content: [
      'Certaines données peuvent être transférées vers des pays tiers (notamment les États-Unis via l’hébergeur Vercel). Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne ou par des décisions d’adéquation, garantissant un niveau de protection équivalent à celui prévu par le RGPD.',
    ],
  },
  {
    title: 'Modification de la politique',
    content: [
      'La présente politique de confidentialité peut être mise à jour à tout moment pour tenir compte des évolutions légales, techniques ou organisationnelles. Nous vous invitons à la consulter régulièrement.',
      'Date de dernière mise à jour : Juin 2026.',
    ],
  },
]

export const Confidentialite: React.FC = () => (
  <>
    <SEO title="Politique de confidentialité" description="Politique de confidentialité et protection des données personnelles des Togo Médias Awards 2026." />
    <Banner title="Confidentialité" highlight="& Protection" />

    <div className="pt-16 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-text-muted leading-relaxed mb-12">
          La protection de vos données personnelles est une priorité pour l’association Togo Médias Awards. La présente politique vous explique quelles données nous collectons, pourquoi nous les traitons et quels sont vos droits.
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-sm font-bold text-text-main mb-3 uppercase tracking-wider">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.content.map((line, j) => {
                  if (line === '') return <br key={j} />
                  const isListItem = line.startsWith('-') || line.match(/^\d+\./)
                  return (
                    <p key={j} className={`text-sm leading-relaxed ${isListItem ? 'pl-5 text-text-muted' : 'text-text-muted'}`}>
                      {line}
                    </p>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)
