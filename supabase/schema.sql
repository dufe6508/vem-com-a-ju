-- =============================================
-- SCHEMA COMPLETO — Agência de Viagens e Excursões
-- Executar no SQL Editor do Supabase
-- =============================================

-- Limpar tabelas antigas (ordem importa por causa das foreign keys)
drop table if exists contatos cascade;
drop table if exists depoimentos cascade;
drop table if exists pagamentos cascade;
drop table if exists passageiros cascade;
drop table if exists reservas cascade;
drop table if exists cupons cascade;
drop table if exists itinerario cascade;
drop table if exists fotos_pacote cascade;
drop table if exists fotos_viagem cascade;
drop table if exists pacotes cascade;
drop table if exists viagens cascade;
drop table if exists onibus cascade;
drop table if exists destinos cascade;
drop table if exists categorias cascade;
drop table if exists configuracoes cascade;
drop table if exists perfis cascade;

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists handle_new_user();
drop function if exists is_admin();

create extension if not exists "uuid-ossp";

-- =============================================
-- 1. PERFIS (extensão do auth.users)
-- =============================================
create table perfis (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null,
  cpf text,
  telefone text,
  data_nascimento date,
  perfil text not null default 'cliente' check (perfil in ('cliente', 'admin')),
  criado_em timestamptz not null default now()
);

