import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      database: 'qwe',
      username: 'qwe',
      password: 'qwe',
      // entities: [join(__dirname, '**')]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
