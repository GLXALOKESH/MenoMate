import dotenv from "dotenv"

export const DB_NAME = "menomate"
export const DOTENV_PATH = dotenv.config({
    path:"./.env"
})