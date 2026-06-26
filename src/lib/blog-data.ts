import type { SanityPost, SanityCategory } from '../types'
import * as sanity from './sanity'

/* ── Static fallback ── */

const STATIC_POSTS: SanityPost[] = [
  {
    _id: '1',
    title: 'Lancement officiel de la 4ᵉ édition des Togo Médias Awards',
    slug: 'lancement-4e-edition',
    category: 'Communiqué',
    categorySlug: 'communique',
    date: '12 Juin 2026',
    readTime: '4 min',
    excerpt: "La grande nuit de l'excellence journalistique togolaise ouvre sa période de dépôt des candidatures.",
    author: 'Comité TMA',
    image: 'https://picsum.photos/seed/tma-launch/1200/600',
    publishedAt: '2026-06-12T00:00:00Z',
    featured: true,
  },
  {
    _id: '2',
    title: 'IA & Journalisme : Menace ou Opportunité pour les rédactions ?',
    slug: 'ia-journalisme-menace-opportunite',
    category: 'IA & Médias',
    categorySlug: 'ia-medias',
    date: '28 Mai 2026',
    readTime: '6 min',
    excerpt: "Comment l'IA générative transforme les rédactions togolaises. Retour sur les débats de la table ronde nationale.",
    author: 'Koffi Mensah',
    image: 'https://picsum.photos/seed/tma-ai/1200/600',
    publishedAt: '2026-05-28T00:00:00Z',
  },
  {
    _id: '3',
    title: 'Comment préparer un dossier de candidature gagnant',
    slug: 'dossier-candidature-gagnant',
    category: 'Conseils',
    categorySlug: 'conseils',
    date: '5 Mai 2026',
    readTime: '3 min',
    excerpt: "Maximisez vos chances en suivant nos conseils pratiques pour structurer votre dossier selon les critères du jury.",
    author: 'Jury TMA',
    image: 'https://picsum.photos/seed/tma-tips/1200/600',
    publishedAt: '2026-05-05T00:00:00Z',
  },
]

const STATIC_CATEGORIES: SanityCategory[] = [
  { title: 'Communiqués', slug: 'communique' },
  { title: 'IA & Médias', slug: 'ia-medias' },
  { title: 'Conseils', slug: 'conseils' },
]

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function estimateReadTime(body?: unknown[]): string {
  if (!body || !Array.isArray(body)) return '2 min'
  const text = JSON.stringify(body).replace(/<[^>]*>/g, '')
  const words = text.split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} min`
}

/* ── Public API (Sanity avec fallback statique) ── */

const USE_SANITY = typeof import.meta.env.VITE_SANITY_PROJECT_ID === 'string' && import.meta.env.VITE_SANITY_PROJECT_ID.length > 0

function enrich(post: SanityPost): SanityPost {
  if (!post.date) post.date = formatDate(post.publishedAt)
  if (!post.readTime) post.readTime = estimateReadTime(post.body)
  return post
}

export async function getPosts(): Promise<SanityPost[]> {
  if (USE_SANITY) {
    const posts = await sanity.getPosts()
    return posts.map(enrich)
  }
  return STATIC_POSTS.map(enrich)
}

export async function getFeaturedPost(): Promise<SanityPost | null> {
  if (USE_SANITY) return sanity.getFeaturedPost()
  return STATIC_POSTS.find(p => p.featured) ?? null
}

export async function getPostById(id: string): Promise<SanityPost | null> {
  if (USE_SANITY) {
    const posts = await sanity.getPosts()
    return posts.find(p => p._id === id) ?? null
  }
  return STATIC_POSTS.find(p => p._id === id) ?? null
}

export async function getRelatedPosts(categorySlug: string, excludeId: string, limit = 3): Promise<SanityPost[]> {
  if (USE_SANITY) return sanity.getRelatedPosts(categorySlug, excludeId, limit)
  return STATIC_POSTS.filter(p => p.categorySlug === categorySlug && p._id !== excludeId).slice(0, limit)
}

export async function getCategories(): Promise<SanityCategory[]> {
  if (USE_SANITY) return sanity.getCategories()
  return STATIC_CATEGORIES
}
