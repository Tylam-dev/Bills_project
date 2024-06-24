import { MigrationInterface, QueryRunner } from "typeorm";

export class Creations1719261966001 implements MigrationInterface {
    name = 'Creations1719261966001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories_outcome" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_368860efa1e7cdf377c9a42ab1e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bill" ("id" SERIAL NOT NULL, "description" character varying(255) NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_683b47912b8b30fe71d1fa22199" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bills_product" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "cost_unit" double precision NOT NULL, "bills_id" integer, "products_id" integer, CONSTRAINT "PK_e5f768960f884793b5d7deacc83" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "subcategories_outcome_id" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sub_categories_outcome" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "categories_out_id" integer, CONSTRAINT "PK_74798cbb362f5db05decc9f5650" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories_income" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4e1d4d3507e80ddbe333cbb65be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "income" ("id" SERIAL NOT NULL, "description" character varying(255) NOT NULL, "mount" bigint NOT NULL, "date" date NOT NULL, "categories_inc_id" integer, CONSTRAINT "PK_29a10f17b97568f70cee8586d58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bills_product" ADD CONSTRAINT "FK_8923d23cf0c7282d2c48282fc0a" FOREIGN KEY ("bills_id") REFERENCES "bill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bills_product" ADD CONSTRAINT "FK_036031f653ff9f66a20643a1856" FOREIGN KEY ("products_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_afc0ec13593d790dbd4b1a774b2" FOREIGN KEY ("subcategories_outcome_id") REFERENCES "sub_categories_outcome"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_categories_outcome" ADD CONSTRAINT "FK_65200827c85be914b0e82bcd263" FOREIGN KEY ("categories_out_id") REFERENCES "categories_outcome"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "income" ADD CONSTRAINT "FK_31dd708fc9079f5ebe588a6ada1" FOREIGN KEY ("categories_inc_id") REFERENCES "categories_income"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "income" DROP CONSTRAINT "FK_31dd708fc9079f5ebe588a6ada1"`);
        await queryRunner.query(`ALTER TABLE "sub_categories_outcome" DROP CONSTRAINT "FK_65200827c85be914b0e82bcd263"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_afc0ec13593d790dbd4b1a774b2"`);
        await queryRunner.query(`ALTER TABLE "bills_product" DROP CONSTRAINT "FK_036031f653ff9f66a20643a1856"`);
        await queryRunner.query(`ALTER TABLE "bills_product" DROP CONSTRAINT "FK_8923d23cf0c7282d2c48282fc0a"`);
        await queryRunner.query(`DROP TABLE "income"`);
        await queryRunner.query(`DROP TABLE "categories_income"`);
        await queryRunner.query(`DROP TABLE "sub_categories_outcome"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "bills_product"`);
        await queryRunner.query(`DROP TABLE "bill"`);
        await queryRunner.query(`DROP TABLE "categories_outcome"`);
    }

}
