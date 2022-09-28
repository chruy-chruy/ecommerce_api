--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: trigger_set_timestamp(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.trigger_set_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


ALTER FUNCTION public.trigger_set_timestamp() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart (
    cart_id bigint NOT NULL,
    customer_id bigint,
    product_id bigint,
    quantity integer,
    created_at timestamp without time zone DEFAULT now(),
    status character varying(100)
);


ALTER TABLE public.cart OWNER TO postgres;

--
-- Name: cart_cart_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_cart_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_cart_id_seq OWNER TO postgres;

--
-- Name: cart_cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_cart_id_seq OWNED BY public.cart.cart_id;


--
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    customer_id bigint NOT NULL,
    contact bigint,
    address character varying(255),
    created_at timestamp without time zone DEFAULT now(),
    status character varying(100),
    username character varying(255),
    password character varying(255),
    first_name character varying(255),
    last_name character varying(255)
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- Name: customer_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer_logs (
    log_id bigint NOT NULL,
    action_made character varying(255),
    customer_id bigint,
    created_at timestamp without time zone DEFAULT now(),
    status character varying(100)
);


ALTER TABLE public.customer_logs OWNER TO postgres;

--
-- Name: customer_logs_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_logs_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_logs_log_id_seq OWNER TO postgres;

--
-- Name: customer_logs_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_logs_log_id_seq OWNED BY public.customer_logs.log_id;


--
-- Name: delivery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery (
    delivery_id bigint NOT NULL,
    supplier_name character varying(255),
    date_received date,
    created_at timestamp without time zone DEFAULT now(),
    status character varying(100)
);


ALTER TABLE public.delivery OWNER TO postgres;

--
-- Name: delivery_delivery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.delivery_delivery_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.delivery_delivery_id_seq OWNER TO postgres;

--
-- Name: delivery_delivery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.delivery_delivery_id_seq OWNED BY public.delivery.delivery_id;


--
-- Name: user_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_logs (
    log_id bigint NOT NULL,
    action_made character varying(255),
    user_id integer,
    created_at timestamp without time zone DEFAULT now(),
    status character varying(100)
);


ALTER TABLE public.user_logs OWNER TO postgres;

--
-- Name: logs_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.logs_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.logs_log_id_seq OWNER TO postgres;

--
-- Name: logs_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.logs_log_id_seq OWNED BY public.user_logs.log_id;


--
-- Name: order_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_details (
    order_details_id bigint NOT NULL,
    order_id bigint,
    barcode character varying(255),
    product_name character varying(255),
    quantity integer,
    price double precision,
    created_at timestamp without time zone DEFAULT now(),
    status character varying(100),
    total_price double precision
);


ALTER TABLE public.order_details OWNER TO postgres;

--
-- Name: order_details_order_details_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_details_order_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_details_order_details_id_seq OWNER TO postgres;

--
-- Name: order_details_order_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_details_order_details_id_seq OWNED BY public.order_details.order_details_id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id bigint NOT NULL,
    customer_id bigint,
    total_price double precision,
    address character varying(255),
    approved_by character varying(255),
    shipping_type character varying(100),
    order_status character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    approved_at date,
    status character varying(100)
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    product_id integer NOT NULL,
    product_name character varying(255),
    barcode character varying(100),
    details character varying(255),
    quantity bigint,
    price double precision,
    status character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    cost_per_unit double precision,
    date_received date,
    date_expire date,
    delivery_id integer,
    img character varying(100)
);


ALTER TABLE public.product OWNER TO postgres;

--
-- Name: product_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_product_id_seq OWNER TO postgres;

--
-- Name: product_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;


--
-- Name: subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subjects_id_seq OWNER TO postgres;

--
-- Name: subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subjects_id_seq OWNED BY public.customer.customer_id;


--
-- Name: supplier; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supplier (
    supplier_id bigint DEFAULT nextval('public.subjects_id_seq'::regclass) NOT NULL,
    supplier_name character varying(255),
    address character varying(255),
    contact bigint,
    created_at timestamp without time zone DEFAULT now(),
    status character varying(100)
);


ALTER TABLE public.supplier OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    status character varying(100),
    date_created timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone,
    first_name character varying(255),
    last_name character varying(255),
    role character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: cart cart_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart ALTER COLUMN cart_id SET DEFAULT nextval('public.cart_cart_id_seq'::regclass);


--
-- Name: customer customer_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer ALTER COLUMN customer_id SET DEFAULT nextval('public.subjects_id_seq'::regclass);


--
-- Name: customer_logs log_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_logs ALTER COLUMN log_id SET DEFAULT nextval('public.customer_logs_log_id_seq'::regclass);


--
-- Name: delivery delivery_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery ALTER COLUMN delivery_id SET DEFAULT nextval('public.delivery_delivery_id_seq'::regclass);


--
-- Name: order_details order_details_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details ALTER COLUMN order_details_id SET DEFAULT nextval('public.order_details_order_details_id_seq'::regclass);


