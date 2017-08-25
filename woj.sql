-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2017 at 05:32 AM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `woj`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `addressdid` int(255) NOT NULL,
  `addresstypedid` varchar(255) NOT NULL,
  `address1` varchar(255) NOT NULL,
  `postalcode` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`addressdid`, `addresstypedid`, `address1`, `postalcode`, `city`, `country`, `email`, `mobile`) VALUES
(1, '1', 'street 1', 0, '', '', '', 0),
(2, '1', 'street 1', 0, '', '', '', 0),
(3, '1', 'street 1', 0, '', '', '', 0),
(4, '1', 'street 1', 0, '', '', '', 0),
(5, '1', 'street 1', 0, '', '', '', 0),
(6, '1', 'street 1', 0, '', '', '', 0),
(7, '1', 'street 1', 0, '', '', '', 0),
(8, '1', 'asdfasd', 0, '', 'Sri Lanka', 'asdfa', 0),
(9, '1', 'asdf', 0, '', 'Sri Lanka', 'asf', 0),
(10, '1', 'sdfg', 0, '', 'Sri Lanka', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `did` bigint(20) NOT NULL,
  `empId` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `organization` int(11) NOT NULL,
  `department` varchar(255) NOT NULL,
  `empCategory` varchar(255) NOT NULL,
  `empRole` varchar(255) NOT NULL,
  `bankAccountNumber` bigint(20) NOT NULL,
  `subscribed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`did`, `empId`, `firstName`, `lastName`, `organization`, `department`, `empCategory`, `empRole`, `bankAccountNumber`, `subscribed`) VALUES
(21, 'stu0002', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(22, 'stu0002', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(23, 'stu0003', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(25, 'stu4', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(26, 'stu7', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(27, 'stu8', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(28, 'stu9', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(29, 'stu9', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(30, 'stu9', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(31, 'stu9', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(32, 'stu10', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(33, 'stu10', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(34, 'stu10', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(35, 'stu10', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(36, 'stu11', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(37, 'stu11', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(38, 'stu11', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(39, 'stu11', 'Prasad', 'Wanigasinghe', 18, 'IT', 'Permenant', 'developer', 123321123321, 1),
(40, 'Supun', 'Prasad', 'Wanigasinghe', 1, 'IT', 'Permenant', 'developer', 123321123321, 1),
(41, 'erere', 'Prasad', 'Wanigasinghe', 1, 'IT', 'Permenant', 'developer', 123321123321, 1),
(42, 'tttt', 'Prasad', 'Wanigasinghe', 19, 'IT', 'Permenant', 'developer', 123321123321, 1);

-- --------------------------------------------------------

--
-- Table structure for table `emplyeesalary`
--

CREATE TABLE `emplyeesalary` (
  `did` bigint(20) NOT NULL,
  `employee` bigint(20) NOT NULL,
  `adddeductstatus` int(11) NOT NULL COMMENT '0-basic, 1-add, 2-deduct',
  `amount` double NOT NULL,
  `validfrom` datetime DEFAULT NULL,
  `validuntil` datetime DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emplyeesalary`
--

INSERT INTO `emplyeesalary` (`did`, `employee`, `adddeductstatus`, `amount`, `validfrom`, `validuntil`, `description`) VALUES
(1, 1, 1, 1000, NULL, NULL, NULL),
(2, 1, 1, 1000, NULL, NULL, NULL),
(3, 1, 2, 2000, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `logid` int(11) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`logid`, `time`) VALUES
(0, '2017-06-20 12:36:41'),
(0, '2017-06-20 12:39:47'),
(0, '2017-06-20 12:40:49'),
(0, '2017-06-20 12:41:24'),
(0, '2017-06-20 12:42:12'),
(0, '2017-06-20 12:43:14'),
(0, '2017-06-20 12:46:23'),
(0, '2017-06-20 12:48:53'),
(0, '2017-06-20 13:10:29'),
(1, '2017-06-20 13:20:21'),
(2, '2017-06-20 13:24:10'),
(3, '2017-06-20 13:25:40'),
(4, '2017-06-20 13:26:34'),
(5, '2017-06-20 13:26:43'),
(6, '2017-06-20 13:28:12'),
(7, '2017-06-20 13:30:15'),
(8, '2017-06-20 13:31:46'),
(9, '2017-06-20 13:32:57'),
(10, '2017-06-20 13:44:55'),
(11, '2017-06-20 13:51:36'),
(12, '2017-06-20 13:56:00'),
(13, '2017-06-20 13:56:13'),
(14, '2017-06-20 13:56:38'),
(1, '2017-06-20 14:00:35');

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `did` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL,
  `addressdid` int(255) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`did`, `name`, `code`, `addressdid`, `active`) VALUES
(18, 'DEFddeded Preeivadte Ltd', 'DEdF', 5, 1),
(19, 'DEFddeded Preeivadte Ltd', 'DEdF', 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `did` varchar(50) NOT NULL,
  `Title` varchar(500) DEFAULT NULL,
  `Status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`did`, `Title`, `Status`) VALUES
('2', NULL, NULL),
('3', 'Push code to GitHub', 'done'),
('4', 'Go For Running', 'done'),
('5', 'Go to Movie', 'pending');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`addressdid`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `emplyeesalary`
--
ALTER TABLE `emplyeesalary`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`did`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `addressdid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `did` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `emplyeesalary`
--
ALTER TABLE `emplyeesalary`
  MODIFY `did` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `did` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



------------- 2017-08-10---------------------
CREATE TABLE `rule_type` (
  `did` bigint(20) PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(100) NOT NULL COMMENT '1-PERCENTAGE, 2-AMOUNT, 3-BOOLEAN'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `rule_type` (`did`, `type`) VALUES
('1', 'PERCENTAGE'),
('2', 'AMOUNT'),
('3', 'BOOLEAN');

CREATE TABLE `rule` (
  `did` bigint(20) PRIMARY KEY AUTO_INCREMENT,
  `rule` varchar(100) NOT NULL,
  `type` bigint(20) NOT NULL,
  `adjustment` varchar(100) NOT NULL COMMENT '1-INCREASE, 2-DECREASE'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `rule` (`did`, `rule`,`type`,`adjustment`) VALUES
('1', 'EPF','1','INCREASE'),
('2', 'BONUS','2','INCREASE');

CREATE TABLE `organization_rule` (
  `did` bigint(20) PRIMARY KEY AUTO_INCREMENT,
  `organization` bigint(20) NOT NULL,
  `group` bigint(20) NOT NULL,
  `rule` bigint(20) NOT NULL,
  `amount` double NOT NULL,
  `precedance` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `organization_rule` (`did`, `organization`,`group`,`rule`,`amount`,`precedance`) VALUES
('1', '16','1','1','20','8'),
('2', '16','1','2','75000','8');
