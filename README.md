# ACAMP’S Shalom Parnaíba

Landing page estática do **ACAMP’S Shalom Parnaíba — Piauí**, criada para acesso por QR Code e publicação rápida no GitHub Pages.

## Visão geral

A página apresenta as principais informações do evento, explica o que é o ACAMP’S, exibe um espaço para vídeo, responde dúvidas frequentes e direciona o visitante para o WhatsApp da organização e para o Instagram oficial como link secundário.

## Arquivos

- `index.html` — estrutura da página e conteúdo do evento.
- `style.css` — layout responsivo, paleta de cores, cards, botões, formas orgânicas e animações leves.
- `script.js` — interações simples: vídeo responsivo quando houver link real do YouTube e FAQ em formato acordeão.
- `README.md` — instruções de uso e publicação.

## Links oficiais

Os links oficiais já estão configurados no arquivo `index.html`:

- WhatsApp: <https://w.app/y9ivzq>
- Instagram: <https://www.instagram.com/juventudeparnaiba?igsh=cDZhOXZucGlqOWpo>

O vídeo permanece como placeholder (`COLOCAR_LINK_VIDEO_AQUI`) e a página exibirá automaticamente o bloco **“Vídeo em breve”**.

## Como publicar no GitHub Pages

1. Envie os arquivos para um repositório no GitHub.
2. No GitHub, acesse **Settings**.
3. Entre em **Pages**.
4. Em **Build and deployment**, selecione:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` ou a branch usada no repositório
   - **Folder:** `/ (root)`
5. Clique em **Save**.
6. Aguarde o GitHub gerar a URL pública da página.

Como o arquivo `index.html` está na raiz e o projeto não usa dependências, build ou backend, a publicação funciona diretamente no GitHub Pages.
