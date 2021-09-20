-- Table: public.user_game_history 

-- DROP TABLE public."user_game_history ";

CREATE TABLE IF NOT EXISTS public."user_game_history "
(
    id integer NOT NULL,
    tanggal date,
    score text COLLATE pg_catalog."default",
    user_id integer NOT NULL,
    CONSTRAINT "user_game_history _pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public."user_game_history "
    OWNER to postgres;