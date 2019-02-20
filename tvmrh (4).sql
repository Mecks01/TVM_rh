-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 20 fév. 2019 à 09:37
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
  MODIFY `IDCONGE` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `diplome`
--
ALTER TABLE `diplome`
  MODIFY `IDDIPLOME` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `personne`
--
ALTER TABLE `personne`
  MODIFY `IDPERS` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `IDSERVICE` int(11) NOT NULL AUTO_INCREMENT;

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
