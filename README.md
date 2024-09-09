
# Woman Services Platform

A Woman Services Platform é uma API desenvolvida para conectar clientes a servidoras, facilitando a contratação de serviços de confiança. Esta plataforma permite o cadastro de clientes e servidoras, a criação de solicitações e a gestão desses serviços.

## Funcionalidades

- **Cadastro de Clientes e Servidoras**: Permite que clientes e servidoras se cadastrem na plataforma.
- **Criação e Gestão de Solicitações**: Clientes podem criar solicitações de serviço, e servidoras podem pegar essas solicitações.
- **Busca de Servidoras**: Cliente pode buscar servidoras por cidade e email.

## Tecnologias Utilizadas

- **Backend**: Node.js com NestJS
- **Banco de Dados**: PostgreSQL
- **TypeORM**: Para interação com o banco de dados
- **Swagger**: Para documentação da API
- **Docker**: Para containerização
- **Railway**: Para deploy da aplicação

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/majudlorenzoni/woman-services-plataform
   ```

2. **Navegue para o diretório do projeto:**

   ```bash
   cd woman-services-platform
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto com a configuração necessária. Exemplo de configuração:

   ```env
   DATABASE_URL=postgres://user:password@host:port/database
   ```

5. **Compile o projeto:**

   ```bash
   npm run build
   ```

6. **Inicie o projeto:**

   ```bash
   npm run start:dev
   ```


## Deploy

A aplicação está configurada para deploy no Railway. As configurações de build e deploy estão definidas em `.railway/railway.json`.

## Documentação da API

A documentação da API está disponível via Swagger. Após iniciar a aplicação, acesse:

```
http://localhost:3000/api/
```
