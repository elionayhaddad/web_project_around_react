# Projeto 5:  EUA Afora

## Visão geral

**Descrição**
**Tecnologias e Técnicas**
**Página no GitHub**

### Descrição

O projeto EUA Afora visa mostrar o mundo existente além das fronteiras do local onde se vive, apresentando diversos lugares em países diferentes com suas paisagens distintas e peculiares. A página exibe um perfil de um explorador que mostra os lugares dos quais ele já visitou. Cada lugar apresentado é postado na forma de um cartão que mostra a imagem do local, e logo abaixo uma descrição informando o nome do mesmo e ao lado um botão de reação. Porém, dessa vez, o projeto é portado para o React.

### Tecnologias e Técnicas

### React e Variáveis de estado

Para portar algumas das funcionalidades, foram utilizadas variáveis de estado a partir de hooks, que possibilitam o uso dos recursos React sem a necessidade de criar uma classe. Foram utilizados hooks nas seguintes funcionalidades: aberturas e fechamento de pop-ups e nas chamadas "fetch" da api.

#### Unidades de Medidas Relativas e Consultas de Mídia

Usado novamente para trazer o conceito responsivo ao projeto, foram usadas as unidades de medidas relativas - como "%", valores decimais para a altura de linha, além das propriedades "max-width" e "max-height" - em conjunto com consultas de mídia e seus pontos de interrupção estabelecidos de acordo com as resoluções apresentadas no Figma (resolução mínima: 320px e resolução máxima: 1280px).

#### Grid Layout e Flexbox

O Grid Layout se responsabilizou pelo o alinhamento dos cartões, que ocupam grande parte do conteúdo principal, enquanto o Flex se responsabilizou pelo aninhamento de blocos secundários no projeto.

#### Fontes Externas

Conforme exigido pelo projeto, neste projeto foi usado a fonte 'Inter', que foi exportada através de @font-face.

#### Metodologia BEM

Mais uma vez, foi utilizado a estrutura de arquivos da metodologia BEM: a separação do código em diferentes arquivos .css, armazenados em diferentes diretórios: blocks (contém toda a estilização dos blocos separados em vários arquivos .css correspondentes a cada um deles.), imagens (contém todas as imagens do projeto), páginas (contém index.css que conecta todos os blocos.css), vendor (contém materiais externos para o projeto, como fontes e normalize.css), e desta vez, script, que contém toda a parte de programação lógica do projeto.

#### JavaScript e Formulário

Embora possuam visibilidade na página, através dos pop-ups, eles ainda estão sendo portados.

### Páginas do GitHub

Acredito que depois de ter um breve resumo do que se trata o projeto, e das técnicas/tecnologias usadas para a sua construção, nada será mais esclarecedor que ver com os próprios olhos o resultado final do website. Você poderá conferir através do link:
https://elionayhaddad.github.io/web_project_4_ptbr/
