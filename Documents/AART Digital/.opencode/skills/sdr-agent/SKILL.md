---
name: sdr-agent
description: Agente de Atendimento (SDR) que qualifica leads via chatbot (Typeform ou WhatsApp), entende o problema do cliente, identifica dores e cria resumo estruturado no CRM. Use para automatizar qualificação de leads, triagem inicial e preparação para venda.
compatibility: Integra com Typeform, WhatsApp Business API, e CRMs (HubSpot, Pipedrive, Salesforce, RD Station)
metadata:
  author: AART Digital
  version: "1.0"
---

# Skill: Agente de Atendimento SDR

Esta skill automatiza a qualificação de leads através de chatbots conversacionais.

## Fluxo de Trabalho

### 1. Configuração Inicial

**Canais de captura:**
- Typeform (formulários interativos)
- WhatsApp Business API (chatbot conversacional)
- Direct message (Instagram, Facebook)

**CRM destino:**
- HubSpot
- Pipedrive
- Salesforce
- RD Station
- Outro (especificar)

### 2. Roteiro de Qualificação

Use a metodologia BANT ou GPCT:

| Campo | Descrição |
|-------|-----------|
| **B** - Budget | Qual o orçamento disponível? |
| **A** - Authority | Quem toma a decisão? |
| **N** - Need | Qual o problema/dor principal? |
| **T** - Timeline | Quando precisa resolver? |

Ou GPCT:
- **G** - Goal (Objetivo)
- **P** - Plan (Plano)
- **C** - Consequence (Consequência)
- **T** - Timeline (Prazo)

### 3. Coleta de Informações

O chatbot deve capturar:

**Dados do Lead:**
- Nome completo
- Email
- Telefone
- Empresa (se B2B)
- Cargo

**Qualificação:**
- Problema/dor principal
- Há quanto tempo tem o problema
- Impacto do problema no negócio
- Soluções já tentadas
- Orçamento
- Timeline
- Decisor ou não

### 4. Estrutura do Resumo no CRM

Crie campos personalizados no CRM:

```
Lead: [Nome]
Empresa: [Empresa]
Cargo: [Cargo]

=== QUALIFICAÇÃO ===
Problema Principal: [Descrever a dor]
Impacto: [Alto/Médio/Baixo] - [Descrição]
Timeline: [Urgente/Este mês/Este trimestre/Sem prazo]
Budget: [Range ou valor]
Decisor: [Sim/Não]

=== PRÓXIMOS PASSOS ===
Próxima ação: [Ligação/Demo/Proposta]
Melhor horário: [XX:XX]
Observações: [Notas adicionais]
```

### 5. Implementação do Chatbot

#### Typeform:
- Criar formulário com lógica condicional
- Usar Typeform Conversations API
- Webhook para enviar ao CRM

#### WhatsApp:
- Configurar Meta Business API
- Criar fluxo de conversação com Quick Replies
- Usar Twilio ou Take Blip como proveedor
- Integrar com CRM via API

### 6. Pontuação de Lead (Scoring)

Atribua pontos para priorização:

| Critério | Pontos |
|----------|--------|
| Budget definido | +20 |
| Decisor | +20 |
| Timeline < 30 dias | +20 |
| Problema claro | +15 |
| Já tentou soluções | +10 |
| Empresa qualificada | +15 |

**Total:** 0-100 (acionar follow-up prioritário se > 70)

### 7. Automação de follow-up

- Se qualificação positiva → criar oportunidade no CRM
- Se qualificação negativa →Lead nurturing (e-mail)
- Se incompleto → reengastar via WhatsApp

### 8. Métricas a Monitorar

- Taxa de qualificação (%)
- Tempo médio de qualificação
- Taxa de conversão lead → oportunidade
- Custo por lead qualificado

## Integrações Comuns

```javascript
// Exemplo: Typeform → HubSpot
const handleTypeformWebhook = async (data) => {
  const lead = {
    email: data.email,
    firstname: data.nome,
    company: data.empresa,
    problema_principal: data.problema,
    budget: data.orcamento,
    timeline: data.prazo
  };
  
  await hubspot.contacts.create(lead);
};
```

## Boas Práticas

- **Tempo de resposta**: < 5 minutos
- **Tom de voz**: Profissional mas amigável
- **Perguntas uma de cada vez**: Evitar sobrecarga
- **Validação inline**: Confirmar dados importantes
- **Fallback**: Opção de falar com humano se necessário
- **Consentimento LGPD**: Sempre pedir permissão para comunicação
