# Exemplos de API

Este é um exemplo de api

## Icone em bloco de código

::: code-group

```java [Hello.java]
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

:::

## Aplicando plugin code icons do vitepress

- **Passo 1:** Instalar o plugin que irá fazer os ícones aparecerem nas abas de cada código nos blocos.

```sh [npm]
npm install vitepress-plugin-group-icons
```

Neste momento uma dependência será instalada, veja no arquivo `package.json`.

```json {9-12} [package.json]
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

- **Passo 2:** Configurar o arquivo `config.ts` com as seguintes alterações.

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

Dependendo de como o projeto foi criado será necessário criar a pasta `theme` com arquivo `index.ts` para colar este trecho.

```ts {2} [.vitepress/theme/index.ts]
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'

export default Theme
```
- **Passo 3:** Customizar icones. Quando usar icones da passa `assets` é necessário incluir `localIconLoader` na importação e usar, como mostrado na linha 5 e 19.

Veja mais em [Custom Icons](https://vpgi.vercel.app/features.html#custom-icons).

```ts:line-numbers{5,19}
import { defineConfig } from 'vitepress'
import { 
  groupIconMdPlugin, 
  groupIconVitePlugin, 
  localIconLoader 
} from 'vitepress-plugin-group-icons'

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
          'java': localIconLoader(import.meta.url, '../assets/java-icon.svg')
        }
      })
    ],
  }
})
```

::: code-group

``` [File.java]
```

:::