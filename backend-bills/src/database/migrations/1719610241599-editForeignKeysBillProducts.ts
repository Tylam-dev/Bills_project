import { MigrationInterface, QueryRunner } from "typeorm";

export class EditForeignKeysBillProducts1719610241599 implements MigrationInterface {
    name = 'EditForeignKeysBillProducts1719610241599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bills_product" DROP CONSTRAINT "FK_8923d23cf0c7282d2c48282fc0a"`);
        await queryRunner.query(`ALTER TABLE "bills_product" ADD CONSTRAINT "FK_8923d23cf0c7282d2c48282fc0a" FOREIGN KEY ("bills_id") REFERENCES "bill"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bills_product" DROP CONSTRAINT "FK_8923d23cf0c7282d2c48282fc0a"`);
        await queryRunner.query(`ALTER TABLE "bills_product" ADD CONSTRAINT "FK_8923d23cf0c7282d2c48282fc0a" FOREIGN KEY ("bills_id") REFERENCES "bill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
