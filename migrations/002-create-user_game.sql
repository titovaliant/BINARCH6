-- Table: public.user_game

-- DROP TABLE public.user_game;

CREATE TABLE IF NOT EXISTS public.user_game
(
    id integer NOT NULL,
    username text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_game_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.user_game
    OWNER to postgres;