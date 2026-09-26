# Site Lívia Novais

Site institucional estático (HTML + CSS puros, JS só para o menu mobile), pronto para o **Cloudflare Pages**. Não tem etapa de compilação.

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
  assets/js/menu.js
  assets/fonts/          Cormorant Garamond e Inter (servidas pelo próprio site)
  assets/img/            fotos .webp, monograma, imagem de compartilhamento (og)
handoff/                 referência de design recebida (README e protótipos .dc.html)
```

Cabeçalho, faixa de contato e rodapé estão repetidos em cada página. Ao mudar um deles, altere nas 6 páginas.

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

- **Cache:** tudo em `/assets/` fica em cache por 1 ano. Ao editar `site.css` ou `menu.js`, aumente o número em `?v=1` nos `<link>`/`<script>` de todas as páginas. Ao trocar uma foto, salve com um nome novo.
- **Fotos:** nunca cortar. Todas usam `width:100%; height:auto`. Informe `width`/`height` reais no `<img>` para evitar saltos de layout.
- **Privacidade:** sem cookies, sem analytics e sem chamadas a terceiros (as fontes são servidas pelo próprio site).
- **Contraste:** o acento `#8a6b3a` vira `#735a33` sobre os fundos bege (`--link` em `.bg-surface` e `.faixa`) para manter o contraste AA.
