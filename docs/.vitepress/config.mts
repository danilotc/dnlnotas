import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notas Técnicas",
  description: "Um grupo de informações",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Início', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        collapsed: false,
        items: [
          { text: 'Comece por aqui', link: '/instrucoes-iniciais' }
        ]
      }
    ],

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
