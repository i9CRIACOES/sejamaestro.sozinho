# Seja Maestro Individual

Assessment com a identidade visual Maestro e conteúdo do artefato autorizado. Cinco módulos, vinte notas de 0 a 10, radar, maior dor, valor em risco, rota e link original de agendamento.

A interface reutiliza os componentes aprovados do Seja Maestro. São seis estações: contexto e cinco módulos. Cada estação exige confirmação explícita. Após preencher os dados, a pessoa recebe por e-mail um link pessoal para o resultado, válido por sete dias. O resultado não aparece na tela do formulário.

As notas de cada módulo são médias simples e a maturidade geral é a média dos cinco módulos. Empates priorizam o primeiro módulo. Limiares: 3 e 7. Referências de receita: R$300 milhões, R$750 milhões, R$2,5 bilhões e R$5 bilhões. Risco: receita × (5% + (10 − maturidade) / 10 × 25%). São estimativas indicativas do método do artefato.

## Verificar

Node22 e PHP8.0 ou superior: `npm ci`, `npm test`, `npm run build`, `php test/api.php`, `node scripts/testar-api.mjs`. O teste HTTP captura o e-mail em um servidor SMTP local.

## Publicar

Actions gera a branch `deploy`. Conecte-a no Git do Plesk com destino `sejamaestroindividual.aodigital.net.br`. Publique somente dist: index.html, assets e api. Ative PHP. Copie server/config.example.php para `/.sejamaestro-individual/config.php` fora da raiz pública, ou configure `SEJAMAESTRO_INDIVIDUAL_PRIVATE_DIR`. O usuário PHP precisa de escrita e os dados não podem ser servidos por HTTP.

Ative `habilitado` após configurar armazenamento, remetente autorizado e HTTPS. O participante recebe o link pessoal por e-mail. A API retorna somente a confirmação do envio; o resultado só é entregue mediante token válido.

A API recalcula resultados e limita envios. Respostas privadas não entram no Git nem no deploy. Defina rotina de retenção e consulta operacional desses registros. Verifique armazenamento e notificação antes da divulgação pública.

O webhook GitHub → Plesk acompanha a branch deploy. Cada push em main passa pelo CI e gera o build; version.json expõe somente o SHA de origem para verificar a publicação.

Para reverter, reverta em main e publique o novo build após CI. Confira o commit no Plesk e na URL. Os registros privados permanecem fora do deploy.

Falhas de rede ou validação mantêm o formulário editável e permitem repetir o envio. Opções suportam setas/Home/End, os controles anunciam o enunciado completo e têm área de toque de 44px.
