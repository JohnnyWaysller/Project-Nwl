import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({                   //configuracao base foi pega na documentacao do drizzle
        schema: "./src/db/schema.ts",                  //foram feito modificacoes     
        out:'./.migrations',    //pasta onde fica arquivos de migration(define linha do tempo do BD)
        dialect: 'postgresql',  //seleciona qual BD
        dbCredentials:{         //url postgre pego no site Neon DB Online
            url: env.DATABASE_URL,
        },
    })
    //OBS url: process.env.DATABASE_URL foi substituido por env.DATABASE_URL,
    //url em .Env 'postgresql://neondb_owner:ix2XHvrFUC9E@ep-shiny-sun-a56f4y8w.us-east-2.aws.neon.tech/neondb?sslmode=require'
    //caso utiliza-se docker: em url seria:
    //'postgresql://docker:docker@localhost:5432/inorbit' // aqui tem dados das credenciais e nome  db
    //porem nao é boa pratica utilizar dessa forma, e normalmente utiliza variaveis de ambiente
    //serao configuradas no arquivo.env