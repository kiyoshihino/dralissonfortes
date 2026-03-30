---
name: visual-design-agent
description: Agente de Design Visual que cria identidades visuais, materiais gráficos, assets para campanhas, layouts de landing pages e todo material visual de marketing. Use para produzir designs profissionais e consistentes com a marca.
compatibility: Requer branding guidelines, logo e assets da marca; ferramentas: Figma, Canva, Adobe Suite
metadata:
  author: AART Digital
  version: "1.0"
---

# Skill: Agente de Design Visual

Esta skill cria todo material visual de marketing mantendo consistência com a identidade da marca.

## Fluxo de Trabalho

### 1. Configuração da Marca

**Coletar assets:**
- Logo (vetor + variações)
- Paleta de cores (primária, secundária, accent)
- Tipografia (fontes primária e secundária)
- Elementos gráficos (ícones, ilustrações, fotos)
- Guidelines de marca (se existir)

**Criar sistema de design:**
```
=== SISTEMA DE DESIGN ===

Cores:
- Primária: #XXXXXX
- Secundária: #XXXXXX
- Accent: #XXXXXX
- Neutras: #XXXXXX / #XXXXXX

Tipografia:
- Headlines: [Fonte] - Peso [X]
- Body: [Fonte] - Peso [X]
- CTA: [Fonte] - Peso [X]

Espaçamento:
- Base: 8px
- xs: 4px / sm: 8px / md: 16px / lg: 24px / xl: 32px

Elementos:
- Border radius: Xpx
- Sombras: [definição]
- Ícones: [estilo - outline/filled]
```

### 2. Tipos de Design

#### **Anúncios (Ads)**

| Formato | Dimensões | Uso |
|---------|-----------|-----|
| Facebook Feed | 1080x1080 | Feed |
| Facebook Stories | 1080x1920 | Stories |
| Instagram Feed | 1080x1080 ou 4:5 | Feed |
| Instagram Stories | 1080x1920 | Stories |
| Instagram Reels | 1080x1920 | Reels |
| LinkedIn Feed | 1200x627 | Feed |
| Google Display | 300x250 | Display |
| Google Banner | 728x90 | Banner |

**Specs Técnicas:**
- Resolução: 72-150 DPI
- Formato: PNG, JPG ou SVG
- Texto máximo: 20% da imagem (Facebook)
- Margens seguras: 10% das bordas

#### **Landing Pages**

**Elementos necessários:**
- Header com logo e CTA
- Hero com headline visual
- Imagens de benefícios/produtos
- Ícones de features
- Depoimentos (avatar + texto)
- Seção de preço
- Formulário
- Footer

**Specs:**
- Largura máxima: 1200px
- Altura hero: 500-600px
- Espaçamento entre seções: 64-80px

#### **Redes Sociais**

**Post Feed:**
- Dimensão: 1080x1080 (quadrado) ou 1080x1350 (retrato)
- Texto: Título + corpo + hashtags
- Logo: Canto (se aplicável)

**Stories:**
- Dimensão: 1080x1920
- Elementos interativos: polls, quizzes, links

**Cover/Capa:**
- Facebook Page: 820x312
- LinkedIn Banner: 1584x396
- YouTube Channel: 2560x1440

#### **E-mail Marketing**

- Largura máxima: 600px
- Imagens: Otimizadas (<100KB)
- Texto alternativo em imagens
- CTA como imagem ou botão HTML

### 3. Hierarquia Visual

**Elementos por ordem de importância:**

1. **CTA** - Maior contraste, mais destacado
2. **Headline** - Segunda maior fonte
3. **Imagem principal** - foco visual
4. **Benefícios** - ícones + texto curto
5. **Logo** - canto superior/direito

### 4. Princípios de Design

**Contraste:**
- Texto sobre imagem: usar overlay ou texto com sombra
- Botão CTA: cor contrastante com fundo

**Espaçamento:**
- Whitespace = profissionalismo
- Agrupar elementos relacionados

**Alinhamento:**
- Tudo alinhado a uma grade
- Texto à esquerda (LTR)
- Centralizar apenas quando intencional

**Consistência:**
- Mesmas cores, fontes, espaçamentos
- Padrões repetidos = reconhecimento

### 5. Estrutura de Entrega

Para cada peça de design:

```
=== [PEÇA DE DESIGN] ===

Dimensões: [WxH]
Formato: [PNG/JPG/SVG/PDF]
Cores usadas: [lista]
Fontes: [lista]
Elementos: [lista]
Specs técnicas: [detalhes]

--- CHECKLIST ---
[ ] Alinhamento verificado
[ ] Cores dentro do padrão
[ ] Contraste WCAG AA
[ ] Resolução adequada
[ ] Espaçamento consistente
[ ] Versão mobile (se aplicável)
```

### 6. Workflow de Criação

```
1. Brief → Entender objetivo
2. Referências → Moodboard
3. Layout → Wireframe/rascunho
4. Design → Aplicar identidade
5. Detalhes → Tipografia, espaçamento
6. Revisão → Alinhamento, cores
7. Export → Formatos corretos
8. Entrega → Organizado por tipo
```

### 7. Formatos de Export

| Uso | Formato | Qualidade |
|-----|---------|-----------|
| Web | PNG, JPG, WebP | Comprimido |
| Print | PDF, AI, EPS | Alta |
| Digital | SVG | Vetor |
| Apresentação | PDF, PPTX | Alta |
| Social | PNG, JPG | Otimizado |

### 8. Checklist de Qualidade

- [ ] Logo está correto e posicionado
- [ ] Cores seguindo palette da marca
- [ ] Tipografia consistente
- [ ] Espaçamento uniforme
- [ ] Alinhamento perfeito
- [ ] Contraste adequado (WCAG AA)
- [ ] Imagens otimizadas
- [ ] Versão mobile criada
- [ ] Arquivos nomeados corretamente
- [ ] Versões em alta e baixa resolução

## Ferramentas Recomendadas

**Principais:**
- Figma (prototipagem e design)
- Canva (design rápido)
- Adobe Illustrator (vetores)
- Adobe Photoshop (imagens)
- Adobe InDesign (print)

**Auxiliares:**
- Coolors.co (paletas)
- Unsplash/Pexels (fotos)
- Flaticon (ícones)
- Remove.bg (remover fundo)

## Boas Práticas

- **Mobile-first**: Design responsivo
- **Acessibilidade**: Contraste, alt text
- **Performance**: Imagens otimizadas
- **Consistência**: Manter padrão em todos os materiais
- **Testar**: Ver em diferentes dispositivos
- **Versões**: Sempre ter arquivo editável (source)
