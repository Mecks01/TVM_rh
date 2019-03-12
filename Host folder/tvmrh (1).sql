-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 12 mars 2019 à 23:49
-- Version du serveur :  10.1.37-MariaDB
-- Version de PHP :  7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tvmrh`
--

-- --------------------------------------------------------

--
-- Structure de la table `conge`
--

CREATE TABLE `conge` (
  `IDCONGE` bigint(20) NOT NULL,
  `IDPROF` int(11) NOT NULL,
  `NBJOUR` smallint(6) DEFAULT NULL,
  `DATEDEBUT` text,
  `DATERETOUR` text,
  `MOTIF` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `conge`
--

INSERT INTO `conge` (`IDCONGE`, `IDPROF`, `NBJOUR`, `DATEDEBUT`, `DATERETOUR`, `MOTIF`) VALUES
(4, 1, 3, 'Vendredi  01/02/2019', 'Mardi  05/02/2019', 'Narary kibo'),
(5, 1, 5, 'Samedi  09/02/2019', 'Jeudi  14/02/2019', 'Vavaorona'),
(6, 1, 6, 'Samedi  02/02/2019', 'Lundi  11/02/2019', 'Azerty'),
(7, 1, 1, 'Vendredi  01/02/2019', 'Samedi  02/02/2019', 'qwerty'),
(8, 18, 2, 'Vendredi  01/02/2019', 'Dimanche  03/02/2019', 'Narary kibo'),
(9, 18, 3, 'Vendredi  01/02/2019', 'Mardi  05/02/2019', 'Azerty'),
(10, 18, 9, 'Samedi  02/02/2019', 'Samedi  09/02/2019', 'AZERTYU'),
(11, 18, 9, 'undefined  02/02/2/undefined/undefined', 'undefined  09/02/2/undefined/undefined', 'AZERTYU'),
(12, 1, 7, 'Samedi  02/02/2019', 'Jeudi  07/02/2019', 'Kibo'),
(13, 1, 9, 'Dimanche  03/02/2019', 'Jeudi  07/02/2019', 'Azerty'),
(14, 1, 9, 'Dimanche  03/02/2019', 'Vendredi  01/02/2019', 'qqserer'),
(15, 1, 5, 'Dimanche  03/02/2019', 'Samedi  09/02/2019', 'azerty'),
(16, 1, 3, 'Vendredi  01/02/2019', 'Lundi  04/02/2019', 'QWERTY'),
(17, 1, 6, 'Dimanche  03/02/2019', 'Samedi  09/02/2019', 'Kibo'),
(19, 18, 4, 'Vendredi  01/02/2019', 'Jeudi  07/02/2019', 'azertyhc'),
(20, 29, 3, 'Vendredi  01/03/2019', 'Lundi  04/03/2019', 'Narary');

-- --------------------------------------------------------

--
-- Structure de la table `diplome`
--

CREATE TABLE `diplome` (
  `IDDIPLOME` smallint(6) NOT NULL,
  `IDPROF` int(11) NOT NULL,
  `DEGREE` text,
  `MENTION` text,
  `NOMINSTITUTION` text,
  `FILIERE` longtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `diplome`
--

INSERT INTO `diplome` (`IDDIPLOME`, `IDPROF`, `DEGREE`, `MENTION`, `NOMINSTITUTION`, `FILIERE`) VALUES
(1, 1, 'Doctorat', 'Très bien', 'INSCAE', 'Puterinage'),
(2, 1, 'Master', 'Excellent', 'ISPM', 'Doctorat'),
(4, 3, 'Bacc', 'Assez bien', '591vs', 'azerty'),
(7, 8, 'Master', 'Assez bien', 'ytrea', 'azerty'),
(9, 16, 'Bacc', 'Assez bien', 'azerty', 'azerty'),
(11, 18, 'Doctorat', 'Très bien', 'Harvard', 'Sociologie'),
(12, 19, 'Bacc', 'Assez bien', 'AZA', 'AZE'),
(13, 19, 'BEPC', 'Bien', 'AZE', 'AZAE'),
(14, 27, 'Bacc', 'Assez bien', 'LSFXA', 'D'),
(15, 27, 'Licence', 'Assez bien', 'ISPM', 'MSI'),
(16, 28, 'Master', 'Assez bien', '89865', '8965'),
(17, 29, 'Master', 'Bien', 'azert', 'azerty'),
(18, 29, 'Bacc', 'Bien', 'aeery', 'azerty'),
(19, 30, 'Master', 'Très bien', 'INSCAE', 'Admin entreprise');

-- --------------------------------------------------------

--
-- Structure de la table `infoprof`
--

CREATE TABLE `infoprof` (
  `IDPROF` int(11) NOT NULL,
  `IDSERVICE` int(11) NOT NULL,
  `MATRICULE` bigint(20) DEFAULT NULL,
  `EMAILPROF` text,
  `NUMPROF` text,
  `DATEEMBAUCHE` text,
  `DATEDEPART` text,
  `PATHCV` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `infoprof`
--

INSERT INTO `infoprof` (`IDPROF`, `IDSERVICE`, `MATRICULE`, `EMAILPROF`, `NUMPROF`, `DATEEMBAUCHE`, `DATEDEPART`, `PATHCV`) VALUES
(1, 8, 34759, 'rakoto@gmail.com', '0336900102', 'Vendredi  01/02/2019', NULL, '34759_CV.pdf'),
(3, 3, 34761, 'azert@gam.', '1111111111', 'Vendredi  15/02/2019', NULL, 'Pas de CV'),
(4, 17, 34762, 'zezarzar@yahoo.com', '0326900102', 'Mercredi  13/02/2019', NULL, '34762_CV.pdf'),
(8, 8, 34789, 'rmecks@yahoo.fr', '0334078844', 'Dimanche  02/12/2018', NULL, 'Pas de CV'),
(11, 7, 33695, 'azerty@gmail.com', '9999999999', 'Vendredi  22/02/2019', NULL, '33695_CV.pdf'),
(12, 12, 34789, 'azerty@gdgf', '7876542145', 'Samedi  09/02/2019', NULL, 'Pas de CV'),
(13, 13, 336987, 'azret@gmail.', '9999999999', 'Vendredi  08/02/2019', NULL, 'Pas de CV'),
(16, 15, 348569, 'azet@gegtrh.com', '6666666666', 'Dimanche  10/02/2019', NULL, '348569_CV.pdf'),
(18, 1, 7894, 'azer@azet.com', '0332856452', 'Vendredi  08/02/2019', NULL, '7894_CV.pdf'),
(19, 17, 81234, '', '0325698564', 'Vendredi  15/03/2019', NULL, '81234_CV.pdf'),
(20, 18, 465465, '', '5646546465', 'Vendredi  22/03/2019', NULL, 'Pas de CV'),
(21, 18, 465454, '', '7896321456', 'Samedi  30/03/2019', NULL, 'Pas de CV'),
(22, 19, 77777, '', '5555555555', 'Samedi  16/03/2019', NULL, 'Pas de CV'),
(23, 13, 789, '', '6666666666', 'Vendredi  29/03/2019', NULL, 'Pas de CV'),
(27, 7, 34759, 'rakotoalatra01@gmail.com', '0356932105', 'Vendredi  15/03/2019', NULL, '34759_CV.pdf'),
(28, 4, 34569, '', '8888888888', 'Vendredi  22/03/2019', NULL, 'Pas de CV'),
(29, 18, 34759, '', '0342424687', 'Samedi  09/03/2019', NULL, 'Pas de CV'),
(30, 2, 963214, '', '0336985623', 'Vendredi  05/10/2018', NULL, '963214_CV.pdf');

-- --------------------------------------------------------

--
-- Structure de la table `personne`
--

CREATE TABLE `personne` (
  `IDPERS` int(11) NOT NULL,
  `NOMPERS` text,
  `PRENOMPERS` text,
  `CIVILITE` text,
  `DATENAISSANCE` text,
  `ADRESSEPERS` text,
  `NUMPERS` text,
  `EMAILPERS` text,
  `AVATAR` text,
  `PASSWORD` text,
  `SITUATIONPERS` text,
  `NBENFANTS` smallint(6) DEFAULT NULL,
  `GENRE` longtext,
  `NATIONALITE` varchar(30) NOT NULL,
  `PROVINCE` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `personne`
--

INSERT INTO `personne` (`IDPERS`, `NOMPERS`, `PRENOMPERS`, `CIVILITE`, `DATENAISSANCE`, `ADRESSEPERS`, `NUMPERS`, `EMAILPERS`, `AVATAR`, `PASSWORD`, `SITUATIONPERS`, `NBENFANTS`, `GENRE`, `NATIONALITE`, `PROVINCE`) VALUES
(1, 'RANDRIAMANANA', 'Mendrika Fitia', 'Marié', 'Vendredi  01/02/2019', 'Manakambahiny', '0332852645', 'rmecks01@gmail.com', '0332852645_Image.jpg', 'd033e22ae348aeb5660fc2140aec35850c4da997', NULL, 16, 'Homme', 'Malagasy', 'Antananarivo'),
(3, 'LEONG', 'Christelle', 'Marié', 'Dimanche  03/02/2019', 'Itaosy', '0342424687', 'Rapoi@glom.ci', 'jt2dzqgj.og9_Image.png', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 2, 'Jeune femme', 'Nationalité étrangère', 'Antananarivo'),
(4, 'RARIVO', 'Sandy', 'Célibataire', 'Samedi  16/02/2019', 'Antanimena', '0326900102', 'azerty@gmail.com', '0326900102_Image.jpg', 'd033e22ae348aeb5660fc2140aec35850c4da997', NULL, 3, 'Jeune Femme', 'Malagasy', 'Mahajanga'),
(8, 'ZAKARIA', 'Charlotte', 'Divorcé', 'Vendredi  01/02/2019', 'azert', '0342852645', 'rmecks01@gmail.com', '2222222222_Image.jpg', 'd033e22ae348aeb5660fc2140aec35850c4da997', NULL, 4, 'Homme', 'Malagasy', 'Toliara'),
(11, 'RAMARISON', 'Ny Antsa', 'Marié', 'Vendredi  01/02/2019', 'Faravohitra', '0337211013', 'ny@gmail.com', '0337211013_Image.png', 'b1b3773a05c0ed0176787a4f1574ff0075f7521e', NULL, 0, 'Jeune Femme', 'Malagasy', 'Antananarivo'),
(12, 'RAZAKAIOSY', 'Gérard', 'Célibataire', 'Vendredi  15/02/2019', 'DEBILE', '0392424687', 'azeyt@hgzef.azer', '0392424687_Image.jpg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 2, 'Jeune homme', 'Malagasy', 'Antananarivo'),
(13, 'MARAIA', 'Databases', 'Célibataire', 'Samedi  09/02/2019', 'Californie', '0341098318', 'recks01@azertu.', '0341098318_Image.jpeg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Jeune Femme', 'Malagasy', 'Toamasina'),
(16, 'RAKOTO', 'Maria', 'Divorcé', 'Vendredi  15/02/2019', 'Bordeaux', '0324078844', 'azerty@gmail.com', '0324078844_Image.jpeg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 2, 'Jeune Femme', 'Malagasy', 'Antsiranana'),
(18, 'RAKOTO', 'Jean', 'Célibataire', 'Dimanche  01/02/1998', 'Andrainarivo', '0349677558', 'maevah@gmail.fr', 'jsuscrl6.hh_Image.png', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Homme', 'Malagasy', 'Antananarivo'),
(19, 'RANDRIA', 'Azeryt', 'Divorcé', 'Jeudi  21/03/2019', 'aLALANA', '0332852746', 'AZERTY@TRE.', '987_Image.gif', '52036e5a96b401419e3b870bb3859828b111afd2', NULL, 8, 'Homme', 'Nationalité étrangère', 'Antsirabe'),
(20, 'RAZANA', 'Maleùy', 'Célibataire', 'Vendredi  22/03/2019', 'azerty', '0335896545', 'azertr@jyt.heh', '0335896545_Image.png', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Homme', 'Malagasy', 'Antananarivo'),
(21, 'AZERTY', 'Zaeezret', 'Célibataire', 'Vendredi  29/03/2019', 'zaeaze', '6666666666', 'Pas d\'email', '6666666666_Image.jpg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Homme', 'Malagasy', 'Antananarivo'),
(22, 'QUATAR', 'Foundation', 'Célibataire', 'Jeudi  28/03/2019', 'azerty', '5555555555', 'Pas d\'email', '5555555555_Image.jpg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Homme', 'Malagasy', 'Antananarivo'),
(23, 'AZETRT', 'Rfvdfbfbgb', 'Célibataire', 'Jeudi  28/03/2019', 'bfdbfgbgfbgfb', '3333333333', 'Pas d\'email', '3333333333_Image.jpg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Femme', 'Malagasy', 'Antananarivo'),
(24, 'AZERTY', 'Azerty', 'Célibataire', 'Jeudi  21/03/2019', 'azerty', '0335869521', 'Pas d\'email', '0335869521_Image.jpg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Homme', 'Malagasy', 'Antananarivo'),
(27, 'RANDRIAMANANA', 'Mendrika', 'Divorcé', 'Jeudi  06/02/2014', 'Ontario Canada', '0349677552', 'rmecks01@gmail.com', 'jsy3dgiz.ss_Image.jpg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 0, 'Jeune homme', 'Malagasy', 'Antananarivo'),
(28, 'AZERTY', 'Tazer', 'Marié', 'Mercredi  20/03/2019', 'azerty', '0336932569', 'Pas d\'email', 'jsusaw9n.8ki_Image.jpg', '5a9cf67e86ca9737d77fe30e613f70ea1ef9e6b2', NULL, 3, 'Homme', 'Nationalité étrangère', 'Antananarivo'),
(29, 'RAKOTO', 'Jean', 'Célibataire', 'Vendredi  08/03/2019', 'Ambanidia', '0342424688', 'rmecka01@gmail.com', 'defaultImg.png', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 1, 'Homme', 'Malagasy', 'Antananarivo'),
(30, 'RAMANAMAHEFA', 'Harny', 'Marié', 'Lundi  01/01/1996', 'Ivandry', '0344078844', 'rmecks01@gmail.com', 'jt3i8pwg.o8_Image.jpg', '9cf95dacd226dcf43da376cdb6cbba7035218921', NULL, 2, 'Jeune femme', 'Malagasy', 'Antananarivo');

-- --------------------------------------------------------

--
-- Structure de la table `prime`
--

CREATE TABLE `prime` (
  `IDPRIME` smallint(6) NOT NULL,
  `IDPROF` int(11) NOT NULL,
  `MONTANT` bigint(20) DEFAULT NULL,
  `MOTIFPRIME` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `salaire`
--

CREATE TABLE `salaire` (
  `IDSALAIRE` smallint(6) NOT NULL,
  `IDPROF` int(11) NOT NULL,
  `MONTANTSALAIRE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `IDSERVICE` int(11) NOT NULL,
  `NOMSERV` text,
  `FONCTION` text,
  `GRADE` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `service`
