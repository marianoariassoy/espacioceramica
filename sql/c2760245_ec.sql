-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 18, 2026 at 08:00 PM
-- Server version: 8.0.42
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c2760245_ec`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int NOT NULL,
  `title` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `top` int NOT NULL,
  `ig` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `text` text COLLATE utf8mb4_general_ci NOT NULL,
  `text_en` text COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `image_2` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `file` varchar(256) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `title`, `top`, `ig`, `text`, `text_en`, `image`, `image_2`, `file`) VALUES
(1, 'Fernando López', 9, 'proyecto___liebre', 'Pienso que mi trabajo cerámico está profundamente ligado a mi manera de entender las cosas, a mi forma de acercarme a las acciones. La cerámica, creo, es una excusa para abordar situaciones, para explorar procesos.\r\nHubo un momento determinante en mi vida: la construcción de mi casa. Allí apareció un aprendizaje clave. Entendí que no sólo estaba haciendo algo puntual, sino que cada gesto generaba otras cosas: estaba haciendo la casa de barro… un horno… un cuenco.\r\nSituarme en ese lugar —el de reconocer que cada acción implica, modifica y abre otra— es lo que elijo vivir. Me interesa justamente eso: cómo las relaciones entre las acciones van conformando el trabajo.', 'I believe my ceramic work is deeply connected to the way I understand things, to my way of approaching actions. Ceramics, I think, is an excuse to engage with situations, to explore processes.\r\nThere was a defining moment in my life: building my house. That was when a key lesson appeared. I realized that I wasn’t just doing something specific; each gesture was generating something else. I was building the earthen house… a kiln… a bowl.\r\nPlacing myself in that space —the one where each action implies, affects, and opens another— is the way I choose to live. What interests me most is precisely that: how the relationships between actions shape the work.', 'ec_a76091187b40.jpg', 'ec_60e2038de49d.jpg', 'cv_85806b653fb2.pdf'),
(2, 'Victoria Drisaldi', 10, 'victoriadrisaldi', 'Mi trabajo tiene relación con el lugar donde vivo, con su materialidad y su paisaje. Nos mudamos a la Patagonia hace más de diez años y aunque la decisión siempre contempló el armado del taller, no dimensioné hasta tiempo después la profundidad que este entorno podría aportar a mi trabajo. Contagio e influencia del espacio y del tiempo, pero no sólo tiempo en el sentido unidireccional sino también como geológico y como esencia. \r\nQuemar a leña es una decisión. Hay una belleza en esa energía que se transmite a las piezas, que es única y es mágica. Enlaza lo sagrado de la cerámica con la expresión terrenal de los materiales. \r\nMi trabajo se divide en obra y objetos utilitarios. Me atrae pensar la proyección de la cerámica: su uso y concretud. La alfarería que hago es precisa en cuanto a gesto directo. Los objetos que hago fundan (o buscan fundar) una simplicidad pagana para el buen vivir.  Mi cerámica intenta el equilibrio con la materia y el gesto de la mano en el tiempo que la proyecta.', 'My work is closely tied to the place where I live, to its materiality and its landscape. We moved to Patagonia more than ten years ago, and although the decision always included the idea of setting up a studio, it took me some time to understand the depth that this environment would bring to my work. It is an exchange and an influence of space and time—not only time in the linear sense, but also geological time and time as essence.\r\nFiring with wood is a choice. There is a beauty in that energy that is transferred into the pieces, something unique and magical. It binds the sacredness of ceramics with the earthly expression of the materials.\r\nMy work is divided into art pieces and utilitarian objects. I’m drawn to thinking about the projection of ceramics: its use and its concreteness. The pottery I make is precise in its direct gesture. The objects I create establish (or seek to establish) a kind of pagan simplicity for good living. My ceramics aim for a balance between the material and the hand’s gesture, in the time that carries it forward.', 'ec_a43099c01987.jpg', 'ec_3ea2513100dc.jpg', 'cv_c4c66a22d263.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `title` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `title_en` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `top` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `title_en`, `top`) VALUES
(2, 'Vajilla', 'Tableware', 0),
(3, 'Jarrones', 'Vases', 0),
(4, 'Floreros', 'Flower vases', 0),
(5, 'Vajilla de Té', 'Tea Set', 0),
(7, 'Objetos', 'Objects', 0);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int NOT NULL,
  `image` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item` int NOT NULL,
  `top` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image`, `item`, `top`) VALUES
(32, 'wom_9628622a13.jpg', 3, 0),
(33, 'wom_e49a47fc59.jpg', 6, 0),
(34, 'wom_5e61ac68a6.jpg', 6, 0),
(35, 'wom_93c17356bf.jpg', 6, 0),
(36, 'wom_d158ed1e99.jpg', 7, 0),
(37, 'wom_0151b4eb57.jpg', 7, 0),
(38, 'wom_f235611fa4.jpg', 7, 0),
(39, 'wom_bef39e6ab8.jpg', 8, 0),
(40, 'wom_8bd50c4f5e.jpg', 8, 0),
(41, 'wom_49aa73f88a.jpg', 8, 0),
(42, 'wom_60ce2ece4e.jpg', 9, 0),
(43, 'wom_1fccb56753.jpg', 9, 0),
(44, 'wom_c309bfaa7d.jpg', 10, 0),
(45, 'wom_a0b0da1dce.jpg', 10, 0),
(46, 'wom_35d3a1c0e9.jpg', 10, 0),
(47, 'wom_14751ba161.jpg', 3, 0),
(48, 'wom_ae64064717.jpg', 3, 0),
(49, 'wom_6037f34efb.jpg', 3, 0),
(50, 'ec_2dd11be9e2.jpg', 24, 0),
(51, 'ec_137188f339.jpg', 25, 0),
(52, 'ec_95e2a49ef7.jpg', 25, 0),
(53, 'ec_49d09832bc.jpg', 26, 0),
(54, 'ec_9ebf34fd95.jpg', 26, 0),
(55, 'ec_436eb648e6.jpg', 27, 0),
(56, 'ec_5b350076b7.jpg', 27, 0),
(57, 'ec_a5d7f0d266.jpg', 28, 0),
(58, 'ec_23858be06e.jpg', 28, 0),
(59, 'ec_43a65d524b.jpg', 28, 0),
(60, 'ec_e496abe5e6.jpg', 29, 0),
(61, 'ec_06decdd520.jpg', 29, 0),
(62, 'ec_d495ddf5cd.jpg', 30, 0),
(63, 'ec_665085857f.jpg', 30, 0),
(64, 'ec_e1d7baf810.jpg', 31, 0),
(65, 'ec_b1638eff25.jpg', 31, 0),
(66, 'ec_9279977775.jpg', 32, 0),
(67, 'ec_0e61f81dad.jpg', 32, 0),
(68, 'ec_3f0521e510.jpg', 33, 0),
(164, 'ec_c08fbaa176.jpg', 33, 0),
(70, 'ec_786d2fe2de.jpg', 33, 0),
(71, 'ec_9825216ba1.jpg', 34, 0),
(72, 'ec_9ff78c43c2.jpg', 34, 0),
(73, 'ec_520c385d48.jpg', 34, 0),
(74, 'ec_639b7757b2.jpg', 35, 0),
(75, 'ec_6472b463a6.jpg', 35, 0),
(76, 'ec_87b36364ca.jpg', 36, 0),
(77, 'ec_5c38cea8d1.jpg', 36, 0),
(78, 'ec_77a9618d0f.jpg', 36, 0),
(79, 'ec_d6d6da41e6.jpg', 37, 0),
(80, 'ec_11e46559cc.jpg', 37, 0),
(81, 'ec_caeea9e631.jpg', 37, 0),
(83, 'ec_de03f67ae9.jpg', 37, 0),
(84, 'ec_5830eacbd0.jpg', 38, 0),
(85, 'ec_9e07567c91.jpg', 38, 0),
(86, 'ec_e84989842e.jpg', 38, 0),
(87, 'ec_20ffcf15f0.jpg', 38, 0),
(88, 'ec_86ef1bd687.jpg', 39, 0),
(89, 'ec_6f7da129af.jpg', 39, 0),
(90, 'ec_48fa22f0cc.jpg', 39, 0),
(91, 'ec_aa16eb4822.jpg', 40, 0),
(92, 'ec_e2d9524929.jpg', 40, 0),
(93, 'ec_6484c9def9.jpg', 41, 0),
(94, 'ec_f89caf58cf.jpg', 41, 0),
(95, 'ec_c590c30cb4.jpg', 41, 0),
(96, 'ec_3e270653b0.jpg', 42, 0),
(97, 'ec_cd6a049095.jpg', 42, 0),
(98, 'ec_5d50f32ab9.jpg', 42, 0),
(99, 'ec_e7e85142b0.jpg', 43, 0),
(100, 'ec_017041977c.jpg', 43, 0),
(101, 'ec_d5fc624392.jpg', 43, 0),
(102, 'ec_c610649956.jpg', 44, 0),
(103, 'ec_1fc652c798.jpg', 44, 0),
(104, 'ec_5a5b7649d8.jpg', 44, 0),
(105, 'ec_7ff1066284.jpg', 45, 0),
(106, 'ec_9eb4bf0aa3.jpg', 45, 0),
(107, 'ec_018a9fb8ef.jpg', 45, 0),
(108, 'ec_ee1c6e3cc1.jpg', 46, 0),
(109, 'ec_af35c2e187.jpg', 46, 0),
(110, 'ec_5f0ede30ea.jpg', 46, 0),
(111, 'ec_680723c59a.jpg', 48, 0),
(112, 'ec_319e53db32.jpg', 48, 0),
(113, 'ec_95995e1a65.jpg', 49, 0),
(114, 'ec_6db1a12ee2.jpg', 49, 0),
(115, 'ec_1e8714df55.jpg', 49, 0),
(116, 'ec_15cc967341.jpg', 50, 0),
(117, 'ec_912005d5f0.jpg', 50, 0),
(118, 'ec_986e349303.jpg', 50, 0),
(119, 'ec_5c1bf34405.jpg', 50, 0),
(120, 'ec_5117b1e3e6.jpg', 51, 0),
(121, 'ec_8b14b4d62d.jpg', 51, 0),
(122, 'ec_a51a24f9a0.jpg', 51, 0),
(123, 'ec_c46c177268.jpg', 51, 0),
(124, 'ec_3ea73bfc75.jpg', 52, 0),
(125, 'ec_d8cb174c5f.jpg', 52, 0),
(126, 'ec_26737d59bc.jpg', 52, 0),
(127, 'ec_237f17ed98.jpg', 53, 0),
(128, 'ec_d08161b640.jpg', 53, 0),
(129, 'ec_ae36df9dca.jpg', 54, 0),
(130, 'ec_805bc6b25b.jpg', 54, 0),
(131, 'ec_65f1cd81b8.jpg', 54, 0),
(132, 'ec_cbaaa9a269.jpg', 55, 0),
(133, 'ec_36bca10ce8.jpg', 55, 0),
(134, 'ec_bf72651bcf.jpg', 56, 0),
(135, 'ec_623090050b.jpg', 56, 0),
(136, 'ec_8eef12b129.jpg', 56, 0),
(137, 'ec_12ed6e2ff0.jpg', 56, 0),
(138, 'ec_2e42a4de41.jpg', 57, 0),
(139, 'ec_c194afd805.jpg', 57, 0),
(140, 'ec_5c397ba9d1.jpg', 57, 0),
(141, 'ec_bcec248545.jpg', 58, 0),
(142, 'ec_a9151a784f.jpg', 58, 0),
(143, 'ec_d089f78ffc.jpg', 59, 0),
(144, 'ec_39ed3603c6.jpg', 59, 0),
(145, 'ec_4c0e1188eb.jpg', 59, 0),
(146, 'ec_593f89ce12.jpg', 60, 0),
(147, 'ec_6951418fd5.jpg', 60, 0),
(148, 'ec_c8a968308d.jpg', 61, 0),
(149, 'ec_58427433cd.jpg', 61, 0),
(150, 'ec_6f614b92ad.jpg', 61, 0),
(151, 'ec_02ce143c14.jpg', 62, 0),
(152, 'ec_61b2bebb00.jpg', 62, 0),
(153, 'ec_36d9c6e97c.jpg', 62, 0),
(154, 'ec_1ea8bbc209.jpg', 63, 0),
(155, 'ec_6563934c46.jpg', 63, 0),
(156, 'ec_ce7de5523d.jpg', 63, 0),
(157, 'ec_1e3df49fd4.jpg', 64, 0),
(158, 'ec_825bbad708.jpg', 64, 0),
(159, 'ec_b8449e9370.jpg', 64, 0),
(160, 'ec_3ee36aeebb.jpg', 9, 0),
(161, 'ec_344915df15.jpg', 47, 0),
(162, 'ec_9abd8be4cd.jpg', 47, 0),
(163, 'ec_feab7e32d4.jpg', 47, 0),
(165, 'ec_caef9606d2.jpg', 66, 0),
(166, 'ec_effce19ccb.jpg', 66, 0),
(167, 'ec_08c9fbb46e.jpg', 24, 0);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int NOT NULL,
  `type` int DEFAULT NULL,
  `category` int NOT NULL,
  `category_2` int NOT NULL,
  `title` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `top` int DEFAULT NULL,
  `title_en` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` tinyint(1) NOT NULL,
  `slug` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_ars` decimal(10,2) NOT NULL,
  `price_usd` decimal(10,2) NOT NULL,
  `size` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `size_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` tinyint NOT NULL,
  `text_2` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_2_en` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `type`, `category`, `category_2`, `title`, `text`, `image`, `top`, `title_en`, `text_en`, `author`, `slug`, `price_ars`, `price_usd`, `size`, `size_en`, `stock`, `text_2`, `text_2_en`) VALUES
