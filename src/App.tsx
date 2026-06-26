import { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Edition2026 = lazy(() => import('./pages/Edition2026').then(m => ({ default: m.Edition2026 })))
const Categories = lazy(() => import('./pages/Categories').then(m => ({ default: m.Categories })))
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })))
const BlogDetail = lazy(() => import('./pages/BlogDetail').then(m => ({ default: m.BlogDetail })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales').then(m => ({ default: m.MentionsLegales })))
const Confidentialite = lazy(() => import('./pages/Confidentialite').then(m => ({ default: m.Confidentialite })))

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/edition-2026" element={<Edition2026 />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}