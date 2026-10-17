-- Pega esto en Supabase → SQL Editor → New query → Run (solo una vez)
-- Bandeja donde tu PC deja las notas y tarjetas nuevas; Arranca las recoge y las borra.
create table if not exists public.arranca_inbox (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.arranca_inbox enable row level security;

create policy "leer mi bandeja" on public.arranca_inbox for select using (auth.uid() = user_id);
create policy "dejar en mi bandeja" on public.arranca_inbox for insert with check (auth.uid() = user_id);
create policy "vaciar mi bandeja" on public.arranca_inbox for delete using (auth.uid() = user_id);
