SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `user` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(1000) NOT NULL DEFAULT '',
  `point` int(11) NOT NULL DEFAULT '0',
  UNIQUE KEY `_id` (`_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