create or replace function handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into perfis (id, nome)
  values (new.id, coalesce(new.raw_user_meta_data->>'nome', new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- =============================================
-- 2. CONFIGURACOES DA AGÊNCIA
-- =============================================
create table configuracoes (
  id integer primary key default 1 check (id = 1), -- só 1 linha
  nome_agencia text not null default 'Minha Agência de Viagens',
  slogan text,
  whatsapp text,
  email_contato text,
  telefone_fixo text,
  endereco text,
  instagram text,
  facebook text,
  logo_url text,
  criado_em timestamptz not null default now()
);

insert into configuracoes (id) values (1);

-- =============================================
-- 3. CATEGORIAS (Praia, Serra, Cultural...)
-- =============================================
create table categorias (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  icone text,
  ativa boolean not null default true
);

insert into categorias (nome, icone) values
  ('Praia', '🏖️'),
  ('Serra e Natureza', '🏔️'),
  ('Cultural e Histórico', '🏛️'),
  ('Internacional', '✈️'),
  ('Religioso', '⛪'),
  ('Aventura', '🧗');

-- =============================================
-- 4. DESTINOS
-- =============================================
create table destinos (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  estado text,
  pais text not null default 'Brasil',
  descricao text,
  foto_url text
);

-- =============================================
-- 5. ONIBUS / VEÍCULOS
-- =============================================
create table onibus (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  placa text,
  capacidade integer not null,
  empresa text,
  ativo boolean not null default true
);

-- =============================================
-- 6. PACOTES (produto principal que o cliente compra)
-- =============================================
create table pacotes (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  destino_id uuid references destinos(id) on delete set null,
  categoria_id uuid references categorias(id) on delete set null,
  descricao text,
  descricao_curta text,

  -- Datas e logística
  data_saida date not null,
  data_retorno date,
  duracao_dias integer generated always as (
    case when data_retorno is not null
    then (data_retorno - data_saida) + 1
    else 1 end
  ) stored,
  horario_embarque time,
  local_embarque text,
  onibus_id uuid references onibus(id) on delete set null,

  -- Vagas e preço
  vagas_total integer not null default 0,
  vagas_disponiveis integer not null default 0,
  valor_adulto numeric(10,2) not null,
  valor_crianca numeric(10,2),          -- null = não aceita criança
  valor_entrada numeric(10,2),          -- entrada para parcelamento

  -- O que está incluído
  incluido text,
  nao_incluido text,
  formas_pagamento text,
  documentos_necessarios text,

  -- Contato e meta
  contato_duvidas text,
  destaque boolean not null default false, -- aparece em primeiro na landing
  ativa boolean not null default true,
  criado_em timestamptz not null default now()
);

-- =============================================
-- 7. FOTOS DOS PACOTES
-- =============================================
create table fotos_pacote (
  id uuid primary key default uuid_generate_v4(),
  pacote_id uuid not null references pacotes(id) on delete cascade,
  url_foto text not null,
  ordem integer not null default 0,
  criado_em timestamptz not null default now()
);

-- =============================================
-- 8. ITINERÁRIO (programação dia a dia)
-- =============================================
create table itinerario (
  id uuid primary key default uuid_generate_v4(),
  pacote_id uuid not null references pacotes(id) on delete cascade,
  dia integer not null,
  titulo text not null,
  descricao text,
  horario text
);

-- =============================================
-- 9. CUPONS DE DESCONTO
-- =============================================
create table cupons (
  id uuid primary key default uuid_generate_v4(),
  codigo text not null unique,
  descricao text,
  tipo text not null check (tipo in ('percentual', 'valor_fixo')),
  valor numeric(10,2) not null,
  validade date,
  usos_maximos integer,
  usos_atuais integer not null default 0,
  ativo boolean not null default true,
  criado_em timestamptz not null default now()
);

-- =============================================
-- 10. RESERVAS
-- =============================================
create table reservas (
  id uuid primary key default uuid_generate_v4(),
  usuario_id uuid not null references auth.users(id) on delete cascade,
  pacote_id uuid not null references pacotes(id) on delete restrict,
  cupom_id uuid references cupons(id) on delete set null,
  status text not null default 'pendente' check (status in ('pendente', 'confirmada', 'cancelada')),
  valor_total numeric(10,2) not null,
  desconto_aplicado numeric(10,2) not null default 0,
  observacoes text,
  criado_em timestamptz not null default now()
);

-- =============================================
-- 11. PASSAGEIROS (quem vai na viagem — pode ser + de 1 por reserva)
-- =============================================
create table passageiros (
  id uuid primary key default uuid_generate_v4(),
  reserva_id uuid not null references reservas(id) on delete cascade,
  nome text not null,
  cpf text,
  data_nascimento date,
  telefone text,
  tipo text not null default 'adulto' check (tipo in ('adulto', 'crianca')),
  rg text,
  observacoes text
);

-- =============================================
-- 12. PAGAMENTOS
-- =============================================
create table pagamentos (
  id uuid primary key default uuid_generate_v4(),
  reserva_id uuid not null references reservas(id) on delete cascade,
  valor numeric(10,2) not null,
  forma_pagamento text check (forma_pagamento in ('pix', 'transferencia', 'dinheiro', 'cartao_credito', 'cartao_debito')),
  status text not null default 'pendente' check (status in ('pendente', 'confirmado', 'cancelado')),
  data_pagamento date,
  comprovante_url text,
  observacoes text,
  registrado_por uuid references auth.users(id) on delete set null, -- admin que registrou
  criado_em timestamptz not null default now()
);

-- =============================================
-- 13. DEPOIMENTOS / AVALIAÇÕES
-- =============================================
create table depoimentos (
  id uuid primary key default uuid_generate_v4(),
  usuario_id uuid references auth.users(id) on delete set null,
  pacote_id uuid references pacotes(id) on delete set null,
  nome_autor text not null,
  texto text not null,
  nota integer check (nota between 1 and 5),
  foto_autor_url text,
  aprovado boolean not null default false, -- admin aprova antes de exibir
  criado_em timestamptz not null default now()
);

-- =============================================
-- 14. CONTATOS / LEADS (formulário "tire suas dúvidas")
-- =============================================
create table contatos (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  telefone text not null,
  email text,
  mensagem text,
  pacote_id uuid references pacotes(id) on delete set null,
  lido boolean not null default false,
  criado_em timestamptz not null default now()
);

-- =============================================
-- RLS — Row Level Security
-- =============================================

alter table perfis enable row level security;
alter table configuracoes enable row level security;
alter table categorias enable row level security;
alter table destinos enable row level security;
alter table onibus enable row level security;
alter table pacotes enable row level security;
alter table fotos_pacote enable row level security;
alter table itinerario enable row level security;
alter table cupons enable row level security;
alter table reservas enable row level security;
alter table passageiros enable row level security;
alter table pagamentos enable row level security;
alter table depoimentos enable row level security;
alter table contatos enable row level security;

-- Helper: checar se é admin
create or replace function is_admin()
returns boolean language sql security definer as $$
  select exists (select 1 from perfis where id = auth.uid() and perfil = 'admin')
$$;

-- PERFIS
create policy "perfis_ver_proprio" on perfis for select using (id = auth.uid() or is_admin());
create policy "perfis_atualizar_proprio" on perfis for update using (id = auth.uid());
create policy "perfis_admin_total" on perfis for all using (is_admin());

-- CONFIGURACOES: leitura pública, escrita só admin
create policy "config_leitura_publica" on configuracoes for select using (true);
create policy "config_admin_escrita" on configuracoes for update using (is_admin());

-- CATEGORIAS: leitura pública
create policy "categorias_leitura_publica" on categorias for select using (ativa = true);
create policy "categorias_admin_total" on categorias for all using (is_admin());

-- DESTINOS: leitura pública
create policy "destinos_leitura_publica" on destinos for select using (true);
create policy "destinos_admin_total" on destinos for all using (is_admin());

-- ONIBUS: só admin
create policy "onibus_admin_total" on onibus for all using (is_admin());

-- PACOTES: leitura pública para ativos
create policy "pacotes_leitura_publica" on pacotes for select using (ativa = true);
create policy "pacotes_admin_total" on pacotes for all using (is_admin());

-- FOTOS: leitura pública
create policy "fotos_leitura_publica" on fotos_pacote for select using (true);
create policy "fotos_admin_total" on fotos_pacote for all using (is_admin());

-- ITINERARIO: leitura pública
create policy "itinerario_leitura_publica" on itinerario for select using (true);
create policy "itinerario_admin_total" on itinerario for all using (is_admin());

-- CUPONS: só admin gerencia, usuário pode consultar se tiver o código
create policy "cupons_admin_total" on cupons for all using (is_admin());
create policy "cupons_usuario_consultar" on cupons for select using (ativo = true);

-- RESERVAS
create policy "reservas_usuario_proprias" on reservas for select using (usuario_id = auth.uid());
create policy "reservas_usuario_inserir" on reservas for insert with check (usuario_id = auth.uid());
create policy "reservas_admin_total" on reservas for all using (is_admin());

-- PASSAGEIROS: usuário vê os seus via reserva
create policy "passageiros_usuario" on passageiros for select
  using (exists (select 1 from reservas r where r.id = passageiros.reserva_id and r.usuario_id = auth.uid()));
create policy "passageiros_usuario_inserir" on passageiros for insert
  with check (exists (select 1 from reservas r where r.id = passageiros.reserva_id and r.usuario_id = auth.uid()));
create policy "passageiros_admin_total" on passageiros for all using (is_admin());

-- PAGAMENTOS
create policy "pagamentos_usuario_ver" on pagamentos for select
  using (exists (select 1 from reservas r where r.id = pagamentos.reserva_id and r.usuario_id = auth.uid()));
create policy "pagamentos_admin_total" on pagamentos for all using (is_admin());

-- DEPOIMENTOS: leitura pública de aprovados
create policy "depoimentos_leitura_publica" on depoimentos for select using (aprovado = true);
create policy "depoimentos_usuario_inserir" on depoimentos for insert with check (auth.uid() is not null);
create policy "depoimentos_admin_total" on depoimentos for all using (is_admin());

-- CONTATOS: qualquer um pode enviar; só admin lê
create policy "contatos_inserir_publico" on contatos for insert with check (true);
create policy "contatos_admin_total" on contatos for all using (is_admin());
