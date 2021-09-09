# Desafio Keycash

Este reprositório contém uma prova feita para um processo seletivo, ela se trata de um CRUD básico que ,anipula informações de um imóvel, que são:

- tipo: casa, apartamento, etc
- descrição: um texto descritivo
- endereço
- numero do endereço: o numero da localidade podendo aceitar textos, por exemplo 23 A, ou 150
- complemento do endereço
- bairro
- cep
- quantidade de quartos em numeral
- quantiade de vagas de garagem em numeral
- metragem da propriedade em metros quadrados em numeral
- valor de revenda
- valor de aluguel

Há na rota /api-docs/ uma documentação em swagger disponível para ver os dados obrigatórios e cada chamada do CRUD

## Como usar


### Com Docker

Com o docker instalado em sua máquina execute o comando abaixo

	- docker-compose up

Com a máquina iniciada aparecerá uma instrução escrito "Server connected, port 8000". Em casos onde há uma máquina windows rodando a docker toolbox a mensagem pode não aparecer.
Para visualizar acesse os endereços abaixo:

	 - http://localhost - para máquinas linux ou instalalções de Windows com "Docker for Windows"
	 - http://<endereço_ip_da_máquina_docker> - para instalações Windows com "Docker Toolbox"

Com isso utilize uma das chamdas em nas URLs listadas acima para a rota property, por exemplo, abra no seu navegador "http://localhost:8000/property" e uma lista vazia será renderizada.

### Com NodeJs
O primeiro passo será instalar, caso não haja em sua máquina o MySQL

Crie dentro do MYSQL a tabela "challengedatabase"
Execute o comando abaixo para instalar todas as dependências:

  - npm install

Então execute o comando abaixo:

	- npm run start