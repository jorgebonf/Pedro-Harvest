# Pedro · O Contador da Harvest — pacote para publicar (PWA)

## Arquivos
| Arquivo | Para que serve |
|---|---|
| index.html | O aplicativo completo (glossário HV26 embutido) |
| manifest.webmanifest | Nome, cores e ícones da instalação |
| sw.js | Faz o app abrir sem internet (guarda só o app, nunca as despesas) |
| icons/ | Ícones para celular, computador e iPhone |
| 404.html e .nojekyll | Ajudas para o GitHub Pages |

## Publicar no GitHub Pages (repositório NOVO, separado do Pedro pessoal)
1. No GitHub: + → New repository → nome `pedro-harvest` → Public → Create repository.
2. Clique em "uploading an existing file" e arraste TODO o conteúdo desta pasta (inclusive a pasta icons). O index.html deve ficar na raiz.
3. Commit changes.
4. Settings → Pages → Deploy from a branch → main → /(root) → Save.
5. Em alguns minutos o endereço será: https://SEU-USUARIO.github.io/pedro-harvest/

## Instalar
- Android (Chrome): ⋮ → Instalar app (abra o link no Chrome, não dentro do WhatsApp/Teams).
- iPhone (Safari): Compartilhar ⬆ → Adicionar à Tela de Início.
- Computador (Chrome/Edge): botão "Instalar Pedro" ou ícone de instalar na barra de endereço.

## Como funciona
- Cada profissional informa o nome no primeiro acesso; os dados ficam só no aparelho dele.
- Início: dinheiro em poder (adiantamentos − despesas), total gasto, prestado conta e a prestar.
- Ao consumir 80% do adiantamento (ajustável), o Pedro avisa que já é possível solicitar outro.
- Cada despesa puxa o código Harvest, o código da descrição do Argo, o Tipo Argo e valida os limites:
  Perdiem R$ 19,00/noite · Refeição até R$ 45,00 (almoço só fim de semana/feriado) · Lavanderia até R$ 70,00 a cada 7 dias · Hospedagem balcão sem limite (informa nº de diárias).
- Aba 📝 Argo: texto pronto da descrição de cada despesa (código + detalhamento, no padrão do glossário), com copiar e marcar como lançada. O modelo de cada categoria é editável no Glossário.
- "Prestar conta em lote" marca várias despesas como prestadas, com o nº da prestação.
- Planilha: em Despesas, “⬇ Template Excel” baixa o modelo (.xlsx com lista de categorias) e “⬆ Importar planilha” sobe despesas em lote (.xlsx ou .csv), com prévia, limites e descarte de duplicadas.
- Início: gráficos de pizza por valor e por quantidade de lançamentos em cada categoria.
- Glossário: consulta sempre; edição só pelo botão "Editar glossário".

## Atualizar no futuro
Substitua o index.html no repositório e aumente VERSION no sw.js (ex.: h1.0.0 → h1.0.1).

## Dados
- Celular e computador NÃO sincronizam. Use Configurações → Backup JSON / Importar backup para levar dados de um aparelho a outro.
- Nunca suba backups ou CSVs de despesas para o GitHub (o repositório é público).
