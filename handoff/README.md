# Handoff: Site Lívia Novais

## Overview
Site institucional multipágina de Lívia Novais (Jandira, SP). Foco principal: **distribuição de produtos profissionais** para salões e cabeleireiros. Frentes secundárias: salão (clientes finais) e cursos. Conversão = WhatsApp.

## About the Design Files
Os arquivos em `design/` são **referências de design em HTML** (formato `.dc.html`, protótipo do Claude Design), não código de produção. Tarefa: **recriar como site estático em HTML + CSS puros** (sem framework, JS mínimo só para o menu mobile), pronto para **Cloudflare Pages** (sem build step).

Estrutura de saída esperada:
```
/index.html            (Início)
/distribuicao/index.html
/salao/index.html
/cursos/index.html
/sobre/index.html
/assets/css/site.css
/assets/js/menu.js
/assets/img/*          (copiar de ./assets/img)
/404.html
/_headers              (cache longo para /assets/*)
```
Cabeçalho, faixa de contato e rodapé são repetidos em cada página (HTML estático; sem includes em runtime). Links internos em URLs limpas (`/distribuicao/`).

## Fidelity
**High-fidelity.** Cores, tipografia, espaçamentos e copy são finais (copy = proposta aprovável; ver Pendências).

## Design Tokens
Cores
- Fundo: `#fdfcfa`
- Superfície (seções alternadas): `#f7f1e7`
- Faixa de contato: `#efe4d0`
- Texto: `#2a241c`
- Texto secundário: `#5b5247`
- Acento champanhe (links, botões, eyebrows): `#8a6b3a` — hover `#5a4526`
- Detalhe champanhe (filetes, numerais, molduras): `#b89968`
- Divisórias: `color-mix(in srgb, #b89968 38–50%, transparent)`
- **Nunca fundo escuro.**

Tipografia
- Títulos: Cormorant Garamond 500 (Google Fonts, pesos 400/500/600). H1 `clamp(42px, 6.4vw, 84px)` lh 1.02–1.04; H2 `clamp(34px, 4.4vw, 56px)` lh 1.08; H3 26–30px.
- Corpo: Inter 400. Parágrafo 15–17px, lh 1.7. Secundário em `#5b5247`.
- Eyebrow: Inter 12px, uppercase, letter-spacing 0.2em, `#8a6b3a`.
- Rótulos de botão: Inter 13px, uppercase, letter-spacing 0.08em, `white-space:nowrap`.

Layout
- Container: `max-width:1200px`, padding lateral `clamp(20px, 5vw, 72px)`.
- Padding vertical de seção: `clamp(64px, 9vw, 120px)`.
- Grids: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`; gap `clamp(40px, 6vw, 88px)` em splits texto/imagem.
- Filete de destaque: 56×1px `#b89968`, margem 32px.
- Breakpoint do menu: 880px.

Botões
- Primário: fundo transparente, borda 1px `#8a6b3a`, texto `#8a6b3a`, raio 8px, altura mín. 52px, padding 0 26px. Hover: fundo `#8a6b3a` a 12%; active 22%.
- Secundário: borda 1px divisória, texto `#2a241c`. Hover: texto a 7%.
- Foco: `outline: 2px solid #8a6b3a; outline-offset: 2px`.

Imagens
- **Nunca cortar fotos** (todas verticais, a maioria 9:16). `width:100%; height:auto`, sem `object-fit:cover`.
- Onde precisam alinhar (3 cards do Início), moldura `aspect-ratio:9/16` com fundo `#f7f1e7` e imagem centralizada sem corte.
- Hero Início e Sobre: moldura decorativa 1px `#b89968` deslocada 18px (abaixo/direita).
- Fotos não-principais: `loading="lazy"`. Converter/servir WebP já existente.

## Screens
Ver `design/*.dc.html` para markup e estilos exatos (estilos inline).