--

INSERT INTO `service` (`IDSERVICE`, `NOMSERV`, `FONCTION`, `GRADE`) VALUES
(1, 'TVM', 'Directeur générale', 'Directeur'),
(2, 'Informatique', 'Chef de service', 'Chef'),
(3, 'Information', 'Chef de service', 'Chef'),
(4, 'Programmation', 'Chef de service', 'Chef'),
(5, 'Production', 'Chef de service', 'Chef'),
(6, 'Technique', 'Chef de service', 'Chef'),
(7, 'Informatique', 'Développeur Web', 'Stagiaire'),
(8, 'Informatique', 'Développeur Web', 'Employé'),
(9, 'Informatique', 'Réseaux', 'Employé'),
(10, 'Technique', 'Journaliste', 'Employé'),
(11, 'Programmation', 'bbbbb', 'Employé'),
(12, 'Informatique', 'ADSL', 'Stagiaire'),
(13, 'Informatique', 'ADSL', 'Employé'),
(14, 'Information', 'ggggg', 'Employé'),
(15, 'Programmation', 'aaaaa', 'Employé'),
(16, 'Production', 'eeeeee', 'Employé'),
(17, 'Informatique', 'Programme', 'Employé'),
(18, 'Informatique', 'Monteur', 'Employé'),
(19, 'Technique', 'Technicien', 'Employé');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `conge`
--
ALTER TABLE `conge`
  ADD PRIMARY KEY (`IDCONGE`),
  ADD KEY `FK_DEMANDER` (`IDPROF`);

