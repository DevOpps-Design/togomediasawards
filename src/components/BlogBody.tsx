import { PortableText, type PortableTextBlock } from '@portabletext/react'

const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl md:text-2xl font-bold text-text-main mt-10 mb-4 leading-tight">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-lg md:text-xl font-bold text-text-main mt-8 mb-3 leading-tight">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-text-main leading-[1.8] mb-5 text-base">{children}</p>
    ),
  },
}

export function BlogBody({ blocks }: { blocks: PortableTextBlock[] }) {
  return (
    <div className="max-w-none">
      <PortableText value={blocks} components={components} />
    </div>
  )
}
