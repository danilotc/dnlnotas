# Configurando icone em bloco de código

Os blocos de código podem conter abas e nelas ter o indicativo de qual tecnologia aquele trecho de código representa, conforme documentação em [VitePress Plugin Group Icons](https://vpgi.vercel.app).

A configuração também pode ser lida em [NPM](https://www.npmjs.com/package/vitepress-plugin-group-icons).

::: code-group

```java [Hello.java]
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

```js [arquivo.js]
if (idade < 18) {
  console.log("É menor de idade")
} else {
  console.log("É maior de idade")
}
```

```sh [npm]
npm install algum-pacote
```

:::

## Bloco de código com ícones

- **Passo 1:** Instalar o plugin que irá colocar um ícone nas abas de cada bloco código:

```sh [npm]
npm install vitepress-plugin-group-icons
```

Neste momento uma dependência será instalada no arquivo `package.json`

```json {10-12} [package.json]
{
  "devDependencies": {
    "vitepress": "^1.5.0"
  },
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  "dependencies": {
    "vitepress-plugin-group-icons": "^1.3.3"
  }
}
```

- **Passo 2:** Configurar o arquivo `config.ts`:

```ts {2,7,12} [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  }
})
```

Dependendo de como o projeto foi iniciado, criar a pasta `theme` com arquivo `index.ts` e colar este código:

```ts {2} [.vitepress/theme/index.ts]
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'

export default Theme
```
- **Passo 3:** Para usar ícones customizados é necessário incluir `localIconLoader` na linha 2 para importar e usar, conforme o trecho destacado na linha 15.

Veja mais em [Custom Icons](https://vpgi.vercel.app/features.html#custom-icons).

```ts:line-numbers {2,15}
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          // 'java': 'vscode-icons:file-type-java'
          'java': localIconLoader(import.meta.url, '../public/java-icon.svg')
        }
      })
    ],
  }
})
```

O resultado da configuração é o ícone do `Java` aparecendo na aba, indicando que o trecho de código está escrito na linhagem Java:
::: code-group

``` [File.java]
```

:::