import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule} from '@nestjs/typeorm'
import { DistritoModule } from './distrito/distrito.module';
import { GeneroModule } from './genero/genero.module';
import { EstadocivilModule } from './estadocivil/estadocivil.module';
import { UnidadModule } from './unidad/unidad.module';
import { TipoModule } from './tipo/tipo.module';
import { CategoriaestudianteModule } from './categoriaestudiante/categoriaestudiante.module';
import { CategoriacursoModule } from './categoriacurso/categoriacurso.module';
import { CicloModule } from './ciclo/ciclo.module';
import { FacultadModule } from './facultad/facultad.module';
import { TurnoModule } from './turno/turno.module';
import { ModalidadModule } from './modalidad/modalidad.module';
import { CarreraModule } from './carrera/carrera.module';
import { CursoModule } from './curso/curso.module';
import { ProfesorModule } from './profesor/profesor.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MatriculaModule } from './matricula/matricula.module';
import { DetallematriculaModule } from './detallematricula/detallematricula.module';
import { PabellonModule } from './pabellon/pabellon.module';
import { NotasModule } from './notas/notas.module';
import { DetallenotaModule } from './detallenota/detallenota.module';
import { MailerModule } from './mailer/mailer.module';
import { EmailController } from './mailer/mailer.controller'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mssql', 
      host:'renacyt-db.database.windows.net',
      port:1433,
      username:'adminrenacyt',
      password: '@@IATech2025@@',
      database: 'UCV_DB',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
      options: {
        encrypt: true,  // Habilita cifrado
        trustServerCertificate: true  // Aceptar certificados auto-firmados
      },
    }),
    UsuarioModule,
    DistritoModule,
    GeneroModule,
    EstadocivilModule,
    UnidadModule,
    TipoModule,
    CategoriaestudianteModule,
    CategoriacursoModule,
    CicloModule,
    FacultadModule,
    TurnoModule,
    ModalidadModule,
    CarreraModule,
    CursoModule,
    ProfesorModule,
    EstudianteModule,
    MatriculaModule,
    DetallematriculaModule,
    PabellonModule,
    NotasModule,
    MailerModule,
    DetallenotaModule],
  controllers: [AppController,EmailController],
  providers: [AppService],
})
export class AppModule {}
