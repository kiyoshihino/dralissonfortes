---
name: landing-page
description: Cria landing pages profissionais e de alta conversão. Use quando o usuário precisar de páginas de captura, páginas de venda, páginas de obrigado, ou qualquer landing page para campanhas de marketing digital.
compatibility: Requer projeto web existente (React, Next.js, Vue, ou HTML/CSS simples)
metadata:
  author: AART Digital
  version: "1.0"
---

# Skill: Criação de Landing Pages

Esta skill ajuda a criar landing pages de alta conversão para campanhas de marketing digital.

## Fluxo de Trabalho

### 1. Análise do Projeto
- Verificar o framework/stack do projeto (React, Next.js, Vue, HTML puro)
- Identificar component library utilizada (Tailwind, MUI, Bootstrap, styled-components)
- Verificar variáveis de design existentes (cores, tipografia, spacing)

### 2. Coleta de Informações
Antes de criar, colete:
- **Objetivo da página**: Captura de leads, venda de produto, webinar, ebook, etc.
- **Público-alvo**: Quem vai acessar a página
- **CTA principal**: O que o usuário deve fazer (inscrever-se, comprar, etc.)
- **Elementos obrigatórios**: Formulário, depoimentos, benefícios, preço
- **Conteúdo**: Textos, imagens, logos fornecidos pelo usuário

### 3. Estrutura da Landing Page
Uma landing page de conversão deve conter:

```
- Header (logo + navegação mínima)
- Hero Section
  - Headline impactante
  - Subheadline
  - CTA principal
  - Imagem/ilustração do produto
- Seção de Benefícios (3-6 pontos)
- Seção de Depoimentos (social proof)
- Seção de Preço (se aplicável)
- FAQ (opcional)
- Footer com direitos autorais
```

### 4. Boas Práticas de Conversão

- ** headline**: Clara, específica e orientada ao benefício
- **CTA**: Botão grande, destacado, com texto de ação
- **Imagens**: Usar imagens reais, não placeholders genéricos
- **Confiança**: Incluir depoimentos, logos de clientes, selos de segurança
- **Velocidade**: Otimizar imagens, evitar scripts pesados
- **Mobile-first**: Design responsivo é obrigatório
- **Contraste**: CTA deve se destacar visualmente

### 5. Implementação

#### Para projetos React/Next.js:
- Criar componente reutilizável
- Usar props para conteúdo dinâmico
- Integrar com formulário (React Hook Form, Formik)
- Adicionar analytics/tracking

#### Para HTML/CSS:
- Criar arquivo HTML semântico
- Usar CSS externo ou inline-critical
- Garantir accessibility (ARIA, contrast)

### 6. Validação Final

- [ ] Página carrega sem erros
- [ ] Formulário funciona corretamente
- [ ] Design responsivo (mobile, tablet, desktop)
- [ ] CTA está visível e clicável
- [ ] Imagens estão otimizadas
- [ ] SEO básico (title, meta description)
- [ ] Accessibility (contraste, aria-labels)

## Exemplos de CTAs

- "Quero garantir minha vaga"
- "Baixar ebook grátis"
- "Começar teste gratuito"
- "Falarp com consultor"
- "Comprar agora"

## Scripts Úteis

Execute para validar a página:
- Lighthouse audit (performance, accessibility, SEO)
- Teste em múltiplos navegadores
- Teste em dispositivos reais
