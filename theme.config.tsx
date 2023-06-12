import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const logo = (
  <span>Química Tecnológica e Ambiental</span>
)

const config: DocsThemeConfig = {
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  search: {
    placeholder: "Pesquise aqui"
  },
  footer: {
    text: <span>© {new Date().getFullYear()} Com ❤️ por grupo 8</span>,
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: 'light'
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Projeto 4 - Química Tecnológica e Ambiental"
        />
        <meta
          name="og:description"
          content="Projeto 4 - Química Tecnológica e Ambiental"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="p4-qta.andrefb.tech" />
        <meta name="twitter:url" content="https://p4-qta.andrefb.tech" />
        <meta
          name="og:title"
          content={title && title}
        />
        <meta name="apple-mobile-web-app-title" content="Projeto 4 - QTA" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
}

export default config;