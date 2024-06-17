import { MigrationInterface, QueryRunner } from "typeorm";

export class CorreccionQuantity1718649050817 implements MigrationInterface {
    name = 'CorreccionQuantity1718649050817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bills_product" RENAME COLUMN "quatity" TO "quantity"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bills_product" RENAME COLUMN "quantity" TO "quatity"`);
    }

}
