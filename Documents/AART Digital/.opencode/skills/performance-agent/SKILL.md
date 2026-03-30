---
name: performance-agent
description: Agente de Performance que analisa relatórios de Meta Ads e Google Ads, identifica oportunidades de otimização e sugere ajustes de orçamento, lance e segmentação automaticamente. Use para melhorar ROI e reduzir CPA de campanhas.
compatibility: Requer acesso aos relatórios das plataformas (Meta Ads Manager, Google Ads, GA4) e dados de conversão
metadata:
  author: AART Digital
  version: "1.0"
---

# Skill: Agente de Performance de Ads

Esta skill analisa relatórios de campanhas e sugere otimizações automáticas baseadas em dados.

## Fluxo de Trabalho

### 1. Coleta de Dados

**Fontes de dados:**
- Meta Ads Manager (Facebook/Instagram)
- Google Ads (Search, Display, Shopping)
- Google Analytics 4
- CRM (conversões, receita)

**Métricas essenciais:**
| Métrica | Definição |
|---------|-----------|
| CTR | Taxa de cliques |
| CPC | Custo por clique |
| CPM | Custo por mil impressões |
| CPA | Custo por aquisição |
| ROAS | Retorno sobre investimento |
| Conversão | Ação desejada (lead, venda) |
| Taxa de conversão | Visitantes que convertem |

### 2. Análise de Performance

**KPIs por Canal:**

| Indicador | Bom | Atenção | Crítico |
|-----------|-----|---------|---------|
| CTR | >1.5% | 1-1.5% | <1% |
| CPA | <R$50 | R$50-100 | >R$100 |
| ROAS | >3x | 2-3x | <2x |
| Frequência | <4 | 4-6 | >6 |

**Análise de Campanha:**

```
=== ANÁLISE [CAMPANHA] ===

Métricas atuais:
- Gasto: R$ X
- Impressões: X
- Cliques: X
- CTR: X%
- Conversões: X
- CPA: R$ X
- ROAS: Xx

Comparação com período anterior:
- Gasto: [+/-]%
- Conversões: [+/-]%
- CPA: [+/-]%
```

### 3. Diagnóstico Automático

**Problemas Comuns e Soluções:**

| Problema | Sinal | Ação Automática |
|----------|-------|------------------|
| Baixo CTR | <0.8% | Novas creatividades, refresh ads |
| CPA alto | >150% do target | Reduzir lance, revisar segmento |
| Baixa conversão | <1% | Otimizar landing page, copy |
| Ad fatigue | Frequência >5 | Novos ads, lookalike |
| Baixo volume | <10 conv/semana | Ampliar orçamento, novos segmentos |
| ROAS baixo | <2x | Reduzir CPC, focar conversões |

### 4. Ajustes Recomendados

**Orçamento:**
```
Se CPA > Target:
  → Reduzir orçamento em 20-30%
  → Ou aumentar target de CPA

Se ROAS > 4x:
  → Aumentar orçamento em 20-50%
  → Escalar campanhas winners

Se ROAS < 2x:
  → Pausar campanha
  → Ou testar novos creatives
```

**Lances (Bidding):**
```
Baixa conversão + alto CPC:
  → Mudar parabidding manual
  → Reduzir lance em 15%

Alta conversão + baixo CPC:
  → Manter ou aumentar lance
  → Considerar bid+ automático
```

**Segmentação:**
```
Performers:
  → Criar lookalike de buyers
  → Excluir não convertidos
  → Warm audience

Underperformers:
  → Excluir não qualificados
  → Novos interesses
  → Broad targeting teste
```

### 5. Relatório de Otimização

**Estrutura do Relatório:**

```
=== RELATÓRIO DE PERFORMANCE ===

Período: [DATA] - [DATA]
Total gasto: R$ X
Total conversões: X
CPA médio: R$ X
ROAS médio: Xx

--- CAMPANHAS OTIMIZADAS ---

[CAMPANHA 1]
Status: [Ativa/Pausada]
Problema: [Descrição]
Ação: [Ajuste recomendado]
Prioridade: [Alta/Média/Baixa]

[CAMPANHA 2]
...

--- NOVAS RECOMENDAÇÕES ---
1. [Ação]
2. [Ação]
3. [Ação]

--- PRÓXIMA ANÁLISE ---
Data: [Data]
```

### 6. Automação de Ajustes

**Regras Automáticas:**

| Condição | Ação Automática |
|----------|------------------|
| CPA > R$100 por 3 dias | Reduzir lance 20% |
| ROAS > 5x por 5 dias | Aumentar orçamento 30% |
| CTR < 0.5% por 7 dias | Pausar ad |
| Conversões > 50/dia | Escalar orçamento |
| Frequency > 7 | Excluir do targeting |

**Configurações sugeridas:**
- Revisão diária: Análise rápida
- Revisão semanal: Ajustes estratégicos
- Revisão mensal: Reavaliação de campanha

### 7. Escala de Campanhas Winners

**Critérios para escalar:**
- ROAS > 4x sustentado (7+ dias)
- CPA < target
- Volume > 50 conversões/semana
- Margem > 30%

**Estratégia de escala:**
1. Aumentar orçamento (20-30% por semana)
2. Adicionar novos ads (creatives)
3. Expandir segmentação (lookalike)
4. Novas campanhas (testes)

### 8. A/B Testing Contínuo

**Testes prioritários:**
| Teste | Duração | Métrica sucesso |
|-------|---------|-----------------|
| Creative | 7 dias | CTR, CPA |
| Copy | 7 dias | CTR, Conversão |
| Segmentação | 14 dias | CPA, Volume |
| Landing | 14 dias | Taxa conversão |
| Lance | 7 dias | CPA, ROAS |

### 9. Dashboard de Monitoramento

**Métricas Diárias:**
- Gasto do dia
- Conversões do dia
- CPA do dia
- Alertas (anomalias)

**Métricas Semanais:**
- Evolução vs semana anterior
- Campanhas Top/Flop
- Recomendações pendentes

### 10. Checklist de Otimização

- [ ] Verificar métricas diárias
- [ ] Identificar campanhas below target
- [ ] Aplicar ajustes de lance
- [ ] Pausar ads fatigue
- [ ] Escalar campanhas winners
- [ ] Revisar segmentos performáticos
- [ ] Testar novos creatives
- [ ] Atualizar relatório
- [ ] Executar regras automáticas
- [ ] Documentar aprendizados

## Boas Práticas

- **Paciência**: Esperar 48-72h para stabilization
- **Uma mudança por vez**: Isolar variáveis
- **Documentar**: Registrar o que funcionou
- **Automações suaves**: Ajustes graduais
- **Sazonalidade**: Considerar picos e baixas
- **Cross-device**: Acompanhar jornada completa
- **Atribuição**: Usar modelo correto (data-driven)

## Ferramentas Recomendadas

- Meta Ads Manager
- Google Ads
- Google Analytics 4
- Supermetrics / Windata
- Looker Studio (dashboards)
- Zapier (automations)
