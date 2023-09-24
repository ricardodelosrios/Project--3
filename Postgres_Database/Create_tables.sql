DROP TABLE IF EXISTS public.tickers;

CREATE TABLE IF NOT EXISTS public.tickers
(
    ticker character varying(50) COLLATE pg_catalog."default" NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT tickers_pkey PRIMARY KEY (ticker)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tickers
    OWNER to postgres;


DROP TABLE IF EXISTS public.stocks;

CREATE TABLE IF NOT EXISTS public.stocks
(
    date timestamp without time zone NOT NULL,
    ticker character varying(50) COLLATE pg_catalog."default" NOT NULL,
    open double precision,
    high double precision,
    low double precision,
    close double precision,
    volume integer,
    dividends double precision,
    stocksplits double precision,
    CONSTRAINT stocks_pkey PRIMARY KEY (ticker, date),
    CONSTRAINT stocks_ticker_fkey FOREIGN KEY (ticker)
        REFERENCES public.tickers (ticker) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)


CREATE TABLE IF NOT EXISTS AAPL_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS GOOGL_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS META_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS MSFT_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS NVDA_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);