import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { FadeSection } from '../components/ui/FadeSection'
import { getPosts, getFeaturedPost, getCategories } from '../lib/blog-data'
import type { SanityPost, SanityCategory } from '../types'

function SidebarCard({ post, onClick }: { post: SanityPost; onClick: () => void }) {
  return (
    <article onClick={onClick} className="flex gap-3 group cursor-pointer py-3 border-b border-border-subtle last:border-none">
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block mb-1">
          {post.category}
        </span>
        <h4 className="text-sm font-bold text-text-main leading-snug group-hover:text-brand-primary transition-colors duration-200 line-clamp-2">
          {post.title}
        </h4>
        <p className="text-[11px] text-text-dim mt-1">{post.date}</p>
      </div>
      {post.image && (
        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-bg-alt">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>
      )}
    </article>
  )
}

function ArticleCard({ post, onClick }: { post: SanityPost; onClick: () => void }) {
  return (
    <article onClick={onClick} className="group cursor-pointer">
      {post.image && (
        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-bg-alt mb-3">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
      )}
      <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest block mb-1.5">
        {post.category}
      </span>
      <h3 className="text-sm font-bold text-text-main leading-snug group-hover:text-brand-primary transition-colors duration-200 mb-1.5 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-2">
        {post.excerpt}
      </p>
      <p className="text-[11px] text-text-dim">{post.date}</p>
    </article>
  )
}

const PER_PAGE = 6

export const Blog: React.FC = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [featured, setFeatured] = useState<SanityPost | null>(null)
  const [allPosts, setAllPosts] = useState<SanityPost[]>([])
  const [categories, setCategories] = useState<SanityCategory[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getFeaturedPost().then(setFeatured)
    getPosts().then(setAllPosts)
    getCategories().then(setCategories)
  }, [])

  const latest = allPosts.slice(0, 5)
  const featuredId = featured?._id
  const latestIds = new Set(latest.map(p => p._id))

  const filtered = activeFilter
    ? allPosts.filter(p => p.categorySlug === activeFilter)
    : allPosts

  const gridPosts = filtered.filter(p => p._id !== featuredId && !latestIds.has(p._id))
  const visiblePosts = gridPosts.slice(0, page * PER_PAGE)

  return (
    <>
      <SEO
        title="Blog & Presse"
        description="Actualités, communiqués officiels et conseils des Togo Médias Awards 2026."
      />

      <div className="pt-36 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ── FILTER TABS ── */}
          <FadeSection delay={40}>
            <div className="flex gap-0 flex-wrap mb-10 border-b border-border-subtle">
              <button
                onClick={() => { setActiveFilter(null); setPage(1) }}
                className={`px-5 py-2.5 text-sm font-semibold transition-colors duration-200 border-b-2 -mb-px ${
                  activeFilter === null
                    ? 'border-brand-primary text-brand-primary'
                    : 'border-transparent text-text-dim hover:text-text-main'
                }`}
              >
                Tous
              </button>
              {categories.map(c => (
                <button
                  key={c.slug}
                  onClick={() => setActiveFilter(c.slug === activeFilter ? null : c.slug)}
                  className={`px-5 py-2.5 text-sm font-semibold transition-colors duration-200 border-b-2 -mb-px ${
                    activeFilter === c.slug
                      ? 'border-brand-primary text-brand-primary'
                      : 'border-transparent text-text-dim hover:text-text-main'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </FadeSection>

          {/* ── HERO + SIDEBAR ── */}
          {!activeFilter && featured && (
            <FadeSection delay={60}>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 mb-14">

                <article onClick={() => navigate(`/blog/${featured._id}`)} className="group cursor-pointer">
                  {featured.image && (
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-bg-alt mb-5">
                      <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <span className="text-[11px] font-bold text-brand-accent uppercase tracking-widest block mb-2">
                    {featured.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-text-main leading-tight group-hover:text-brand-primary transition-colors duration-200 mb-3">
                    {featured.title}
                  </h1>
                  <p className="text-text-muted leading-relaxed text-sm mb-4 max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-text-dim">
                    <span>{featured.date}</span>
                    {featured.author && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-text-dim/40" />
                        <span>par {featured.author}</span>
                      </>
                    )}
                  </div>
                </article>

                <aside>
                  <span className="text-[11px] font-bold text-text-main uppercase tracking-[0.15em] block pb-2 border-b-2 border-text-main mb-1">
                    Derniers articles
                  </span>
                  {latest.map(p => (
                    <SidebarCard key={p._id} post={p} onClick={() => navigate(`/blog/${p._id}`)} />
                  ))}
                </aside>

              </div>
            </FadeSection>
          )}

          {/* ── ARTICLES GRID ── */}
          {visiblePosts.length > 0 && (
            <FadeSection delay={80}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {visiblePosts.map(post => (
                  <ArticleCard key={post._id} post={post} onClick={() => navigate(`/blog/${post._id}`)} />
                ))}
              </div>
            </FadeSection>
          )}

          {/* ── PAGINATION ── */}
          {gridPosts.length > page * PER_PAGE && (
            <FadeSection delay={100}>
              <div className="text-center">
                <button
                  onClick={() => setPage(p => p + 1)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-subtle bg-white text-sm font-bold text-text-main hover:bg-gray-50 hover:border-brand-accent/30 transition-all duration-200"
                >
                  Voir plus d'articles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </FadeSection>
          )}

        </div>
      </div>
    </>
  )
}
