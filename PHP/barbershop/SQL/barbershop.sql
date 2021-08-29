-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 29 Sie 2021, 17:34
-- Wersja serwera: 10.4.13-MariaDB
-- Wersja PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `barbershop`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `messages`
--

CREATE TABLE `messages` (
  `name` text NOT NULL,
  `email` text NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `messages`
--

INSERT INTO `messages` (`name`, `email`, `message`) VALUES
('dupa', 'chuj@niepodam.pl', 'fhffhfh'),
('dupa', 'chuj@niepodam.pl', 'fhffhfh'),
('Adam kowalski', 'dupa@dupa.com', 'chujcipacyce'),
('Adam kowalski', 'chuj@chuj.com', 'dupa 123');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hour` time NOT NULL,
  `type` text NOT NULL,
  `name` text NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `reservations`
--

INSERT INTO `reservations` (`id`, `date`, `hour`, `type`, `name`, `number`) VALUES
(1, '2021-07-25', '15:00:00', 'head', '', 0),
(2, '2021-07-25', '16:00:00', 'head+beard', '', 0),
(3, '2021-07-25', '14:00:00', 'beard', 'adam', 420),
(4, '2021-07-25', '13:00:00', 'hair', 'dupa', 420),
(5, '0000-00-00', '08:00:00', 'beard+hair', '', 123321),
(6, '0000-00-00', '11:00:00', 'hair', 'dupa', 1233),
(7, '2021-07-20', '13:00:00', 'hair', 'Dawid kowalski', 42069),
(8, '2021-07-20', '11:00:00', 'hair', 'Dawid kowalski', 42069),
(9, '2021-07-20', '10:00:00', 'hair', 'Dawid kowalski', 42069),
(10, '2021-07-20', '09:00:00', 'hair', 'Dawid kowalski', 42069),
(11, '2021-07-20', '08:00:00', 'hair', 'Dawid kowalski', 42069),
(12, '2021-07-20', '16:00:00', 'hair', 'Dawid kowalski', 42069),
(13, '2021-07-30', '16:00:00', 'beard', 'dawid kowalski', 42069),
(14, '2021-07-29', '16:00:00', 'beard', 'dawid kowalski', 42069),
(15, '2021-07-29', '15:00:00', 'beard', 'dawid kowalski', 42069),
(16, '2021-07-28', '15:00:00', 'beard', 'dawid kowalski', 42069),
(17, '2021-07-20', '12:00:00', 'hair', 'jan kowalski', 123456789),
(18, '2021-07-27', '15:00:00', 'beard', 'dawid kowalski', 42069),
(19, '2021-07-08', '12:00:00', 'hair', 'dupa chuj', 12332134),
(20, '2021-07-06', '09:00:00', 'beard+hair', 'wefw wfwefw', 1234),
(21, '2021-07-06', '15:00:00', 'beard+hair', 'wefw wfwefw', 1234),
(22, '2021-07-25', '10:00:00', 'hair', 'jan kowalski', 1233321),
(23, '2021-08-21', '16:00:00', 'beard', 'adam kowalski', 9997),
(24, '2021-08-21', '14:00:00', 'beard', 'chuj chujowski', 997);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('admin', 'admin'),
('admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
