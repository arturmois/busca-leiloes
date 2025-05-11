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

2. Instale as dependências do backend:
```bash
cd backend
npm install
```

3. Instale as dependências do frontend:
```bash
cd ../frontend
npm install
```

4. Configure as variáveis de ambiente do backend:
Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/busca_leiloes
```

5. Execute as migrações do banco de dados:
```bash
cd backend
npm run migrate
```

## Uso

### Backend

1. Para iniciar o servidor backend:
```bash
cd backend
npm start
```

2. Para executar em modo de desenvolvimento:
```bash
cd backend
npm run dev
```

### Frontend

1. Para iniciar o servidor de desenvolvimento do frontend:
```bash
cd frontend
npm run dev
```

2. Para build de produção:
```bash
cd frontend
npm run build
```

## Funcionalidades

### Backend
- Processamento e normalização dos dados
- Armazenamento em banco de dados PostgreSQL
- API REST para consulta dos dados processados

### Frontend
- Interface web moderna e responsiva
- Visualização dos dados de leilões
- Filtros e busca avançada
- Dashboard com estatísticas

## Estrutura do Projeto

```
busca-leiloes/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Controladores da aplicação
│   │   ├── models/        # Modelos do banco de dados
│   │   ├── services/      # Serviços de negócio
│   │   └── utils/         # Utilitários
│   ├── migrations/        # Migrações do banco de dados
│   ├── tests/            # Testes automatizados
│   └── config/           # Configurações da aplicação
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── services/     # Serviços de API
│   │   ├── hooks/        # Custom hooks
│   │   ├── contexts/     # Contextos React
│   │   └── utils/        # Utilitários
│   ├── public/           # Arquivos estáticos
│   └── tests/            # Testes do frontend
└── docker-compose.yml    # Configuração do Docker
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
