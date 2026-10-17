-- Pega esto en Supabase → SQL Editor → New query → Run
create table if not exists public.arranca_state (
  user_id uuid primary key default auth.uid() references auth.users on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.arranca_state enable row level security;

-- Cada persona solo puede ver y cambiar su propia fila
create policy "leer lo mio" on public.arranca_state for select using (auth.uid() = user_id);
create policy "crear lo mio" on public.arranca_state for insert with check (auth.uid() = user_id);
create policy "cambiar lo mio" on public.arranca_state for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
