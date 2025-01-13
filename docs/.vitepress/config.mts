import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MyNotes",
  description: "Um grupo de informações",

  // adiciona imagem favicon na aba do navegador
  head: [['link', {rel: 'icon', href: '/icone-favicon-e-menu-24x24.png'}]],

  themeConfig: {
    logo: '/icone-favicon-e-menu-24x24.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Notas', link: '/content/' },
      {
        text: 'Docs',
        items: [
          { text: 'Java SE', link: 'https://docs.oracle.com/en/java/javase', target: '_black', rel: 'Java SE Docs' },
          { text: 'Spring Boot', link: 'https://spring.io', target: '_black', rel: 'Spring Boot' }
        ]
      }
    ],

    /**
     * Modificado para multiplas sidebars baseado em grupos de arquivos
     * ----------------------------------------------------------------
     */
    sidebar: {
      '/content/': [
        {
          text: 'Anotações',
          items: [
            {
              text: 'Java',
              collapsed: true,
              base: '/content/java/',
              items: [
                { text: 'Instalar JDK no Linux', link: 'jdk-no-linux' }
              ]
            },
            {
              text: 'Database',
              collapsed: true,
              base: '/content/database/',
              items: [
                { text: 'SQL', link: 'sql' }
              ]
            },
            {
              text: 'Linux',
              collapsed: true,
              base: '/content/linux/',
              items: [
                { text: 'Instalação', link: 'instalacao' }
              ]
            },
            {
              text: 'Git',
              collapsed: true,
              base: '/content/git/',
              items: [
                { text: 'Comandos', link: 'comandos' },
                { text: 'GUI', link: 'gui' },
              ]
            },
          ]
        },
        {
          text: 'Configuração',
          items: [
            { text: 'Icone em bloco de código', link: '/content/icone' }
          ]
        }
      ]
    },

    /**
     * Este trecho mostra icones ao lado direito do menu principal
     * para github, facebook, x, linkedin, etc.
     */
    socialLinks: [
      { icon: 'linkedin', link: 'https://linkedin.com/in/danilotc' }
    ],

    /**
     * Modifica texto do recurso de paginação do site para
     * Próxomo e Anterior.
     */
    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    },

    /**
     * Adiciona campo de busca no menu principal que pode ser
     * acessado com atalho Ctrl K.
     */
    search: {
      provider: 'local'
    },

    /**
     * Este trecho traduz o título da sidebar à direita com os
     * outliners de 'On this page' para 'Nesta página'.
     */
    outline: {
      label: 'Nesta página'
    }
  },

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          // '.java': 'vscode-icons:file-type-java',
          'java': localIconLoader(import.meta.url, '../public/java-icon.svg')
        }
      })
    ],
  }
})
