export const EMPRESA_ID = 70;

export type PublicEmpresa = {
  id: number;
  nombre: string;
  logo: string | null;
  giro: string | null;
};

export type PublicEvento = {
  id: number;
  titulo: string;
  descripcion: string | null;
  img: string | null;
  img_promocional: string | null;
  fecha_inicio: string | null;
  fecha_fin: string | null;
  enlace_passline: string | null;
  valor_entrada: number | null;
  principal: boolean | null;
  created_at: string | null;
};

export type PublicGaleriaItem = {
  id: number;
  media: string;
  created_at: string | null;
};

export type PublicEmpresaVitrina = {
  empresa: PublicEmpresa | null;
  eventos: PublicEvento[];
  galeria: PublicGaleriaItem[];
};

const getSupabaseUrl = () =>
  import.meta.env.VITE_SUPABASE_URL || 'https://btbdasehtcqffyoscgzp.supabase.co';

const getSupabaseAnonKey = () =>
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0YmRhc2VodGNxZmZ5b3NjZ3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5ODY2OTQsImV4cCI6MjA1NTU2MjY5NH0.Yz10xEXTbLYvdtvMyx4sWKSLZDZE7nC21AVImgo0Pzc';

export async function fetchPublicEmpresaVitrina(
  empresaId: number = EMPRESA_ID,
): Promise<PublicEmpresaVitrina> {
  const url = `${getSupabaseUrl()}/functions/v1/public-empresa-vitrina?empresa=${empresaId}`;
  const anonKey = getSupabaseAnonKey();

  const res = await fetch(url, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
  });

  if (!res.ok) {
    throw new Error(`No se pudo cargar la vitrina pública (${res.status})`);
  }

  const data = (await res.json()) as Partial<PublicEmpresaVitrina>;

  return {
    empresa: data.empresa ?? null,
    eventos: Array.isArray(data.eventos) ? data.eventos : [],
    galeria: Array.isArray(data.galeria) ? data.galeria : [],
  };
}
