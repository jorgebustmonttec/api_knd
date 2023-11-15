CREATE DATABASE  IF NOT EXISTS `crazysorteo_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `crazysorteo_test`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: crazysorteo_test
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `IdArticulo` int NOT NULL AUTO_INCREMENT,
  `TipoCompra` enum('Gemas','Dinero','Gratis') COLLATE utf8mb4_general_ci NOT NULL,
  `TipoArticulo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `NombreArticulo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DescripcionArticulo` text COLLATE utf8mb4_general_ci,
  `PrecioArticulo` decimal(10,2) NOT NULL,
  `ClaseArticulo` int NOT NULL,
  `ExclusivoCofre` tinyint(1) NOT NULL,
  `TipoArticuloID` int DEFAULT NULL,
  PRIMARY KEY (`IdArticulo`),
  KEY `TipoArticuloID` (`TipoArticuloID`),
  CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`TipoArticuloID`) REFERENCES `tipoarticulo` (`TipoArticuloID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES (1,'Dinero','5','Paquete de Gemas Pequeño','Un paquete pequeño de gemas',50.00,1,0,NULL),(2,'Dinero','5','Paquete de Gemas Mediano','Un paquete mediano de gemas',100.00,1,0,NULL),(3,'Dinero','5','Paquete de Gemas Grande','Un paquete grande de gemas',200.00,1,0,NULL),(4,'Dinero','5','Paquete de Gemas Pequeño','Un paquete pequeño de gemas',50.00,1,0,NULL),(5,'Dinero','5','Paquete de Gemas Mediano','Un paquete mediano de gemas',100.00,1,0,NULL),(6,'Dinero','5','Paquete de Gemas Grande','Un paquete grande de gemas',200.00,1,0,NULL),(7,'Dinero','6','Caja de Botín Bronce','Una caja de botín de nivel bronce',100.00,2,0,NULL),(8,'Dinero','6','Caja de Botín Plata','Una caja de botín de nivel plata',200.00,3,0,NULL),(9,'Dinero','6','Caja de Botín Oro','Una caja de botín de nivel oro',300.00,4,0,NULL),(10,'Gratis','4','Camiseta Sorteo Tec','Una camiseta azul con el logo de Sorteo Tec',0.00,1,0,NULL),(11,'Gemas','1','Marco Futurista','Un marco con diseño futurista para tu perfil',40.00,3,0,NULL),(12,'Gemas','2','Moto Veloz','Una moto rápida para moverte con estilo',70.00,3,0,NULL),(13,'Gemas','3','Casco Espacial','Un casco con diseño de astronauta',35.00,3,0,NULL),(14,'Gemas','4','Armadura de Batalla','Una armadura inspirada en guerreros futuristas',80.00,3,0,NULL),(15,'Gemas','3','Sombrero de Vaquero','Un sombrero clásico del oeste',20.00,2,0,NULL),(16,'Gemas','1','Marco de Lujo','Un marco decorado con joyas y oro',0.00,4,1,NULL),(17,'Gemas','2','Coche Clásico','Un elegante coche clásico',0.00,4,1,NULL),(18,'Gemas','3','Visera Cibernética','Una visera con tecnología del futuro',0.00,3,1,NULL),(19,'Gemas','4','Capa de Superhéroe','Una capa digna de un superhéroe',0.00,3,1,NULL),(20,'Gemas','3','Antifaz Misterioso','Un antifaz para ocultar tu identidad',0.00,2,1,NULL),(21,'Gemas','2','Supercar Legendario','El modelo más exclusivo y rápido, con diseño futurista',0.00,4,1,NULL),(22,'Gratis','1','Marco Estándar Sorteo Tec','Un marco estandarizado para todos los usuarios',0.00,1,0,NULL),(23,'Gratis','2','Delivery Van Sorteo Tec','Una furgoneta de entrega básica con el logo de Sorteo Tec',0.00,1,0,NULL),(24,'Gratis','3','Gorra Sorteo Tec','Una gorra básica con el logo de Sorteo Tec',0.00,1,0,NULL),(25,'Gratis','4','Camiseta Sorteo Tec','Una camiseta básica con el logo de Sorteo Tec',0.00,1,0,NULL);
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulousuario`
--

DROP TABLE IF EXISTS `articulousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulousuario` (
  `IdUsuario` int NOT NULL,
  `IdArticulo` int NOT NULL,
  PRIMARY KEY (`IdArticulo`,`IdUsuario`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `articulousuario_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`),
  CONSTRAINT `articulousuario_ibfk_2` FOREIGN KEY (`IdArticulo`) REFERENCES `articulos` (`IdArticulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulousuario`
--

LOCK TABLES `articulousuario` WRITE;
/*!40000 ALTER TABLE `articulousuario` DISABLE KEYS */;
INSERT INTO `articulousuario` VALUES (10,22),(10,23),(10,24),(10,25),(11,22),(11,23),(11,24),(11,25),(12,22),(12,23),(12,24),(12,25),(13,22),(13,23),(13,24),(13,25),(14,22),(14,23),(14,24),(14,25),(15,22),(15,23),(15,24),(15,25),(16,22),(16,23),(16,24),(16,25),(17,22),(17,23),(17,24),(17,25),(18,22),(18,23),(18,24),(18,25),(19,22),(19,23),(19,24),(19,25),(20,22),(20,23),(20,24),(20,25),(21,22),(21,23),(21,24),(21,25),(22,22),(22,23),(22,24),(22,25),(23,22),(23,23),(23,24),(23,25),(24,22),(24,23),(24,24),(24,25),(25,22),(25,23),(25,24),(25,25),(26,22),(26,23),(26,24),(26,25),(27,22),(27,23),(27,24),(27,25),(28,22),(28,23),(28,24),(28,25),(29,22),(29,23),(29,24),(29,25);
/*!40000 ALTER TABLE `articulousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventariousuario`
--

DROP TABLE IF EXISTS `inventariousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventariousuario` (
  `IdInventario` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int NOT NULL,
  `IdMarco` int DEFAULT NULL,
  `IdVehiculo` int DEFAULT NULL,
  `IdCabeza` int DEFAULT NULL,
  `IdCuerpo` int DEFAULT NULL,
  PRIMARY KEY (`IdInventario`),
  KEY `IdUsuario` (`IdUsuario`),
  KEY `IdMarco` (`IdMarco`,`IdUsuario`),
  KEY `IdVehiculo` (`IdVehiculo`,`IdUsuario`),
  KEY `IdCabeza` (`IdCabeza`,`IdUsuario`),
  KEY `IdCuerpo` (`IdCuerpo`,`IdUsuario`),
  CONSTRAINT `inventariousuario_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`),
  CONSTRAINT `inventariousuario_ibfk_2` FOREIGN KEY (`IdMarco`, `IdUsuario`) REFERENCES `articulousuario` (`IdArticulo`, `IdUsuario`),
  CONSTRAINT `inventariousuario_ibfk_3` FOREIGN KEY (`IdVehiculo`, `IdUsuario`) REFERENCES `articulousuario` (`IdArticulo`, `IdUsuario`),
  CONSTRAINT `inventariousuario_ibfk_4` FOREIGN KEY (`IdCabeza`, `IdUsuario`) REFERENCES `articulousuario` (`IdArticulo`, `IdUsuario`),
  CONSTRAINT `inventariousuario_ibfk_5` FOREIGN KEY (`IdCuerpo`, `IdUsuario`) REFERENCES `articulousuario` (`IdArticulo`, `IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventariousuario`
--

LOCK TABLES `inventariousuario` WRITE;
/*!40000 ALTER TABLE `inventariousuario` DISABLE KEYS */;
INSERT INTO `inventariousuario` VALUES (1,10,22,23,24,25),(2,11,22,23,24,25),(3,12,22,23,24,25),(4,13,22,23,24,25),(5,14,22,23,24,25),(6,15,22,23,24,25),(7,16,22,23,24,25),(8,17,22,23,24,25),(9,18,22,23,24,25),(10,19,22,23,24,25),(11,20,22,23,24,25),(12,21,22,23,24,25),(13,22,22,23,24,25),(14,23,22,23,24,25),(15,24,22,23,24,25),(16,25,22,23,24,25),(17,26,22,23,24,25),(18,27,22,23,24,25),(19,28,22,23,24,25),(20,29,22,23,24,25);
/*!40000 ALTER TABLE `inventariousuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `CheckArticleUserRelation` BEFORE INSERT ON `inventariousuario` FOR EACH ROW BEGIN
    DECLARE articleCount INT;
    
    -- Verificar si existe una relación en articulousuario para el IdUsuario y IdArticulo específicos
    SELECT COUNT(*) INTO articleCount 
    FROM articulousuario 
    WHERE IdUsuario = NEW.IdUsuario 
    AND IdArticulo IN (NEW.IdMarco, NEW.IdVehiculo, NEW.IdCabeza, NEW.IdCuerpo);

    -- Si no existe la relación, se produce un error y se detiene la inserción
    IF articleCount != 4 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No se puede añadir el artículo al inventario, no existe relación en articulousuario.';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `logjuego`
--

DROP TABLE IF EXISTS `logjuego`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logjuego` (
  `IdUsuario` int DEFAULT NULL,
  `idlogJuego` int NOT NULL AUTO_INCREMENT,
  `TiempoInicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DuracionJuego` bigint DEFAULT NULL,
  `Puntuacion` int DEFAULT NULL,
  PRIMARY KEY (`idlogJuego`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `logjuego_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logjuego`
--

LOCK TABLES `logjuego` WRITE;
/*!40000 ALTER TABLE `logjuego` DISABLE KEYS */;
/*!40000 ALTER TABLE `logjuego` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logusuario`
--

DROP TABLE IF EXISTS `logusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logusuario` (
  `IdLog` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int DEFAULT NULL,
  `TiempoLog` datetime DEFAULT NULL,
  `TipoLog` enum('login','logoff') COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`IdLog`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `logusuario_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logusuario`
--

LOCK TABLES `logusuario` WRITE;
/*!40000 ALTER TABLE `logusuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `logusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoarticulo`
--

DROP TABLE IF EXISTS `tipoarticulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoarticulo` (
  `TipoArticuloID` int NOT NULL AUTO_INCREMENT,
  `DescripcionTipo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`TipoArticuloID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoarticulo`
--

LOCK TABLES `tipoarticulo` WRITE;
/*!40000 ALTER TABLE `tipoarticulo` DISABLE KEYS */;
INSERT INTO `tipoarticulo` VALUES (1,'Marco'),(2,'Vehiculo'),(3,'Cabeza'),(4,'Cuerpo'),(5,'Gemas'),(6,'Cofres');
/*!40000 ALTER TABLE `tipoarticulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaccionesdineroreal`
--

DROP TABLE IF EXISTS `transaccionesdineroreal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaccionesdineroreal` (
  `idTransaccion` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int DEFAULT NULL,
  `TiempoTransaccion` datetime DEFAULT NULL,
  `idArticulo` int DEFAULT NULL,
  `Tipo` enum('Compra','Retorno','Regalo') COLLATE utf8mb4_general_ci NOT NULL,
  `CantidadGemasOtorgadas` int DEFAULT NULL,
  PRIMARY KEY (`idTransaccion`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idArticulo` (`idArticulo`),
  CONSTRAINT `transaccionesdineroreal_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`IdUsuario`),
  CONSTRAINT `transaccionesdineroreal_ibfk_2` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`IdArticulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaccionesdineroreal`
--

LOCK TABLES `transaccionesdineroreal` WRITE;
/*!40000 ALTER TABLE `transaccionesdineroreal` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaccionesdineroreal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaccionesgemas`
--

DROP TABLE IF EXISTS `transaccionesgemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaccionesgemas` (
  `idTransaccion` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int DEFAULT NULL,
  `TiempoTransaccion` datetime DEFAULT NULL,
  `idArticulo` int DEFAULT NULL,
  `Tipo` enum('Compra','Regalo') COLLATE utf8mb4_general_ci NOT NULL,
  `CantidadGemas` int DEFAULT NULL,
  `Detalle` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CompraDineroRealID` int DEFAULT NULL,
  PRIMARY KEY (`idTransaccion`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idArticulo` (`idArticulo`),
  KEY `CompraDineroRealID` (`CompraDineroRealID`),
  CONSTRAINT `transaccionesgemas_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`IdUsuario`),
  CONSTRAINT `transaccionesgemas_ibfk_2` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`IdArticulo`),
  CONSTRAINT `transaccionesgemas_ibfk_3` FOREIGN KEY (`CompraDineroRealID`) REFERENCES `transaccionesdineroreal` (`idTransaccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaccionesgemas`
--

LOCK TABLES `transaccionesgemas` WRITE;
/*!40000 ALTER TABLE `transaccionesgemas` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaccionesgemas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `IdUsuario` int NOT NULL AUTO_INCREMENT,
  `UsernameUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CorreoUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `PasswordUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NombresUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ApellidoPUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ApellidoMUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `FechaNacimientoUsuario` date DEFAULT NULL,
  `DireccionUsuarioCalle` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `GeneroUsuario` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `TelefonoUsuario` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `FechaCreacionUsuario` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Administrador` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (10,'adminuser','admin@example.com','admin123','Admin','User','Admin','1980-01-01','123 Admin Street','Otro','1234567890','2023-11-14 00:40:41',1),(11,'johndoe','john.doe@example.com','password123','John','Doe','Smith','1992-05-10','456 Main Street','Masculino','2345678901','2023-11-14 00:40:41',0),(12,'janedoe','jane.doe@example.com','janeDoe2023','Jane','Doe','Johnson','1990-03-15','789 Side Street','Femenino','3456789012','2023-11-14 00:40:41',0),(13,'mariagarcia','maria.garcia@example.com','mariaG2023','Maria','Garcia','Lopez','1995-07-20','1010 Long Road','Femenino','4567890123','2023-11-14 00:40:41',0),(14,'davidmartinez','david.martinez@example.com','davidM2023','David','Martinez','Fernandez','1988-11-30','1111 Short Lane','Masculino','5678901234','2023-11-14 00:40:41',0),(15,'sarahbrown','sarah.brown@example.com','sarahB2023','Sarah','Brown','Wilson','1993-02-24','1212 Maple Ave','Femenino','6789012345','2023-11-14 00:40:41',0),(16,'michaelwhite','michael.white@example.com','michaelW2023','Michael','White','Green','1987-09-17','1313 Oak St','Masculino','7890123456','2023-11-14 00:40:41',0),(17,'emilygomez','emily.gomez@example.com','emilyG2023','Emily','Gomez','Davis','1996-12-05','1414 Pine St','Femenino','8901234567','2023-11-14 00:40:41',0),(18,'jamesjohnson','james.johnson@example.com','jamesJ2023','James','Johnson','Miller','1991-06-19','1515 Birch Rd','Masculino','9012345678','2023-11-14 00:40:41',0),(19,'lindasmith','linda.smith@example.com','lindaS2023','Linda','Smith','Martinez','1994-04-08','1616 Cedar Blvd','Femenino','0123456789','2023-11-14 00:40:41',0),(20,'carloslopez','carlos.lopez@example.com','carlosL2023','Carlos','Lopez','Hernandez','1989-08-23','1717 Elm St','Masculino','1234509876','2023-11-14 00:40:41',0),(21,'elizabethgomez','elizabeth.gomez@example.com','elizabethG2023','Elizabeth','Gomez','Perez','1997-10-12','1818 Spruce Ave','Femenino','2345609876','2023-11-14 00:40:41',0),(22,'williamjones','william.jones@example.com','williamJ2023','William','Jones','Garcia','1986-01-22','1919 Fir St','Masculino','3456709876','2023-11-14 00:40:41',0),(23,'amysanchez','amy.sanchez@example.com','amyS2023','Amy','Sanchez','Rodriguez','1999-03-31','2020 Hazel Way','Femenino','4567809876','2023-11-14 00:40:41',0),(24,'joseramirez','jose.ramirez@example.com','joseR2023','Jose','Ramirez','Morales','1998-07-14','2121 Maple Dr','Masculino','5678909876','2023-11-14 00:40:41',0),(25,'laura_martinez','laura.martinez@example.com','LauraM2023','Laura','Martinez','Reyes','1996-08-15','2222 Cherry Ln','Femenino','6678909876','2023-11-14 00:41:25',0),(26,'kevin_rodriguez','kevin.rodriguez@example.com','KevinR2023','Kevin','Rodriguez','Castillo','1991-11-25','2323 Apple Rd','Masculino','7789019876','2023-11-14 00:41:25',0),(27,'sophia_perez','sophia.perez@example.com','SophiaP2023','Sophia','Perez','Vasquez','1994-10-10','2424 Banana St','Femenino','8890129876','2023-11-14 00:41:25',0),(28,'alejandro_gomez','alejandro.gomez@example.com','AlejandroG2023','Alejandro','Gomez','Diaz','1990-02-20','2525 Grape Ave','Masculino','9901239876','2023-11-14 00:41:25',0),(29,'isabella_flores','isabella.flores@example.com','IsabellaF2023','Isabella','Flores','Torres','1998-05-05','2626 Peach Blvd','Femenino','10123459876','2023-11-14 00:41:25',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `AfterUserCreation` AFTER INSERT ON `usuarios` FOR EACH ROW BEGIN
    -- Insertar relaciones en articulousuario
    INSERT INTO articulousuario (IdUsuario, IdArticulo) VALUES (NEW.IdUsuario, 22);
    INSERT INTO articulousuario (IdUsuario, IdArticulo) VALUES (NEW.IdUsuario, 23);
    INSERT INTO articulousuario (IdUsuario, IdArticulo) VALUES (NEW.IdUsuario, 24);
    INSERT INTO articulousuario (IdUsuario, IdArticulo) VALUES (NEW.IdUsuario, 25);
    
    -- Luego, insertar en inventariousuario
    INSERT INTO inventariousuario (IdUsuario, IdMarco, IdVehiculo, IdCabeza, IdCuerpo)
    VALUES (NEW.IdUsuario, 22, 23, 24, 25);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'crazysorteo_test'
--

--
-- Dumping routines for database 'crazysorteo_test'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-14 18:40:59