--
-- Index pour la table `diplome`
--
ALTER TABLE `diplome`
  ADD PRIMARY KEY (`IDDIPLOME`),
  ADD KEY `FK_CONTERNIR` (`IDPROF`);

--
-- Index pour la table `infoprof`
--
ALTER TABLE `infoprof`
  ADD PRIMARY KEY (`IDPROF`),
  ADD KEY `FK_APPARTENIR` (`IDSERVICE`);

--
-- Index pour la table `personne`
--
ALTER TABLE `personne`
  ADD PRIMARY KEY (`IDPERS`);

--
-- Index pour la table `prime`
--
ALTER TABLE `prime`
  ADD PRIMARY KEY (`IDPRIME`),
  ADD KEY `FK_OBTENIR` (`IDPROF`);

--
-- Index pour la table `salaire`
--
ALTER TABLE `salaire`
  ADD PRIMARY KEY (`IDSALAIRE`),
  ADD KEY `FK_RECEVOIR` (`IDPROF`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`IDSERVICE`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `conge`
--
ALTER TABLE `conge`
  MODIFY `IDCONGE` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `diplome`
--
ALTER TABLE `diplome`
  MODIFY `IDDIPLOME` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `personne`
--
ALTER TABLE `personne`
  MODIFY `IDPERS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `prime`
--
ALTER TABLE `prime`
  MODIFY `IDPRIME` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `salaire`
--
ALTER TABLE `salaire`
  MODIFY `IDSALAIRE` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `IDSERVICE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `conge`
--
ALTER TABLE `conge`
  ADD CONSTRAINT `FK_DEMANDER` FOREIGN KEY (`IDPROF`) REFERENCES `infoprof` (`IDPROF`);

--
-- Contraintes pour la table `diplome`
--
ALTER TABLE `diplome`
  ADD CONSTRAINT `FK_CONTERNIR` FOREIGN KEY (`IDPROF`) REFERENCES `infoprof` (`IDPROF`);

--
-- Contraintes pour la table `infoprof`
--
ALTER TABLE `infoprof`
  ADD CONSTRAINT `FK_APPARTENIR` FOREIGN KEY (`IDSERVICE`) REFERENCES `service` (`IDSERVICE`),
  ADD CONSTRAINT `infoprof_ibfk_1` FOREIGN KEY (`IDPROF`) REFERENCES `personne` (`IDPERS`);

--
-- Contraintes pour la table `prime`
--
ALTER TABLE `prime`
  ADD CONSTRAINT `FK_OBTENIR` FOREIGN KEY (`IDPROF`) REFERENCES `infoprof` (`IDPROF`);

--
-- Contraintes pour la table `salaire`
--
ALTER TABLE `salaire`
  ADD CONSTRAINT `FK_RECEVOIR` FOREIGN KEY (`IDPROF`) REFERENCES `infoprof` (`IDPROF`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
