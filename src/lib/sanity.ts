import { createClient } from '@sanity/client'
import type { SanityPost, SanityCategory } from '../types'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production'

function getClient() {
  if (!projectId) return null
  return createClient({
    projectId,
    dataset,
    apiVersion: '2026-06-01',
    useCdn: true,
  })
}

const POST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  author,
  publishedAt,
  "category": category->title,
  "categorySlug": category->slug.current,
  "tags": tags[]->{label, "slug": slug.current},
  excerpt,
  "image": image.asset->url,
  body,
  featured
}`

export async function getPosts(): Promise<SanityPost[]> {
  const client = getClient()
  if (!client) return []
  return client.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${POST_PROJECTION}`)
}

export async function getFeaturedPost(): Promise<SanityPost | null> {
  const client = getClient()
  if (!client) return null
  const posts: SanityPost[] = await client.fetch(`*[_type == "post" && featured == true] | order(publishedAt desc) [0...1] ${POST_PROJECTION}`)
  return posts[0] ?? null
}

export async function getRelatedPosts(categorySlug: string, excludeId: string, limit = 3): Promise<SanityPost[]> {
  const client = getClient()
  if (!client) return []
  return client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug && _id != $excludeId] | order(publishedAt desc) [0...$limit] ${POST_PROJECTION}`,
    { categorySlug, excludeId, limit }
  )
}

export async function getCategories(): Promise<SanityCategory[]> {
  const client = getClient()
  if (!client) return []
  return client.fetch(`*[_type == "category"] | order(title asc) { title, "slug": slug.current, description }`)
}