--
-- Name: orders order_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: product product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);


--
-- Name: user_logs log_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_logs ALTER COLUMN log_id SET DEFAULT nextval('public.logs_log_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cart (cart_id, customer_id, product_id, quantity, created_at, status) FROM stdin;
2	17	248	5	2022-09-23 15:41:57.609164	done
4	17	249	3	2022-09-28 09:56:24.7671	done
3	18	249	3	2022-09-28 09:56:08.897082	active
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (customer_id, contact, address, created_at, status, username, password, first_name, last_name) FROM stdin;
18	9269883740	Baluan General Santos City	2022-09-22 10:54:04.139736	active	troy1234	Troy1116	Troy Michael	Garidos
17	951423555	Baluan General Santos City	2022-09-22 10:48:49.685916	active	troy123	Troy1116	Troy Michael	Garidos
\.


--
-- Data for Name: customer_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer_logs (log_id, action_made, customer_id, created_at, status) FROM stdin;
1	test action by customer	1	2022-09-27 11:44:37.87922	active
\.


--
-- Data for Name: delivery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.delivery (delivery_id, supplier_name, date_received, created_at, status) FROM stdin;
32	troy	2022-09-12	2022-09-23 09:25:10.806961	active
33	laray	2022-09-12	2022-09-23 09:29:51.936561	active
34	troy	2022-09-12	2022-09-23 09:30:40.608185	active
\.


--
-- Data for Name: order_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_details (order_details_id, order_id, barcode, product_name, quantity, price, created_at, status, total_price) FROM stdin;
67	30	123223	mango	5	5	2022-09-28 14:32:26.586726	active	25
68	30	1232223	Banana	3	20	2022-09-28 14:32:26.591656	active	60
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (order_id, customer_id, total_price, address, approved_by, shipping_type, order_status, created_at, approved_at, status) FROM stdin;
30	18	1000	12312	\N	pick-up	\N	2022-09-28 14:32:26.57481	\N	active
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (product_id, product_name, barcode, details, quantity, price, status, created_at, cost_per_unit, date_received, date_expire, delivery_id, img) FROM stdin;
246	intel i3 	i3123123	i3 9100f	20	1000	active	2022-09-23 09:25:10.812785	900	2022-09-12	2022-09-25	32	\N
250	intel i3 	i3123123	i3 9100f	20	1000	active	2022-09-23 09:30:40.612659	900	2022-09-12	2022-09-25	34	sample.png
251	ryzen 5	123213we	ryzen 5 2600	20	1000	active	2022-09-23 09:30:40.614159	900	2023-09-12	2023-09-25	34	sample.png
247	ryzen 5	123213we	ryzen 5 2600	21	1000	active	2022-09-23 09:25:10.81552	900	2023-09-12	2023-09-25	32	\N
249	Banana	1232223	vanananana	97	1000	active	2022-09-23 09:29:51.946328	20	2023-09-12	2023-09-25	33	sample.png
248	carabao mango	123223	native mango	100	500	active	2022-09-23 09:29:51.94337	5	2022-09-28	2022-11-16	33	test.img
\.


--
-- Data for Name: supplier; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supplier (supplier_id, supplier_name, address, contact, created_at, status) FROM stdin;
\.


--
-- Data for Name: user_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_logs (log_id, action_made, user_id, created_at, status) FROM stdin;
1	test action by asldkam0	67	2022-09-26 14:23:59.425117	active
2	test action by customer	\N	2022-09-26 14:27:26.55516	active
3	test action by customer	1	2022-09-27 10:47:13.345329	active
4	test action by customer	12	2022-09-27 13:36:15.589652	active
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, status, date_created, updated_at, first_name, last_name, role) FROM stdin;
67	admin	admin123	active	2022-09-22 17:15:41.027047	2022-09-22 17:19:50.387136	troy	garidos	Admin
\.


--
-- Name: cart_cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_cart_id_seq', 4, true);


--
-- Name: customer_logs_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_logs_log_id_seq', 1, true);


--
-- Name: delivery_delivery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.delivery_delivery_id_seq', 34, true);


--
-- Name: logs_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.logs_log_id_seq', 4, true);


--
-- Name: order_details_order_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_details_order_details_id_seq', 68, true);


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 30, true);


--
-- Name: product_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_product_id_seq', 251, true);


--
-- Name: subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subjects_id_seq', 18, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 67, true);


--
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (cart_id);


--
-- Name: customer_logs customer_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_logs
    ADD CONSTRAINT customer_logs_pkey PRIMARY KEY (log_id);


--
-- Name: user_logs logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (log_id);


--
-- Name: order_details order_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (order_details_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);


--
-- Name: customer subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (customer_id);


--
-- Name: supplier supplier_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplier_pkey PRIMARY KEY (supplier_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users set_timestamp; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER set_timestamp BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.trigger_set_timestamp();


--
-- PostgreSQL database dump complete
--

