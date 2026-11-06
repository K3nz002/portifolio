# 🌐 Portfólio Pessoal - Guilherme Kenzo Watanabe Fujimura

Portfólio web moderno e responsivo desenvolvido para apresentar projetos, habilidades e informações profissionais de minha autoria. Publicado e hospedado diretamente pelo **GitHub Pages**.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica de seções (`header`, `main`, `section`, `article`, `footer`).
- **CSS3 Moderno**:
  - Variáveis CSS (Custom Properties) para paleta de cores consistente e tema dark.
  - CSS Grid e Flexbox para layouts responsivos e alinhamento adaptável.
  - Funções modernas como `clamp()` para tipografia fluida.
  - Transições suaves e `scroll-behavior: smooth`.
- **JavaScript (ES6+)**: Lógica e dinamismo na interface.
- **GSAP (GreenSock Animation Platform)**: Biblioteca para animações fluidas e efeitos de revelação (*reveal animations*) nos elementos da página.
- **GitHub Pages**: Hospedagem estática contínua e gratuita integrada ao repositório.

---

## 📁 Estrutura de Arquivos

```text
K3nz002.github.io/
├── index.html        # Estrutura principal e conteúdo das seções
├── css/
│   └── style.css     # Estilos globais, tema dark, grid e responsividade
├── js/
│   └── scrip.js      # Animações com GSAP e efeitos de transição
└── README.md         # Documentação do projeto
```

---

## 🏗️ Passo a Passo: Como o Projeto Foi Desenvolvido

1. **Planejamento da Estrutura Semântica (`index.html`)**:
   - Criação da barra de navegação com âncoras para navegação rápida entre seções.
   - Divisão em seções estratégicas:
     - **Início (Hero)**: Apresentação inicial com cargo e chamada para ação (*CTA*).
     - **Sobre**: Resumo profissional e diferenciais.
     - **Projetos**: Grid de cards detalhando problemas, tecnologias usadas e links para o GitHub.
     - **Skills**: Listagem categorizada de competências técnicas.
     - **Contato**: Links diretos para e-mail, LinkedIn e GitHub.

2. **Estilização e Design Dark Moderno (`css/style.css`)**:
   - Definição de paleta dark minimalista via variáveis `:root`.
   - Implementação de cards interativos para projetos com efeito *hover* (elevação e realce da borda).
   - Uso de `minmax` com CSS Grid para garantir responsividade em qualquer tamanho de tela sem necessidade de quebras excessivas de media queries.

3. **Animações de Entrada (`js/scrip.js`)**:
   - Integração da biblioteca GSAP via CDN.
   - Configuração de efeitos de revelação com easing suave (`power3.out`) e efeito cascata (*stagger*) para títulos e cards.

---

## 🚀 Como Utilizar e Personalizar

### 1. Clonar o repositório
```bash
git clone https://github.com/K3nz002/K3nz002.github.io.git
cd K3nz002.github.io
```

### 2. Executar localmente
Como se trata de uma aplicação estática (HTML/CSS/JS), você pode testá-la de várias formas:
- **Extensão Live Server (VS Code / Antigravity)**: Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.
- **Via Python** (no terminal):
  ```bash
  python -m http.server 8000
  ```
  Depois, acesse no navegador: `http://localhost:8000`.
- **Navegador**: Basta abrir o arquivo `index.html` diretamente com dois cliques.

### 3. Personalizar com suas informações
Abra o arquivo [`index.html`](file:///c:/Users/guilherme.fujimura_u/Documents/GitHub/K3nz002.github.io/index.html) e edite:
- **Seu Nome e Cargo**: Atualize a tag `<title>`, o cabeçalho e a seção `#inicio`.
- **Seção Sobre**: Descreva sua formação, conquistas e foco de atuação.
- **Projetos**: Adicione seus próprios repositórios substituindo os cards dentro de `.projetos-grid`.
- **Contato**: Altere os links de e-mail, LinkedIn e perfil do GitHub no bloco `#contato`.

### 4. Deploy no GitHub Pages
Se o repositório estiver nomeado como `<seu-usuario>.github.io`:
1. Faça o commit e envie suas alterações para a branch principal (`main`):
   ```bash
   git add .
   git commit -m "feat: personalizando portfólio"
   git push origin main
   ```
2. No GitHub, acesse **Settings** > **Pages**.
3. Em **Source**, confirme a branch `main` e a pasta `/ (root)`.
4. O site estará disponível em: `https://k3nz002.github.io/portifolio`.
