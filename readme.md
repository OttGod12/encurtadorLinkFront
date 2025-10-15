LINK: https://utfpr-cm.notion.site/encurtador-url



# Objetivo

O objetivo deste trabalho é desenvolver uma aplicação web completa de um "Encurtador de Links". O foco principal será no desenvolvimento de uma API RESTful utilizando **Node.js** com o framework **Fastify** e um banco de dados **PostgreSQL**. Vocês também criarão um front-end em **React JS** ou **Next.js** para interagir com a API, permitindo cadastrar, editar e apagar os links encurtados. O projeto visa avaliar as habilidades na criação de APIs, modelagem de dados, integração entre front-end e back-end e boas práticas de desenvolvimento.

# Descrição

O "Encurtador de Links" é uma ferramenta que transforma URLs longas em links curtos e fáceis de compartilhar. A aplicação web será dividida em duas partes principais:

1. **API Back-end:** O serviço responsável por receber uma URL longa, gerar um código único, salvar a associação no banco de dados e redirecionar os usuários do link curto para a URL original.
2. **Painel de Gerenciamento (Front-end):** Uma interface simples onde o usuário pode criar novos links curtos, visualizar todos os links já criados, editar o destino de um link existente e removê-los.

A aplicação não exigirá autenticação de usuário.

# Tecnologias

- **Back-end:** Node.js, Fastify
- **Banco de Dados:** Supabase (PostgreSQL).
- **Front-end:** React JS ou Next.js
- **Estilização:** Fica a critério do aluno (CSS puro, CSS Modules, Tailwind CSS, etc.). Você também pode usar uma biblioteca de componentes para acelerar o desenvolvimento.

# Requisitos Funcionais

A aplicação é dividida em Front-end (Painel) e Back-end (API).

## Painel de Gerenciamento (React / Next.js)

- [ ]  **RF-06 (Formulário de Criação):** Deve haver um formulário com campos para "Legenda do link" e "URL para encurtar". Ao clicar em "Encurtar", os dados devem ser enviados para a API, e a lista de links deve ser atualizada na tela.
- [ ]  **RF-07 (Listagem de Links):** A seção "Meus Links" deve listar, em formato de cards, todos os links obtidos da API.
- [ ]  **RF-08 (Card de Link):** Cada card na lista deve exibir a legenda, o link curto, a URL original, a data de criação e a contagem de cliques.
- [ ]  **RF-09 (Ações do Card):** Cada card deve possuir botões que permitam:
    - [ ]  **Copiar:** Copiar o link curto para a área de transferência.
    - [ ]  **Editar:** Permitir que o usuário altere a legenda e a URL original do link, enviando a atualização para a API.
    - [ ]  **Excluir:** Remover o link permanentemente através de uma requisição para a API.

# Requisitos Técnicos e de Implementação

- [ ]  **RT-01 (Estrutura da API):** O projeto back-end deve ser bem estruturado, separando as responsabilidades em camadas (ex: rotas, controladores, casos de uso/serviços e repositórios), conforme a arquitetura trabalhada em aula.
- [ ]  **RT-02 (Conexão com Banco de Dados):** Utilizar o ORM **Drizzle** com PostgreSQL para todas as interações com o banco de dados.
- [ ]  **RT-03 (Estrutura do Front-end):** O projeto front-end deve ser bem estruturado, com uma divisão clara de componentes reutilizáveis.
- [ ]  **RT-04 (Consumo de API):** O front-end deve utilizar `fetch` ou uma biblioteca como `axios` para se comunicar com a API back-end.
- [ ]  **RT-05 (Variáveis de Ambiente):** As credenciais do banco de dados e outras informações sensíveis devem ser armazenadas de forma segura em variáveis de ambiente (arquivo `.env`).



# Critérios de Avaliação

A nota final será composta pela soma dos seguintes critérios:

- **Funcionalidade (40% - 4,0 pontos):** Avalia se todos os requisitos funcionais foram implementados corretamente.
- **Qualidade do Código, Estrutura e Documentação (20% - 2,0 pontos):** Avalia a organização dos projetos, a clareza do código, o uso de boas práticas **e a qualidade do arquivo README.md, que deve ser claro e completo.**
- **Processo de Desenvolvimento e Commits (20% - 2,0 ponto):** Avalia a frequência e consistência dos commits e a qualidade das mensagens descritivas.
- **Interface e Experiência do Usuário (10% - 1,0 ponto):** Avalia a clareza e a usabilidade da interface.
- **Inovação e Funcionalidade Extra (10% - 1,0 ponto):** Avalia a implementação de uma funcionalidade relevante que não faz parte do escopo mínimo.

# Entregáveis

- **Repositório do Back-end no GitHub:** O link para um repositório público contendo todo o código-fonte da API Node.js.
- **Repositório do Front-end no GitHub:** O link para um repositório público contendo todo o código-fonte da aplicação React/Next.js.
- **Arquivo `README.md` (em ambos os repositórios):** Um `README.md` bem documentado, explicando:
    - **O link da aplicação funcionando.**
        - Back-end hospedado no [Render](https://render.com/)
        - Front-end hospedado na [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/)
    - O que é o projeto.
    - Como executá-lo localmente (incluindo configuração de banco de dados e variáveis de ambiente).
    - **Uma seção dedicada à "Funcionalidade Extra", descrevendo o que foi implementado e por quê.**

    