---
name: master-skill
description: >
  Orquestrador mestre de frameworks e skills de IA. Instala BMad, Spec-Kit, Antigravity Kit ou skills da biblioteca externa no projeto atual. 
  ATIVE ESTE SKILL EXCLUSIVAMENTE quando o usuário chamar o comando /master-skill.
  NÃO ative em nenhuma outra situação — este skill responde APENAS ao comando explícito /master-skill.

  Quando ativado, interpreta a instrução fornecida após o comando e executa:
  - Inicialização via `/master-skill init`
  - Instalação de frameworks de IA no projeto atual: BMad Method, Spec-Kit, Antigravity Kit
  - Busca e instalação de skills de uma pasta externa no projeto atual

  Exemplos de ativação (SOMENTE via /master-skill):
  - /master-skill init
  - /master-skill instale o BMad
  - /master-skill instale o Antigravity Kit
  - /master-skill configure o Spec-Kit nesse projeto
  - /master-skill quero a skill de brainstorm
  - /master-skill instale a skill de code-review
  - /master-skill liste as skills disponíveis

metadata:
  author: Sandeco
  version: "1.0"
---

# Master Skill — Orquestrador de Frameworks e Skills

Esta skill é um orquestrador que gerencia a instalação de frameworks de IA e skills externas no projeto atual.

---

## Fluxo de Trabalho

### Passo 0 — Verificar se é o comando `init`

Se a instrução após `/master-skill` for **`init`** (ou variações como "inicializar", "iniciar", "setup inicial", "primeira configuração"), execute o **Fluxo de Inicialização** abaixo.

Para qualquer outra instrução, vá para o **Passo 1 — Carregar Configuração**.

---

### Fluxo de Inicialização (`/master-skill init`)

Este comando configura o Master Skill pela primeira vez.

#### Etapa 1 — Solicitar a pasta de skills externas

> 📁 **Pasta de Skills Externas**
>
> Informe o caminho completo da pasta onde suas skills customizadas estão armazenadas.
> Exemplo: `/Users/seuusuario/Skills` ou `./skills`

Aguarde a resposta do usuário e:
1. Verifique se a pasta existe no sistema de arquivos
2. Se não existir, informe o erro e peça um novo caminho

#### Etapa 2 — Salvar configuração

Crie o arquivo `settings.json` na pasta desta skill:

```
.opencode/skills/master-skill/config/settings.json
```

Conteúdo do arquivo:

```json
{
  "skills_folder": "<caminho-informado-pelo-usuario>"
}
```

#### Etapa 3 — Confirmar e concluir

> ✅ **Master Skill inicializado com sucesso!**
>
> - **Pasta de skills externas:** `<caminho-informado>`
> - **Configuração salva em:** `.opencode/skills/master-skill/config/settings.json`
>
> Agora você pode usar `/master-skill` normalmente. Exemplo:
> `/master-skill quero a skill de brainstorm`

---

## Passo 1 — Carregar Configuração

O `settings.json` fica em `.opencode/skills/master-skill/config/settings.json`.

### Caso A — `settings.json` não existe

Apresente:

> ⚠️ **Configuração não encontrada.**
>
> Execute `/master-skill init` para configurar o ambiente antes de continuar.

### Caso B — `settings.json` encontrado

Leia o campo `skills_folder` e use nas operações a seguir.

---

## Passo 2 — Identificar a Intenção

Leia a instrução após `/master-skill` e classifique:

| Categoria | Quando usar | Exemplos |
|-----------|-------------|---------|
| **A — Framework** | Menciona BMad, BMAD, Spec-Kit, SpecKit, Antigravity, antigravity-kit | "instale o BMad", "quero o Spec-Kit", "setup do Antigravity Kit" |
| **B — Skill Externa** | Menciona "skill de X", "quero a skill X", "instale a skill X", "liste skills" | "quero a skill de brainstorm", "instale code-review", "liste as skills" |
| **C — Reconfigurar** | Menciona "mudar pasta", "trocar agente", "reconfigurar", "nova pasta de skills" | "muda a pasta de skills", "reconfigurar" |

Se a intenção for ambígua, pergunte ao usuário antes de prosseguir.

---

## A — Instalação de Frameworks

Leia o arquivo de referência correspondente para instruções detalhadas:

- **BMad Method** → `references/bmad.md`
- **Spec-Kit (GitHub)** → `references/speckit.md`
- **Antigravity Kit** → `references/antigravity.md`

Após a leitura, execute a instalação conforme as instruções do arquivo de referência.

---

## B — Skills Externas

Use o valor de `skills_folder` do `settings.json`.

### Listar skills disponíveis

```bash
ls -la <skills_folder>
```

Para cada skill encontrada, leia o campo `name` e `description` do frontmatter YAML e apresente ao usuário de forma organizada.

### Buscar uma skill por intenção

1. Liste as skills na pasta
2. Leia o `description` do SKILL.md para confirmar a relevância
3. Se encontrar múltiplas opções, apresente ao usuário e peça para escolher
4. Se não encontrar nenhuma, informe o usuário

### Instalar uma skill no projeto atual

#### Passo 1 — Detectar o agente do projeto

Verifique quais pastas de configuração existem na **raiz do projeto atual**:

| Pasta encontrada | Destino da skill |
|-----------------|-----------------|
| `.claude/` | `.claude/skills/<skill-nome>/` |
| `.agent/` | `.agent/skills/<skill-nome>/` |
| `.gemini/` | `.gemini/skills/<skill-nome>/` |
| `.agents/` | `.agents/skills/<skill-nome>/` |
| `.cursor/` | `.cursor/skills/<skill-nome>/` |
| `.windsurf/` | `.windsurf/skills/<skill-nome>/` |
| `.github/` | `.github/skills/<skill-nome>/` |

Se mais de um agente for detectado, pergunte ao usuário para qual deseja instalar.
Se nenhuma pasta for encontrada, pergunte ao usuário qual agente está usando no projeto.

#### Passo 2 — Copiar a skill preservando subpastas

Calcule o caminho relativo da skill dentro de `skills_folder` e copie para o destino.

Após copiar:
- Confirme o sucesso listando a pasta de destino
- Informe ao usuário como chamar a skill recém-instalada

---

## C — Reconfigurar

Quando o usuário quiser mudar a pasta de skills:

1. Colete o novo caminho da pasta de skills
2. Verifique se o caminho existe
3. Atualize o `settings.json`
4. Confirme: _"✅ Configuração atualizada com sucesso."_

---

## Fluxo Completo

```
/master-skill init
       ↓
Solicitar pasta de skills externas
       ↓
Salvar settings.json
       ↓
Confirmar ✅

/master-skill <instrução>
       ↓
[Passo 1] Ler settings.json
       ↓
  Não encontrado? ──→ Orientar para /master-skill init
       ↓
[Passo 2] Identificar intenção
       ↓
  [A - Framework] ────→ Ler references/<framework>.md → Instalar → Confirmar
  [B - Skill]     ────→ Buscar em skills_folder → Copiar → Confirmar
  [C - Reconfig]  ────→ Coletar novos valores → Atualizar settings.json → Confirmar
```

---

## Notas importantes

- **Nunca sobrescreva** arquivos ou pastas existentes sem confirmação explícita do usuário
- **Confirme sempre o diretório do projeto** antes de instalar qualquer coisa
- Para frameworks que precisam de `npx`, `uvx` ou `pip`, verifique se a ferramenta está disponível
- Após qualquer instalação bem-sucedida, informe os **próximos passos** ao usuário