(27, 1, 4, 4, 'Florero IV (Chato)', 'Florero Alfarería . Arcillas locales y arenas de río. Quema en horno Anagama.', 'ec_ebdd6f9feb96.jpg', 0, 'Vase IV (Flat)', 'Details: Pottery vase. Local clays and river sands. Fired in Anagama kiln.', 1, 'vase-iv-flat', 74999.00, 80.00, '7,5 h x Ø 17 cm', '7,5 h x Ø 17 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(4, NULL, 0, 0, '1', NULL, NULL, 3, '2', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(6, 3, 0, 0, 'Clementina', 'https://www.instagram.com/clementina.cf', NULL, 0, ' @clementina.cf', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(8, 4, 0, 0, 'Horno Chico', 'Dentro de las herramientas con las que contamos tenemos un horno de ciclo más corto. Es un horno más ágil de ciclo de 15 horas.', NULL, 0, 'Horno Chico', 'Dentro de las herramientas con las que contamos tenemos un horno de ciclo más corto. Es un horno más ágil de ciclo de 15 horas.', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(9, 4, 0, 0, 'Anagama', 'Se trata de un horno oriental primitivo donde una misma cámara alberga hogar y piezas. En este horno, quemamos dos o tres veces por año, en ciclos que van de ochenta (80) a cien (100) horas. Es un proceso en el que se combinan el tiempo conla cercanía de las piezas a la materialidad del fuego. De esta unión nace una estética particular y única. La ceniza procedente de la madera de la combustión se deposita durante la horneada sobre las piezas y al combinarse con los cuerpos generan un vidriado natural.\r\nEl trabajo con este horno es particular. La quema es tan incierta que los resultados son imposibles de predecir. Hay muchas variables que no podemos controlar, el hecho de que sea así va trazando una especie de diálogo entre el horno y cada una de las piezas.\r\nVamos ganando experiencia y aprendizaje con cada ciclo. Y al final, las piezas se muestran como un registro sensible de todo el proceso del fuego.\r\nLa quema de anagama representa la etapa final de un proceso y también una postura nuestra diferente donde ya no somos los que estamos modelando sino que estamos al servicio de ese proceso: aprendiendo a timonear el barco o un engranaje que permite otra cosa.', NULL, 5, 'Anagama', 'Se trata de un horno oriental primitivo donde una misma cámara alberga hogar y piezas. En este horno, quemamos dos o tres veces por año, en ciclos que van de ochenta (80) a cien (100) horas. Es un proceso en el que se combinan el tiempo conla cercanía de las piezas a la materialidad del fuego. De esta unión nace una estética particular y única. La ceniza procedente de la madera de la combustión se deposita durante la horneada sobre las piezas y al combinarse con los cuerpos generan un vidriado natural.\r\nEl trabajo con este horno es particular. La quema es tan incierta que los resultados son imposibles de predecir. Hay muchas variables que no podemos controlar, el hecho de que sea así va trazando una especie de diálogo entre el horno y cada una de las piezas.\r\nVamos ganando experiencia y aprendizaje con cada ciclo. Y al final, las piezas se muestran como un registro sensible de todo el proceso del fuego.\r\nLa quema de anagama representa la etapa final de un proceso y también una postura nuestra diferente donde ya no somos los que estamos modelando sino que estamos al servicio de ese proceso: aprendiendo a timonear el barco o un engranaje que permite otra cosa.', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(10, 4, 0, 0, 'Noborigama', 'El Noborigama fue el segundo horno que construimos en Patagonia. Nos recuerda siempre a nuestro maestro Im Kyong Woo y el tiempo que compartimos con él. Fue el horno que nos sugirió construir dada su experiencia; tuvimos la suerte de guardar diseños de hornos suyos donde nos daba muchas referencias de uso y recomendaciones. Ante lo difícil de entendernos\r\ncon él por el poco español que hablaba, el dibujo resultó siempre un puente entre su pensamiento y su comunicación.\r\nEs un horno que tiene un ciclo de 30 horas de cocción.', NULL, 10, 'Noborigama', 'El Noborigama fue el segundo horno que construimos en Patagonia. Nos recuerda siempre a nuestro maestro Im Kyong Woo y el tiempo que compartimos con él. Fue el horno que nos sugirió construir dada su experiencia; tuvimos la suerte de guardar diseños de hornos suyos donde nos daba muchas referencias de uso y recomendaciones. Ante lo difícil de entendernos\r\ncon él por el poco español que hablaba, el dibujo resultó siempre un puente entre su pensamiento y su comunicación.\r\nEs un horno que tiene un ciclo de 30 horas de cocción.', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(11, 5, 1, 0, '', NULL, 'ec_a45d8a761016.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(12, 5, 1, 0, '', NULL, 'ec_4577de391f55.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(14, 5, 1, 0, '', NULL, 'ec_549d43010737.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(15, 5, 1, 0, '', NULL, 'ec_423c108a00c7.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(16, 5, 1, 0, '', NULL, 'ec_c579c60f072c.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(17, 5, 1, 0, '', NULL, 'ec_46e5caa41603.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(18, 5, 1, 0, NULL, NULL, 'ec_8152c8790ef4.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(19, 5, 1, 0, '', NULL, 'ec_5de2a417425f.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(20, 5, 2, 0, '', NULL, 'ec_2bf119d486a2.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(21, 5, 2, 0, '', NULL, 'ec_5c524c2f7781.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(22, 5, 2, 0, '', NULL, 'ec_b284622f2155.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(23, 5, 2, 0, '', NULL, 'ec_dbd32c3695dd.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(24, 1, 4, 4, 'Botella chica', 'Alfarería, porcelana salvaje (caolín, pórfido y arena silícea). Quema horno Noborigama.', 'ec_79066a61bc42.jpg', 0, 'Vase I', 'Pottery. Wild porcelain (kaolin, porphyry, and silica sand). Fired in Noborigama kiln.', 2, 'vase-i', 54998.00, 35.00, '8 h × 7,5 Ø × 3 boca (cm)', '8 h × 7,5 Ø × 3 rim (cm)', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(25, 1, 4, 4, 'Florero (II)', 'Florero para uso en seco. Alfarería modelada. Arcillas locales, arena de río. Quema Anagama.\r\n', 'ec_3f4ea1930b74.jpg', 0, 'Flower Vase ', 'Vase for dry use. Hand-built pottery. Local clays, river sand. Fired in Anagama kiln.', 2, 'flower-vase-', 80000.00, 50.00, '20x16x8 cm\r\nEl precio incluye costos de envío dentro de Argentina', '20x16x8 cm\r\nThe price includes shipping costs', 1, '', ''),
(26, 1, 4, 4, 'Florero (III)', 'Florero para uso en Seco. Alfarería modelada. Arcillas locales y arenas de río. Quema en horno Anagama.\r\n', 'ec_074798a972ca.jpg', 0, 'Flower vase', 'Details: Vase for dry use. Hand-built pottery. Local clays and river sands. Fired in Anagama kiln.', 2, 'flower-vase', 90000.00, 60.00, '13×10×10 cm\r\nEl precio incluye costos de envío dentro de Argentina', '13×10×10 cm\r\nThe price includes shipping costs', 1, '', ''),
(28, 1, 4, 4, 'Florero (V23)', 'Alfarería. Arcillas locales y arenas de río. Quema en horno Anagama.', 'ec_140d7b283de7.jpg', 0, 'Flower Vase ', 'Pottery. Local clays and river sands. Fired in Anagama kiln.', 1, 'flower-vase-', 64997.00, 70.00, '14 h x Ø 11 cm', '14 h x Ø 11 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(29, 1, 7, 7, 'Fauna (objeto 1)', 'De la serie Fauna. Modelado, porcelana, quema Anagama.', 'ec_00257cda8611.jpg', 0, 'Fauna ', 'From the Fauna series. Hand-built, porcelain, Anagama firing.', 2, 'fauna-', 550000.00, 400.00, '16×15×10 cm', '16×15×10 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(30, 1, 7, 7, 'Nómade ', 'De la serie Nómade. Alfarería, porcelana quema en Anagama.', 'ec_443370246c1f.jpg', 0, 'Nomade', 'From the Nomad series. Pottery, porcelain, Anagama firing.', 2, 'nomade', 450000.00, 300.00, '18×10×12 cm', '18×10×12 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(31, 1, 7, 7, 'Nómade', 'De la serie Nómade. Alfarería, porcelana salvaje (caolín, pórfido y curazo) quema en Anagama.\r\n', 'ec_445405dc894c.jpg', 0, 'Nómade', 'From the Nomad series. Pottery, wild porcelain (kaolin, porphyry, and curazo), Anagama firing.', 2, 'nmade', 349999.00, 250.00, '17×12×9 cm', '17×12×9 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(32, 1, 7, 7, 'Nómade (objeto)', 'De la serie nómade. Alfarería, porcelana. Quema en Anagama.', 'ec_74454887c62d.jpg', 0, 'Nomade object', 'From the Nomad series. Pottery, porcelain. Anagama firing.', 2, 'nomade-object', 249999.00, 150.00, '16×8×9 cm', '16×8×9 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(33, 1, 7, 7, 'Vasija', 'Vessel placed at the front of the Anagama kiln; piece with heavy ash deposit. Natural ash glaze, pottery, local materials, fired at 1300°C.', 'ec_976d8dc3fd36.jpg', 0, 'Vase', 'Vasija ubicada en el frente del horno Anagama, pieza con gran depósito de ceniza. Vidriado natural, alfarería, materiales locales, quema 1300°C.\r\n', 1, 'vase', 580000.00, 650.00, '28 h × Ø 29 cm', '28 h × Ø 29 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(34, 1, 2, 2, 'Katakuchi (K5)', 'Katakuchi / Cuenco con pico\r\nAlfarería, arcillas caoliníticas y locales con arenas y pórfido. Quema en horno Anagama.\r\n', 'ec_2ab581eb418b.jpg', 0, 'Katakuchi (K5)', 'Katakuchi / Spouted Bowl\r\nDetails: Pottery. Kaolinitic and local clays with sand and porphyry. Anagama firing.', 1, 'katakuchi-k5', 90000.00, 100.00, '7,5 h × Ø 14 cm', '7,5 h × Ø 14 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(35, 1, 2, 2, 'Cuenco (CO6)', 'Cuenco\r\nAlfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno anagama.', 'ec_a347d03c693a.jpg', 0, 'Bowl', 'Bowl\r\nPottery. Kaolinitic and local clays with sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'bowl', 90000.00, 100.00, '7,5 h × Ø 15,5 cm', '7,5 h × Ø 15,5 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(36, 1, 2, 2, 'Soba choko , vaso  (C1)', 'Pastas locales, quema en anagama.', 'ec_211f329106df.jpg', 0, 'Soba Choko/ cup', 'Local and caolinitic clay. Anagama fired.', 1, 'soba-choko-cup', 65000.00, 35.00, '6 h × Ø 8,5 cm', '6 h × Ø 8,5 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(37, 1, 2, 2, 'Soba Choko / vaso (SC3)', 'Porcelana salvaje. Quema en horno Anagama\r\n', 'ec_1596dc63a3cb.jpg', 0, 'Soba Choko/ cup', 'Porcelain \r\nAnagama Kiln', 1, 'soba-choko-cup', 55000.00, 40.00, '5 h × Ø 7,5 cm', '5 h × Ø 7,5 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(38, 1, 2, 2, 'Katakuchi (11)', 'Cuenco con pico / Katakuchi\r\nAlfarería 1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural  de volatilización de ceniza. Quema en horno Anagama.', 'ec_021e5bf275d4.jpg', 0, 'Katakuchi', 'Katakuchi / Spouted Bowl\r\nPottery fired at 1300°C. Kaolinitic and local clays with sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'katakuchi', 89998.00, 100.00, '8 h × Ø 18 cm', '8 h × Ø 18 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(39, 1, 2, 2, 'Plato (25)', 'Plato\r\nAlfarería 1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_f8d4cc1c4ae5.jpg', 0, 'Plate', 'Plate\r\nPottery fired at 1300°C. Kaolinitic and local clays with sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'plate', 75000.00, 90.00, '4 h × Ø 19,5 cm', '4 h × Ø 19,5 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(40, 1, 2, 2, 'Plato (18)', 'Plato\r\nDetalle: Alfarería Stoneware 1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_4e032302b448.jpg', 0, 'P18', 'Plate\r\nPottery fired at 1300°C. Kaolinitic and local clays with sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'p18', 74998.00, 90.00, '4 h × Ø 16,5 cm', '4 h × Ø 16,5 cm', 1, 'El precio incluye costos de envío', 'The price includes shipping costs'),
(41, 1, 2, 2, 'Plato (14)', 'Plato\r\nAlfarería Stoneware 1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.\r\n', 'ec_7902c4a1190b.jpg', 0, 'Plate', 'Plate\r\nStoneware fired at 1300°C. Kaolinitic and local clays with sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'plate', 74999.00, 90.00, '4 h × Ø 15,5 cm', '4 h × Ø 15,5 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(42, 1, 2, 2, 'Cuenco de arroz (C5)', 'Cuenco Arroz \r\nAlfarería Porcelana 1300 °C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_0766c92dbe32.jpg', 0, 'Rice Bowl ', 'Rice Bowl\r\nPorcelain pottery fired at 1300°C. Natural ash-volatilization glaze. Anagama firing.', 1, 'rice-bowl-', 75000.00, 90.00, '7 h × Ø 14.5 cm', '7 h × Ø 14.5 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(43, 1, 2, 2, 'Cuenco de Arroz (C2)', 'Cuenco arroz\r\nArcillas caoliníticas locales con arenas y pórfido 1300 °C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_1374ce7aaa80.jpg', 0, 'Rice bowl ', 'Rice Bowl\r\nLocal kaolinitic clays with sand and porphyry, fired at 1300°C. Natural ash-volatilization glaze. Anagama firing.', 1, 'rice-bowl-', 74999.00, 90.00, '7,5 h × Ø 15 cm', '7,5 h × Ø 15 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(44, 1, 2, 2, 'Cuenco de Arroz (C1)', 'Cuenco arroz\r\nArcillas caoliníticas locales con arenas y pórfido 1300 °C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_7fe99fcaf628.jpg', 0, 'Rice Bowl (C1)', 'Rice Bowl\r\nLocal kaolinitic clays with sand and porphyry, fired at 1300°C. Natural ash-volatilization glaze. Anagama firing.', 1, 'rice-bowl-c1', 74998.00, 90.00, '9 h × Ø 17 cm\r\nEl precio incluye Costos de envío', '9 h × Ø 17 cm\r\nThe price includes shipping costs', 1, '', ''),
(45, 1, 2, 2, 'Cuenco de arroz (C9)', 'Cuenco arroz\r\nAlfarería, porcelana salvaje 1300°C. Caolines locales con arena silícea y pórfido 1300°C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_d8a516a204d2.jpg', 0, 'Rice Bowl (C9)', 'Rice Bowl\r\nWild porcelain fired at 1300°C. Local kaolins with silica sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'rice-bowl-c9', 75000.00, 90.00, '5,5 h × Ø 13 cm\r\nEl precio incluye costos de envío', '5,5 h × Ø 13 cm\r\nThe price included shipping costs', 1, '', ''),
(46, 1, 2, 2, 'Cuenco de arroz (4)', 'Cuenco de arroz\r\nAlfarería 1300°C. Arcillas caoliníticas locales con arena silícea y pórfido 1300°C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_7f812808c84f.jpg', 0, 'Rice Bowl (4)', 'Rice Bowl\r\nPottery fired at 1300°C. Local kaolinitic clays with silica sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'rice-bowl-4', 75000.00, 90.00, '7 h × Ø 13 cm\r\nEl precio incluye costos de envío ', '7 h × Ø 13 cm\r\nThe price includes shipping costs', 1, '', ''),
(47, 1, 2, 2, 'Vaso de Sake (S1)', 'Vaso Sake\r\nAlfarería 1300°C. Arcillas caoliníticas locales con arena silícea y pórfido 1300°C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_3e1d8e9cd71c.jpg', 0, 'Sake Cup (S1)', 'Sake Cup\r\nPottery fired at 1300°C. Local kaolinitic clays with silica sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'sake-cup-s1', 45000.00, 35.00, '4,5 h × Ø 6 cm\r\nEl precio incluye costos de envío dentro de Argentina.', '4,5 h × Ø 6 cm\r\nThe price includes shipping costs', 1, '', ''),
(48, 1, 2, 2, 'Botella Sake', 'Alfarería 1300°C. Arcillas caoliníticas locales con arena silícea y pórfido 1300°C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_0aca3b82581f.jpg', 0, 'Sake Bottle', 'Pottery fired at 1300°C. Local kaolinitic clays with silica sand and porphyry. Natural ash-volatilization glaze. Anagama firing.', 1, 'sake-bottle', 75000.00, 90.00, '11,5 h × Ø 7,5 cm\r\nEl precio incluye costos de envío dentro de Aregentina', '11,5 h × Ø 7,5 cm\r\nThe price includes shipping costs', 1, '', ''),
(49, 1, 2, 2, 'Cuenco Arrocero (CA2)', 'Cuenco\r\nPorcelana salvaje. Quema Anagama, vidriado natural con depósito de cenizas. Alfarería.', 'ec_49a74208009f.jpg', 0, 'Rice Bowl (CA2)', 'Wild porcelain. Anagama firing with natural ash deposit. Pottery.', 1, 'rice-bowl-ca2', 85000.00, 110.00, '5 h × Ø 15 cm\r\nEl precio incluye costos de envío en Argentina', '5 h × Ø 15 cm\r\nThe price includes shipping costs', 1, '', ''),
(50, 1, 2, 2, 'Tetera Kyusu (T1)', 'Tetera Kyusu\r\nAlfarería 1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_526364e80866.jpg', 0, 'Kyusu Teapot (T1)', 'Kyusu Teapot\r\nPottery fired at 1300 °C. Kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'kyusu-teapot-t1', 105000.00, 120.00, '250 ml\r\nEl precio incluye costos de envío.', '250 ml\r\nThe price includes shipping costs', 1, '', ''),
(51, 1, 2, 2, 'Tetera Kyusu (T2)', 'Tetera kyusu\r\nAlfarería 1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_fb51ee77384e.jpg', 0, 'Kyusu Teapot (T2)', 'Pottery fired at 1300 °C. Kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'kyusu-teapot-t2', 105000.00, 120.00, '250 ml\r\nEl precio incluye costos de envío en Argentina', '250 ml\r\nThe price includes shipping costs', 1, '', ''),
(52, 1, 2, 2, 'Tetera Kyusu (T3)', 'Tetera Kyusu\r\nAlfarería  1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_895fd8913472.jpg', 0, 'Kyusu Teapot (T3)', 'Kyusu Teapot\r\nPottery fired at 1300 °C. Kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'kyusu-teapot-t3', 105000.00, 120.00, '200 ml\r\nEl precio incluye costos de envío en Argentina', '200 ml\r\nThe price includes shipping costs', 1, '', ''),
(53, 1, 2, 2, 'Tetera Kyusu (T4)', 'Tetera Kyusu\r\nAlfarería  1300 °C. Arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_7d5218c0adb8.jpg', 0, 'Kyusu Teapot (T4)', 'Kyusu Teapot\r\nPottery fired at 1300 °C. Kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'kyusu-teapot-t4', 105000.00, 120.00, '100 ml\r\nEl precio incluye costos de envío dentro de Argentina', '100 ml\r\nThe price includes shipping costs', 1, '', ''),
(54, 1, 5, 5, 'Cuenco de té (TC4)', 'Cuenco de té\r\nAlfarería, porcelana salvaje (arena silícea, caolines locales y pórfido). Quema en horno Anagama.\r\n', 'ec_b50a66e6e595.jpg', 0, 'Tea Cup (TC4)', 'Tea Cup \r\nPottery, wild porcelain (siliceous sand, local kaolins, and porphyry). Fired in an anagama kiln.', 1, 'tea-cup-tc4', 65000.00, 75.00, '6 h × Ø 10 cm\r\nEl precio incluye costos de envío en Argentina', '6 h × Ø 10 cm\r\nThe price includes shipping costs', 1, '', ''),
(55, 1, 5, 5, 'Yunomi (YV26)', 'Yunomi / Vaso\r\nAlfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_2948e181e2d1.jpg', 0, 'Yunomi (YV26)', 'Yunomi / Cup\r\nPottery made with kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'yunomi-yv26', 54997.00, 75.00, '8,5 h × Ø 7 cm\r\n', '8,5 h × Ø 7 cm\r\n', 1, 'El precio Incluye el costo del envío.', 'The price includes the cost of shipping.'),
(56, 1, 5, 5, 'Cuenco de té (TEC2)', 'Cuenco de té\r\nAlfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_dc7aaf2819a8.jpg', 0, 'Tea Cup (TEC2)', 'Tea Cup\r\nPottery made with kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'tea-cup-tec2', 54999.00, 70.00, '5,5 h × Ø 11 cm\r\nEl precio incluye Costos de envío dentro de Argentina.', '5,5 h × Ø 11 cm\r\nThe price includes shipping costs.', 1, '', ''),
(57, 1, 5, 5, 'Cuenco de té (TEC1)', 'Cuenco de té\r\nAlfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_cb1c224c15d8.jpg', 0, 'Tea Cup (TEC1)', 'Tea Cup\r\nPottery made with kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'tea-cup-tec1', 65000.00, 70.00, '6 h × Ø 10 cm\r\nEl precio incluye costos de envío dentro de Argentina.', '6 h × Ø 10 cm\r\nThe price includes shipping costs', 1, '', ''),
(58, 1, 5, 5, 'Shiboridashi I', 'Alfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_1a37d2fedafd.jpg', 0, 'Shiboridashi I', 'Pottery made with kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'shiboridashi-i', 75000.00, 80.00, '100 ml\r\nEl precio incluye costos de envío dentro de Argentina', '100 ml\r\nThe price includes shipping costs', 1, '', ''),
(59, 1, 5, 5, 'Shiboridashi II', 'Alfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_f99b7df199c3.jpg', 0, 'Shiboridashi II', 'Pottery made with kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'shiboridashi-ii', 75000.00, 80.00, '150 ml', '150 ml', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(60, 1, 5, 5, 'Cuenco de té (TC75)', 'Cuenco de té\r\nAlfarería, porcelana, caolines locales con arena silícea y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_e293f7dff356.jpg', 0, 'Teacup TC75', 'Tea Cup\r\nPottery, porcelain with local kaolins, siliceous sand, and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'teacup-tc75', 64999.00, 75.00, '6 h × Ø 8.5 cm', '6 h × Ø 8.5 cm', 1, 'El precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(61, 1, 5, 5, 'Cuenco de té (TC63)', 'Cuenco de té\r\nDetalle: Alfarería, porcelana, caolines locales con arena silícea y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_e7e7cdc33955.jpg', 0, 'Tea Cup TC63', 'Tea Cup\r\nPottery, porcelain with local kaolins, siliceous sand, and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'tea-cup-tc63', 65000.00, 75.00, '6 h × Ø 8 cm\r\nEl precio incluye costos de envío dentro de Argentina', '6 h × Ø 8 cm\r\nThe price includes shipping costs', 1, '', ''),
(62, 1, 5, 5, 'Chawan (C22)', 'Chawan Cuenco\r\nAlfarería, 1300°C. Arcillas caoliníticas locales con arena silícea y pórfido 1300°C. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_de4a7ebacf36.jpg', 0, 'Chawan (C22)', 'Chawan / Tea Bowl\r\nPottery fired at 1300 °C. Local kaolinitic clays with siliceous sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'chawan-c22', 89999.00, 100.00, '7 h × Ø 13.5 cm\r\nEl precio incluye costos de envío dentro de Argentina.', '7 h × Ø 13.5 cm\r\nThe price includes shipping costs', 1, '', ''),
(63, 1, 5, 5, 'Cha Hai (CHA6)', 'Cha hai \r\nAlfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_b44d34327e74.jpg', 0, 'Cha Hai (CHA6)', 'Cha Hai\r\nPottery made with kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'cha-hai-cha6', 75000.00, 75.00, '6.5 h × Ø 10 cm\r\nEl precio incluye costos de envío dentro de Argentina', '6.5 h × Ø 10 cm\r\nThe price includes shipping costs', 1, '', ''),
(64, 1, 5, 5, 'Gaiwan', 'Alfarería, arcillas caoliníticas y locales con arenas y pórfido. Vidriado natural de volatilización de ceniza. Quema en horno Anagama.', 'ec_cd6465925c4b.jpg', 0, 'Gaiwan', 'Pottery made with kaolinitic and local clays with sand and porphyry. Natural ash-deposit glaze from volatilization. Fired in an anagama kiln.', 1, 'gaiwan', 90000.00, 100.00, '100 ml', '100 ml', 1, 'El Precio incluye costos de envío dentro de Argentina', 'The price includes shipping costs'),
(71, 6, 0, 0, 'Espacio Cerámica', 'Espacio Cerámica es un taller de producción y experimentación de cerámica a leña, fundado en 2008 por los ceramistas Victoria Drisaldi (Buenos Aires) y Fernando López (Rosario). Actualmente se encuentra en Gaiman, en la margen sur del río Chubut, una región árida propia de la estepa patagónica.\r\n\r\nEl taller nació en este entorno rural, donde también se construyeron varios hornos a leña. De este modo, el trabajo se centra especialmente en la quema en horno Anagama —de una sola cámara y diseño oriental—, herramienta ancestral que se resignifica desde una mirada contemporánea, revelando la huella material y la cualidad expresiva de las piezas.\r\n\r\nLa ubicación geográfica del taller responde a esta búsqueda estética consciente, basada en la comunión entre el oficio y el modo de vida que posibilita el contexto. Así, la alfarería se desarrolla con materiales locales, explorando pastas propias y vidriados de alta temperatura a leña.\r\n\r\nLo que se crea en Espacio cerámica, nuestros objetos, son producción directa del lugar habitado. Se trata de objetos que sólo pueden haberse hecho acá, en esta región, en esta zona geográfica donde el taller crece y funciona. Entendemos el oficio en su relación inseparable con el territorio, como una manera de habitarlo, cuidarlo, para trabajar la materia, y para darle usos y significaciones nuevas.\r\n\r\nEspacio Cerámica is a ceramics workshop founded in 2008 by Victoria Drisaldi and Fernando López. It is located in Gaiman, in the southern part of the Chubut region, a region of great natural beauty. The workshop was born in this environment, where the workshops grow and operate. We understand the office in its inseparable relationship with the territory, as a way of living, caring, working the material, and giving it new meanings.', 'ec_ecb4f6b6f3df.jpg', 0, 'Espacio Cerámica', 'The geographic location of the workshop responds to this conscious aesthetic search, based on the community between the office and the way of life that allows the context. As such, the workshop develops with local materials, exploring local pastures and greenhouses of high temperature.\r\n\r\nWhat we create in Espacio Cerámica, our objects, are direct production of the place habited. We understand the office in its inseparable relationship with the territory, as a way of living, caring, working the material, and giving it new meanings.', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(67, 5, 2, 0, NULL, NULL, 'ec_82cd3c085864.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(68, 5, 2, 0, NULL, NULL, 'ec_4529ed08c678.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(69, 5, 2, 0, NULL, NULL, 'ec_ea20de37fdff.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(70, 5, 2, 0, NULL, NULL, 'ec_516ec56288e1.jpg', 0, '', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(72, 7, 0, 0, 'Inicio', '', 'ec_2723e726076c.jpg', 0, 'Inicio', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(73, 7, 2, 0, 'Espacio Cerámica', 'Espacio Cerámica es un taller de producción y experimentación de cerámica a leña, fundado en 2008 por los ceramistas Victoria Drisaldi (Buenos Aires) y Fernando López (Rosario). Actualmente se encuentra en Gaiman, en la margen sur del río Chubut, una región árida propia de la estepa patagónica.\r\n\r\nEl taller nació en este entorno rural, donde también se construyeron varios hornos a leña. De este modo, el trabajo se centra especialmente en la quema en horno Anagama —de una sola cámara y diseño oriental—, herramienta ancestral que se resignifica desde una mirada contemporánea, revelando la huella material y la cualidad expresiva de las piezas.\r\n\r\nLa ubicación geográfica del taller responde a esta búsqueda estética consciente, basada en la comunión entre el oficio y el modo de vida que posibilita el contexto. Así, la alfarería se desarrolla con materiales locales, explorando pastas propias y vidriados de alta temperatura a leña.\r\n\r\nLo que se crea en Espacio cerámica, nuestros objetos, son producción directa del lugar habitado. Se trata de objetos que sólo pueden haberse hecho acá, en esta región, en esta zona geográfica donde el taller crece y funciona. Entendemos el oficio en su relación inseparable con el territorio, como una manera de habitarlo, cuidarlo, para trabajar la materia, y para darle usos y significaciones nuevas.', 'ec_b74be9297f5d.jpg', 0, 'Espacio Cerámica', 'The geographic location of the workshop responds to this conscious aesthetic search, based on the community between the office and the way of life that allows the context. As such, the workshop develops with local materials, exploring local pastures and greenhouses of high temperature.\r\n\r\nWhat we create in Espacio Cerámica, our objects, are direct production of the place habited. We understand the office in its inseparable relationship with the territory, as a way of living, caring, working the material, and giving it new meanings.', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(78, 3, 0, 0, 'Carolina', 'https://www.instagram.com/carojunio', NULL, 0, '@carojunio', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(79, 3, 0, 0, 'Anu', 'https://www.instagram.com/fanga.taller.de.ceramica', NULL, 0, '@fanga.taller.de.ceramica', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(80, 3, 0, 0, 'Camila', 'https://www.instagram.com/mzk.ceramica', NULL, 0, '@mzk.ceramica', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(77, 3, 0, 0, 'Lautaro', 'https://www.instagram.com/rein.ceramica', NULL, 0, '@rein.ceramica', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(74, 7, 3, 0, 'Residencias', '', 'ec_b0f8b3211fed.jpg', 0, 'Residencias', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(75, 7, 4, 0, 'Hornos', '', 'ec_b02c713b3f73.jpg', 0, 'Hornos', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(76, 7, 5, 0, 'Pasantías', 'A lo largo del año recibimos a voluntarios interesados en acompañarnos en las distintas etapas del proceso de producción y así profundizar en el oficio desde una experiencia en el territorio, compartiendo junto a nosotros la cotidianeidad del día y el taller.', 'ec_a75fb049d696.jpg', 0, 'Pasantías', 'A lo largo del año recibimos a voluntarios interesados en acompañarnos en las distintas etapas del proceso de producción y así profundizar en el oficio desde una experiencia en el territorio, compartiendo junto a nosotros la cotidianeidad del día y el taller.', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(81, 3, 0, 0, 'Juan', 'https://www.instagram.com/kumo.ceramica', NULL, 0, '@kumo.ceramica', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(82, 3, 0, 0, 'Ludmila', 'https://www.instagram.com/ludmilaguida', NULL, 0, '@ludmilaguida', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(83, 3, 0, 0, 'Florencia', 'https://www.instagram.com/laflorchina', NULL, 0, '@laflorchina', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(84, 3, 0, 0, 'Carla', 'https://www.instagram.com/carla_houdini', NULL, 0, '@carla_houdini', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(85, 3, 0, 0, 'Ailin', 'https://www.instagram.com/ceramicaquimun', NULL, 0, '@ceramicaquimun', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(86, 3, 0, 0, 'Sol', 'https://www.instagram.com/sol.carranza.sieber', NULL, 0, '@sol.carranza.sieber', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(87, 3, 0, 0, 'Pablo', 'https://www.instagram.com/pablo6lo.luan', NULL, 0, '@pablo6lo.luan', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(88, 3, 0, 0, 'Pilar', 'https://www.instagram.com/@pilarsalinasp', NULL, 0, '@pilarsalinasp', '', 0, '', 0.00, 0.00, '', '', 0, '', ''),
(89, 3, 0, 0, 'Joaquín', 'https://www.instagram.com/joaquinxmerino', NULL, 0, '@joaquinxmerino', '', 0, '', 0.00, 0.00, '', '', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `client` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `url` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `client`, `url`, `date`, `user`, `password`) VALUES
(1, 'Espacio Cerámica', '', 'Octubre 2025', 'admin', 'Betelgeuse25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
