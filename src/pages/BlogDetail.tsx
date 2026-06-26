import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Button } from '../components/ui/Button'
import { getPostById, getRelatedPosts } from '../lib/blog-data'
import { BlogBody } from '../components/BlogBody'
import type { SanityPost } from '../types'
import type { PortableTextBlock } from '@portabletext/react'

function RelatedCard({ post, onClick }: { post: SanityPost; onClick: () => void }) {
  return (
    <article onClick={onClick} className="group cursor-pointer">
      {post.image && (
        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-bg-alt mb-3">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
      )}
      <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest block mb-1.5">{post.category}</span>
      <h3 className="text-sm font-bold text-text-main leading-snug group-hover:text-brand-primary transition-colors duration-200 line-clamp-2">{post.title}</h3>
    </article>
  )
}

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [post, setPost] = useState<SanityPost | null | 'loading'>('loading')
  const [related, setRelated] = useState<SanityPost[]>([])

  useEffect(() => {
    if (!id) return
    getPostById(id).then(p => {
      setPost(p ?? null)
      if (p) {
        getRelatedPosts(p.categorySlug, p._id, 3).then(setRelated)
      }
    })
  }, [id])

  if (post === 'loading') {
    return (
      <div className="pt-36 pb-28 px-6 text-center">
        <div className="w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="pt-36 pb-28 px-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Article introuvable</h1>
        <p className="text-text-muted mb-6">Cet article n'existe pas ou a été retiré.</p>
        <Button to="/blog" variant="primary">Retour au blog</Button>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt ?? ''}
      />

      <article className="pt-36 pb-28 px-6">
        <div className="max-w-3xl mx-auto">

          {/* ── Back ── */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-brand-primary transition-colors duration-200 mb-8 group"
          >
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Retour au blog
          </button>

          {/* ── Meta ── */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-text-dim mb-4">
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-text-dim/40" />
            <span>{post.readTime}</span>
            {post.author && (
              <>
                <span className="w-1 h-1 rounded-full bg-text-dim/40" />
                <span>par {post.author}</span>
              </>
            )}
          </div>

          {/* ── Title ── */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-text-main mb-8">
            {post.title}
          </h1>

          {/* ── Image ── */}
          {post.image && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-bg-alt mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* ── Content ── */}
          {post.body && post.body.length > 0 ? (
            <BlogBody blocks={post.body as PortableTextBlock[]} />
          ) : (
            <div className="max-w-none">
              <p className="text-text-main leading-[1.8] mb-6 text-base md:text-lg">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* ── CTA ── */}
          <div className="mt-14 pt-10 border-t border-border-subtle">
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 border border-border-subtle rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-xl font-bold mb-2">Vous aussi, participez aux T.M.A 2026</h2>
              <p className="text-text-muted text-sm mb-5 max-w-md mx-auto">
                Candidatez dans l'une des 12 catégories et soumettez votre production au jury indépendant.
              </p>
              <Button to="/categories" variant="primary">Candidater maintenant</Button>
            </div>
          </div>

          {/* ── Related articles ── */}
          {related.length > 0 && (
            <div className="mt-14 pt-10 border-t border-border-subtle">
              <h2 className="text-lg font-bold mb-6">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(p => (
                  <RelatedCard key={p._id} post={p} onClick={() => { window.scrollTo(0, 0); navigate(`/blog/${p._id}`) }} />
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </>
  )
}
