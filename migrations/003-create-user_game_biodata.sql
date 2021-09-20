-- Table: public.user_game_biodata 

-- DROP TABLE public."user_game_biodata ";

CREATE TABLE IF NOT EXISTS public."user_game_biodata "
(
    id integer NOT NULL,
    email text COLLATE pg_catalog."default",
    nama text COLLATE pg_catalog."default",
    user_id integer NOT NULL,
    CONSTRAINT "user_game_biodata _pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public."user_game_biodata "
    OWNER to postgres;