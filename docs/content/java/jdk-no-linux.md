---
outline: [2, 3]
---

# Configurar JDK no Linux

Configurar o ambiente de desenvolvimento é uma tarefa importante, por isso conhecer os detalhes das configurações fará com que o processo seja mais preciso.

O ambiente utilizado é o Linux e como sistema operacional estou usando o Zorin OS. Mas, todos os comandos utilizados servem para qualquer distribuição baseada no Ubuntu.

## Instalação da JDK

Ao abrir o terminal `Ctrl Alt T` digitar a seguinte instrução para iniciar a instalação do Kit de Desenvolvimento Java (JDK) na sua versão 11.

```sh
sudo apt install openjdk-11-jdk
```

::: details Observação
Para instalar uma versão diferente da 11 basta mudar o número para a versão que precisa.
```sh
sudo apt install openjdk-17-jdk
sudo apt install openjdk-21-jdk
```
:::

Verificar se a instalação foi realizada com sucesso:

```sh
java --version
```

## Configurar JAVA_HOME

A variável de ambiente `JAVA_HOME` precisa ser configurada para tornar possível o uso do kit de desenvolvimento a partir de qualquer lugar do sistema operacional.

1. Verificar o caminho onde o jdk foi instalado:

```sh
sudo update-alternatives --config java
```

2. Copiar o caminho do java:

```sh
/usr/lib/jvm/java-11-openjdk-amd64/bin/java
```

3. Editar o arquivo `.bashrc`:
```sh
sudo nano ~/.bashrc
```

::: tip Observação
📌 Neste caso o comando `nano` pode ser substituído pelo editor de arquivos de sua preferência.
:::

4. Copiar o código no final do arquivo. Antes disso, foi necessário atribuir ao `JAVA_HOME` o caminho copiado no passo 2 sem o trecho final `/bin/java`:

```sh
JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export JAVA_HOME
export PATH=$PATH:$JAVA_HOME
```

5. Para finalizar abrir um novo terminal `Ctrl Alt T` e executar este comando. O caminho obtido no passo 2 deve aparecer, indicando que tudo foi configurado corretamente.

```sh
echo $JAVA_HOME
```

##### Referências
- [DevSuperior: Como Instalar Java JDK no Ubuntu Linux](https://www.youtube.com/watch?v=jARiy3DZdwg)
- [Webmundi: Como Instalar Java JDK no Linux Ubuntu](https://www.youtube.com/watch?v=Kn87QF1mEcY&list=PLZun-PtGBZCu1V6IVGihHrAdCHgCu73Mr&index=4)