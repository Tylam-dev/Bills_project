import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { IncomeModule } from './income/income.module';
import { OutcomeModule } from './outcome/outcome.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    IncomeModule,
    OutcomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
