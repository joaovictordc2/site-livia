# Site Lívia Novais

Site institucional estático (HTML + CSS puros, JS mínimo para o menu mobile e as animações), pronto para o **Cloudflare Pages**. Não tem etapa de compilação.

## Estrutura

```
public/                  ← pasta publicada (é só ela que vai para o ar)
  index.html             Início
  distribuicao/index.html
  salao/index.html
  cursos/index.html
  sobre/index.html
  404.html
  _headers               cache longo para /assets/* e cabeçalhos de segurança
  robots.txt
  favicon.ico, apple-touch-icon.png
  assets/css/site.css
  assets/js/menu.js      menu mobile (foco, Esc, trava de rolagem)
  assets/js/motion.js    revelações ao rolar + envelope de contato
  assets/fonts/          Cormorant Garamond (normal e itálico) e Inter, servidas pelo próprio site
  assets/img/            fotos .webp, logo/monograma, renda, envelope, imagem de compartilhamento (og)
handoff/                 referência de design recebida (README e protótipos .dc.html)
```

Cabeçalho, menu mobile e rodapé estão repetidos em cada página. Ao mudar um deles, altere nas 5 páginas (Início, Distribuição, Cursos, Sobre e 404). `salao/index.html` é só um redirecionamento para `/distribuicao/`.

## Identidade visual (redesign 2026)

A identidade bege/champanhe descrita em `handoff/README.md` (inclusive a regra "nunca fundo escuro") foi substituída por uma direção editorial monocromática. O handoff fica como registro histórico.

- **Cores:** preto `#101010`, preto profundo `#080808`, grafite `#1a1a1a`/`#242424`, cinza `#474747`, branco editorial `#f8f8f6`, névoa `#ededea`, divisórias `#d6d6d6`. Cada seção usa uma classe de tom (`tone-paper`, `tone-white`, `tone-mist`, `tone-ink`, `tone-deep`, `tone-graphite`) que já ajusta texto, linhas e botões.
- **Tipografia:** Cormorant Garamond (títulos; itálico para palavras de destaque) e Inter (textos, botões, menus).
- **Marca:** logo e monograma vêm do arquivo oficial enviado pela cliente, convertidos em versões preta e branca com fundo transparente (`logo-livia-novais-*.webp`, `monograma-n-*.webp`). Não redesenhar.
- **Renda francesa:** `renda-vertical-preta.webp` (fundos claros) e `renda-vertical-branca.webp` (fundos escuros). Usada com moderação: hero do Início, seção "Quem está à frente", hero do Sobre, menu mobile e rodapé.
- **Envelope de contato (Início):** duas camadas da imagem original (`envelope-renda-fundo.webp` e `envelope-renda-bolso.webp`) com o cartão em HTML entre elas. Sem JavaScript, o cartão já aparece aberto; os botões de WhatsApp ao lado continuam sempre disponíveis.
- **Animações:** CSS + `IntersectionObserver`, uma vez só, respeitando `prefers-reduced-motion`. Se `motion.js` não carregar em 3 s, o `<head>` remove a classe `.js` e todo o conteúdo aparece.

### Fotos novas da Lívia

Fotos reais, sem retoque (apenas convertidas para WebP em 600 e 900 px de largura):

- `livia-postura-profissional-*.webp`: hero do Início, hero do Sobre e imagem de compartilhamento.
- `livia-bracos-abertos-*.webp`: "Quem está à frente" (Início), "Consultoria no seu salão" (Distribuição) e galeria do Sobre.

Para trocar a foto do hero do Início (por exemplo, pela foto "mão no bolso"), salve a nova imagem como `livia-<nome>-600.webp` e `livia-<nome>-900.webp` e troque o `src`/`srcset` dentro de `.hero-home__figure` em `public/index.html`.

## Publicar no Cloudflare Pages

**Opção A: pelo GitHub (recomendado; cada push publica sozinho)**
1. Cloudflare → Workers & Pages → Create → Pages → *Connect to Git* → escolha este repositório.
2. Framework preset: **None**. Build command: **deixe vazio**. Build output directory: **`public`**.
3. Salvar e publicar.

**Opção B: envio manual**
Cloudflare → Workers & Pages → Create → Pages → *Upload assets* → arraste a pasta **`public`**.

Depois, em *Custom domains*, conecte o domínio próprio, se houver.

## Endereços

- **Distribuidora:** Rua Leão de Judá, nº 10, Mirante de Jandira, Jandira/SP (Início e rodapé).
- **Salão:** Rua Leopoldina de Camargo, nº 110, Itapevi/SP (página Salão).

## Pendências

- **Domínio.** Quando o endereço definitivo do site existir, trocar `og:image` para URL absoluta (ex.: `https://dominio/assets/img/og-livia-novais.jpg`), incluir `og:url`/`canonical` e um `sitemap.xml`.

Textos revisados e aprovados. O local dos cursos é informado só pelo WhatsApp.

## Manutenção

- **Cache:** tudo em `/assets/` fica em cache por 1 ano. Versões atuais: `site.css?v=2`, `menu.js?v=2`, `motion.js?v=1`. Ao editar um desses arquivos, aumente o número nos `<link>`/`<script>` de todas as páginas. Ao trocar uma foto, salve com um nome novo.
- **Fotos:** nunca cortar nem recriar. Todas usam `width:100%; height:auto`. Informe `width`/`height` reais no `<img>` para evitar saltos de layout.
- **WhatsApp:** todos os botões usam o número `5511975742814`, com mensagem pré-preenchida conforme o contexto (orçamento, consultoria, catálogo, cursos ou conversa geral).
- **Privacidade:** sem cookies, sem analytics e sem chamadas a terceiros (as fontes são servidas pelo próprio site).
- **Contraste:** textos secundários usam `#474747`/`#5c5c5c` sobre fundos claros e branco a 62–76% sobre fundos escuros (todos acima de AA).
- **Arquivos antigos:** as fotos e o monograma dourado da versão anterior continuam em `assets/img/` (não referenciados) para permitir comparação ou reversão.
