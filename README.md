# Axial Corp — revisão local de responsividade e descoberta

Base: `pretinhuu1-boop/axial-corp-site-dist`, branch `main`. Domínio: https://axialcorp.com.br/.

Este repositório contém a distribuição compilada, não o projeto React original. Os bundles existentes foram preservados. As mudanças ainda não foram enviadas ao GitHub.

## Arquivos mantidos

- `assets/responsive.css`: correções de layout, campos, menu, foco e movimento reduzido. As regras pequenas precedem as ampliações para tablet e desktop.
- `assets/enhancements.js`: menu acessível, perguntas e respostas, preenchimento automático e prioridade das imagens; inicialização idempotente após montagem do React.
- `index.html`: conteúdo pré-renderizado, metadados canônicos/sociais e JSON-LD de Organization, WebSite, WebPage e Service.
- `robots.txt`, `sitemap.xml`, `.nojekyll`: descoberta e compatibilidade com GitHub Pages.
- `CNAME`: domínio existente preservado.

## Prévia e verificação

Na pasta do site, execute `node work/server.cjs` e abra http://127.0.0.1:4187/.

Execute `node --check assets/enhancements.js` e `node work/verify.cjs`. A verificação exige Cheerio, já instalado em `work/node_modules`. Os resultados de responsividade estão em `work/responsive-results.json`.

## Atualizações futuras

O HTML inicial foi capturado da aplicação renderizada, limpo de estilos temporários de animação e sincronizado com as perguntas visíveis. React monta normalmente no mesmo `root`, sem duplicação. Ao substituir os bundles por um novo build, capture novamente o conteúdo inicial em `work/prerender-root.html`, sem dados de formulários ou seleções de teste, e rode `node work/prepare.cjs`. Depois valide HTML e interações novamente. Não reutilize um snapshot antigo com um build novo.

Os scripts e snapshots em `work/` são locais e ignorados pelo Git. Os arquivos públicos não dependem de Node ou de Cheerio para funcionar no GitHub Pages.

## Limites

Não foram medidos Core Web Vitals em dispositivos reais nem resultados de indexação. SEO/GEO/AEO facilitam descoberta e compreensão, sem garantir posição ou citação. O formulário continua abrindo WhatsApp; nenhum envio foi realizado durante os testes. O e-mail visível atual `contato@axialcorp.com` foi preservado e deve ser confirmado pelo proprietário antes de qualquer alteração.
