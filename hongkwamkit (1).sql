-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 29, 2019 at 10:17 AM
-- Server version: 5.7.23
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hongkwamkit`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `IDMem` int(255) NOT NULL,
  `NameMem` varchar(255) NOT NULL,
  `PassMem` varchar(255) NOT NULL,
  `NicknameMem` varchar(255) NOT NULL,
  `EmailMem` varchar(255) NOT NULL,
  `TelMem` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`IDMem`, `NameMem`, `PassMem`, `NicknameMem`, `EmailMem`, `TelMem`) VALUES
(1001, 'Kedsinee junraksa', '0877481760', 'nunnie', 'nunnunnie@gmail.com', 877481760),
(1002, 'Kiartisak junraksa', '16052540', 'nun', 'e_noonun@hotmail.com', 820586739),
(1003, 'Apichai limsiliwolakun', '0811227675', 'j', 'jjjj@gmail.com', 1234567890);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`IDMem`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