1. **Início** (`Inicio.dc.html`): hero (versão "retrato" é a padrão: texto à esquerda, retrato à direita; a versão "palco" é alternativa — implementar só a retrato salvo pedido), "Três frentes" (3 cards link: Distribuição, Salão, Cursos), bloco Sobre (fundo superfície), Distribuidora · Espaço físico (endereço + "Abrir no mapa"), faixa de contato (ambos botões), rodapé. **Respeitar edições manuais de fundo feitas no arquivo.**
2. **Distribuição**: hero, "Para quem atendemos" (3 colunas com filete superior), "Como funciona" (3 passos numerados 01–03), faixa (Fale comigo).
3. **Salão**: hero, Serviços (lista com filetes), Como chegar (endereço do salão — pendente), faixa (Agendar no salão). Botão flutuante mobile = "Agendar no salão".
4. **Cursos**: hero com imagem, Formatos (3 colunas), galeria 3 fotos, faixa (Fale comigo).
5. **Sobre**: retrato com moldura + bio + link Instagram, galeria 2 fotos, faixa (ambos).

Componentes compartilhados
- **Cabeçalho** (sticky, fundo `#fdfcfa` 80% + blur 14px, altura 72px, filete inferior): só o monograma N (40px de altura) → Início. Desktop ≥880px: links Distribuição, Salão, Cursos, Sobre (`aria-current="page"` na atual, cor acento) + botão "Fale comigo". Mobile: botão hambúrguer 44×44 → menu fullscreen (links em Cormorant 32px, botões Fale comigo / Agendar no salão, Instagram); Esc fecha, trava scroll, foco gerenciado.
- **Botão WhatsApp flutuante** (só mobile <880px): canto inferior direito, 16px + safe-area, altura 52px. "Fale comigo" em todas as páginas, exceto Salão ("Agendar no salão").
- **Faixa de contato**: fundo `#efe4d0` com brilho radial suave `#f8f1e4`; título Cormorant, texto, botão(ões).
- **Rodapé**: 4 colunas auto-fit — monograma N 56px + descrição; Páginas; Atendimento (2 WhatsApps + Instagram); Distribuidora (endereço + Como chegar). Linha final: "© 2026 Lívia Novais" / "Este site não usa cookies e não coleta dados pessoais." Padding inferior 112px no mobile (abre espaço para o botão flutuante).

## Links / dados
- WhatsApp "Fale comigo" (produtos, distribuição, cursos): `https://wa.me/5511975742814`
- WhatsApp "Agendar no salão": `https://wa.me/5511982690795`
- Instagram: `https://www.instagram.com/livianovais_nb/`
- **Distribuidora** (não é o salão): Rua Leão de Judá, nº 10 — Mirante de Jandira, Jandira/SP. Mapa: `https://www.google.com/maps/search/?api=1&query=Rua%20Le%C3%A3o%20de%20Jud%C3%A1%2C%2010%20-%20Mirante%20de%20Jandira%2C%20Jandira%20-%20SP`
- Links externos: `target="_blank" rel="noopener noreferrer"`.

## Pendências (confirmar com a cliente)
- Endereço do **salão** (hoje placeholder "[Endereço do salão]" e mapa genérico).
- Local dos cursos.
- Revisão de toda a copy (serviços, formatos de curso, bio), horários, marcas distribuídas.

## SEO / técnico
- `<html lang="pt-BR">`, title e meta description únicos por página, Open Graph com retrato.
- Favicon a partir de `monograma-n.png`.
- Sem cookies, sem analytics.
- Acessibilidade: alt nos retratos, contraste AA, alvos ≥44px.

## Assets
`assets/img/`: monograma-n.png (logo do topo e rodapé), logo-livia-novais-claro.png (não usado), 8 fotos .webp fornecidas pela cliente.

## Files
`design/Inicio.dc.html`, `Distribuicao.dc.html`, `Salao.dc.html`, `Cursos.dc.html`, `Sobre.dc.html`, `Cabecalho.dc.html`, `FaixaContato.dc.html`, `Rodape.dc.html`.
