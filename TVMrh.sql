/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de cr�ation :  2/8/2019 3:33:12 PM                      */
/*==============================================================*/


drop table if exists CONGE;

drop table if exists CV;

drop table if exists DIPLOME;

drop table if exists INFOPROF;

drop table if exists PERSONNE;

drop table if exists PRIME;

drop table if exists SALAIRE;

drop table if exists SERVICE;

/*==============================================================*/
/* Table : CONGE                                                */
/*==============================================================*/
create table CONGE
(
   IDCONGE              bigint not null,
   IDPROF               int not null,
   NBJOUR               smallint,
   DATEDEBUT            text,
   DATERETOUR           text,
   MOTIF                text,
   primary key (IDCONGE)
);

/*==============================================================*/
/* Table : CV                                                   */
/*==============================================================*/
create table CV
(
   IDCV                 smallint not null,
   PATHCV               text,
   NOMCV                text,
   primary key (IDCV)
);

/*==============================================================*/
/* Table : DIPLOME                                              */
/*==============================================================*/
create table DIPLOME
(
   IDDIPLOME            smallint not null,
   IDCV                 smallint not null,
   DEGREE               text,
   MENTION              text,
   NOMINSTITUTION       text,
   primary key (IDDIPLOME)
);

/*==============================================================*/
/* Table : INFOPROF                                             */
/*==============================================================*/
create table INFOPROF
(
   IDPROF               int not null,
   IDSERVICE            int not null,
   IDCV                 smallint not null,
   MATRICULE            bigint,
   EMAILPROF            text,
   NUMPROF              text,
   DATEEMBAUCHE         text,
   DATEDEPART           text,
   primary key (IDPROF)
);

/*==============================================================*/
/* Table : PERSONNE                                             */
/*==============================================================*/
create table PERSONNE
(
   IDPERS               int not null AUTO_INCREMENT,
   IDPROF               int not null,
   NOMPERS              text,
   PRENOMPERS           text,
   CIVILITE             text,
   DATENAISSANCE        text,
   ADRESSEPERS          text,
   NUMPERS              text,
   EMAILPERS            text,
   AVATAR               text,
   PASSWORD             text,
   NATIONALITE        text,
   NBENFANTS            smallint,
   primary key (IDPERS)
);

/*==============================================================*/
/* Table : PRIME                                                */
/*==============================================================*/
create table PRIME
(
   IDPRIME              smallint not null,
   IDPROF               int not null,
   MONTANT              bigint,
   MOTIFPRIME           text,
   primary key (IDPRIME)
);

/*==============================================================*/
/* Table : SALAIRE                                              */
/*==============================================================*/
create table SALAIRE
(
   IDSALAIRE            smallint not null,
   IDPROF               int not null,
   MONTANTSALAIRE       int,
   primary key (IDSALAIRE)
);

/*==============================================================*/
/* Table : SERVICE                                              */
/*==============================================================*/
create table SERVICE
(
   IDSERVICE            int not null,
   NOMSERV              text,
   FONCTION             text,
   GRADE                text,
   primary key (IDSERVICE)
);

alter table CONGE add constraint FK_DEMANDER foreign key (IDPROF)
      references INFOPROF (IDPROF) on delete restrict on update restrict;

alter table DIPLOME add constraint FK_CONTERNIR foreign key (IDCV)
      references CV (IDCV) on delete restrict on update restrict;

alter table INFOPROF add constraint FK_APPARTENIR foreign key (IDSERVICE)
      references SERVICE (IDSERVICE) on delete restrict on update restrict;

alter table INFOPROF add constraint FK_CORRESPOND_A foreign key (IDCV)
      references CV (IDCV) on delete restrict on update restrict;

alter table INFOPROF add constraint FK_POSSEDER foreign key (IDPROF)
      references PERSONNE (IDPERS) on delete restrict on update restrict;

alter table PRIME add constraint FK_OBTENIR foreign key (IDPROF)
      references INFOPROF (IDPROF) on delete restrict on update restrict;

alter table SALAIRE add constraint FK_RECEVOIR foreign key (IDPROF)
      references INFOPROF (IDPROF) on delete restrict on update restrict;

