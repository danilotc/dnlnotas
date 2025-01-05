---
outline: deep
---

# Configurar JDK no Linux

Configurar o ambiente de desenvolvimento é uma tarefa importante, por isso conhecer os detalhes das configurações fará com que o processo seja mais preciso.

O ambiente utilizado é o Linux e como sistema operacional estou usando o Zorin OS. Mas, todos os comandos utilizados servem para qualquer distribuição baseada no Ubuntu.

## Instalação da JDK

Ao abrir o terminal `Ctrl Alt T` digite a seguinte instrução para iniciar a instalação do Kit de Desenvolvimento Java (JDK) na sua versão 11.

```sh
sudo apt install openjdk-11-jdk
```

Para verificar se a instalação foi realizada com sucesso use o comando.

```sh
java --version
```

## Configuração do JAVA_HOME

Configurar a variável de ambiente  `JAVA_HOME` é uma tarefa essencial na hora de preparar o ambiente de desenvolvimento. Essa configuração pode ser realizada da seguinte maneira.

1. Verificar o caminho onde o jdk foi instalado

```sh
sudo update-alternatives --config java
```

2. Copie o caminho do java que deve ser algo semelhante a este.

```sh
/usr/lib/jvm/java-11-openjdk-amd64/bin/java
```

3. Edite o arquivo `.bashrc` com o comando.
```sh
sudo nano ~/.bashrc
```

::: tip Observação
📌 Neste caso o comando `nano` pode ser substituído pelo editor de arquivos de sua preferência.
:::

4. Copie o código abaixo no final do arquivo. Substitua `...` pelo caminho copiado no passo 2 sem o trecho final `/bin/java`. Em seguida, salve o arquivo.

```sh
JAVA_HOME=/...
export JAVA_HOME
export PATH=$PATH:$JAVA_HOME
```

5. Para finalizar abra um novo terminal `Ctrl Alt T` e execute o seguinte comando. Se o caminho obtido no passo 2 aparecer significa que tudo foi configurado corretamente.

```sh
echo $JAVA_HOME
```

### Na prática seria assim

Descobrir, através do terminal `Ctrl Alt T`, o endereço do JDK através do comando.

```sh
sudo update-alternatives --config java
```

![Verificando caminho do jdk](/imagem1.png)

No final do arquivo adicionar este trecho de código, substituindo `...` pelo endereço do passo 2 sem o trecho final `/in/java`, da seguinte forma.

```sh
JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export JAVA_HOME
export PATH=$PATH:$JAVA_HOME
```

![Configurando JAVA_HOME](/imagem2.png)

::: tip Observação
No endereço `JAVA_HOME` remova o final `/bin/java` deixando apenas o caminho da pasta jdk
:::

Testar a configuração, se o caminho do arquivo configurado no `JAVA_HOME` aparecer significa que está tudo funcionando corretamente.

```sh
echo $JAVA_HOME
```

![Testando caminho](/imagem3.png)

## Primeiro programa

No bloco de notas escrever o código abaixo e salvar na pasta `ws-eclipse/teste` com extensão `.java`

```java
class TesteJava {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

Compilar e executar o arquivo salvo dentro da pasta `ws-eclipse/teste` com os comandos `javac` e `java`, isso irá gerar um arquivo chamado `bytecode` com extensão `.class`, esse é o arquivo que executamos com o comando `java NomeDoArquivo`

![Executando programa](/imagem4.png)

## Resultados em arquivos

Veja como fica o resultado dos passos acima em matéria de arquivos.

**Pasta antes da compilação**: com arquivo escrito no bloco de notas e salvo com extensão `.java`, este é o arquivo ditável contendo o código java.

![Arquivos na pasta](/imagem5.png)

**Pasta após compilação**: é gerado um arquivo executável com extensão `.class`, conhecido tecnicamente como `bytecode`.

![Arquivos na pasta](/imagem6.png)

---

Referências
- [Documentação Oficial](https://docs.oracle.com/javase/8/docs/)
- [API](https://docs.oracle.com/javase/8/docs/api/)

Créditos
- [DevSuperior](https://www.youtube.com/watch?v=jARiy3DZdwg)