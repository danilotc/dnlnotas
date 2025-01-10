import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notas Técnicas",
  description: "Um grupo de informações",

  // adiciona imagem favicon na aba do navegador
  head: [['link', {rel: 'icon', href: '/icon.png'}]],

  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Início', link: '/' }
    ],

    /**
     * Modificado para multiplas sidebars baseado em grupos de arquivos
     * ----------------------------------------------------------------
     */
    sidebar: {
      // raiz: todos os arquivos .md que estiverem dentro de 'docs'
      '/': [
        {
          text: 'Introdução',
          items: [
            { text: 'Comece por aqui', link: 'instrucoes-iniciais' },
            { text: 'JDK no Linux', link: '/config/jdk-linux' }
          ]
        }
      ],
      // config: todos os arquivos .md que estiverem dentro de 'config'
      '/config/': [
        {
          text: 'Configuração',
          base: '/config/',
          items: [
            { text: 'JDK no Linux', link: 'jdk-linux' },
            { text: 'Icones no VitePress', link: 'icone' }
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
     *Próxomo e Anterior.
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
  }
})
