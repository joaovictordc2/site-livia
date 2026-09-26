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

## Pendências (confirmar com a cliente antes de publicar)

- **Endereço do salão.** Em `public/salao/index.html` há `[Endereço do salão]` e o botão "Abrir no mapa" aponta para o Google Maps genérico (procure por `PENDENTE`).
- **Revisão dos textos:** serviços, formatos de curso, bio, horários, marcas distribuídas.
- **Local dos cursos.**
- **Domínio.** Quando o endereço definitivo do site existir, trocar `og:image` para URL absoluta (ex.: `https://dominio/assets/img/og-livia-novais.jpg`), incluir `og:url`/`canonical` e um `sitemap.xml`.

## Manutenção

- **Cache:** tudo em `/assets/` fica em cache por 1 ano. Ao editar `site.css` ou `menu.js`, aumente o número em `?v=1` nos `<link>`/`<script>` de todas as páginas. Ao trocar uma foto, salve com um nome novo.
- **Fotos:** nunca cortar. Todas usam `width:100%; height:auto`. Informe `width`/`height` reais no `<img>` para evitar saltos de layout.
- **Privacidade:** sem cookies, sem analytics e sem chamadas a terceiros (as fontes são servidas pelo próprio site).
- **Contraste:** o acento `#8a6b3a` vira `#735a33` sobre os fundos bege (`--link` em `.bg-surface` e `.faixa`) para manter o contraste AA.
