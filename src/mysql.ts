import { knex, Knex } from "knex";

export const createPool = (connection: any): Knex => knex({
	client: "mysql2",
	connection
});