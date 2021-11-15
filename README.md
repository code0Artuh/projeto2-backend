# projeto2-backend

API criada com node, express e mongoDB.

contem 3 rotas com subrotas:

- Paises
     - nome
     - população
     - lingua mãe
     - PIB

- Estados
     - nome
     - região
     - população
     - valor salario minimo

- Cidades
     - nome
     - quantidade de bairros
     - população
     - data de aniversão da cidade

Cada rota contem as opções criar, listar todos, listar por id, editar por id e deletar por id.

Tabela das rotas:
- Paises
     - /paises/listall
     - /paises/listname/id
     - /paises/edit/id
     - /paises/delete/id

- Estados
     - /estados/listall
     - /estados/listname/id
     - /estados/edit/id
     - /estados/delete/id

- Cidades
     - /cidades/listall
     - /cidades/listname/id
     - /cidades/edit/id
     - /cidades/delete/id

O projeto contem uma collection para ser utilizada na extensão thunder client para realizar testes de conexão em todas as rotas.

O projeto esta rodando com a conexão direta com o mongoDB, porem esta devidamente configurado para a utilização do dotenv caso queira,
basta trocar o conteudo do link para process.env.(opção desejada).
