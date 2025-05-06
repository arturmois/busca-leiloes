# Busca Leilões

Aplicação para processamento e armazenamento de dados de imóveis em leilão da Caixa Econômica Federal.

## Descrição

Este aplicativo automatiza o processo de coleta e armazenamento de dados de imóveis em leilão disponibilizados pela Caixa Econômica Federal. O sistema baixa o arquivo CSV da lista de imóveis, processa os dados e os armazena em um banco de dados para consultas e análises posteriores.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd busca-leiloes
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/busca_leiloes
```

4. Execute as migrações do banco de dados:
```bash
npm run migrate
```

## Uso

1. Para iniciar o processamento dos dados:
```bash
npm start
```

2. Para executar em modo de desenvolvimento:
```bash
npm run dev
```

## Funcionalidades

- Processamento e normalização dos dados
- Armazenamento em banco de dados PostgreSQL
- API REST para consulta dos dados processados

## Estrutura do Projeto

```
busca-leiloes/
├── src/
│   ├── controllers/    # Controladores da aplicação
│   ├── models/        # Modelos do banco de dados
│   ├── services/      # Serviços de negócio
│   └── utils/         # Utilitários
├── migrations/        # Migrações do banco de dados
├── tests/            # Testes automatizados
└── config/           # Configurações da aplicação
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
