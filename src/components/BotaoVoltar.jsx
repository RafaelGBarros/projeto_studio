'use client';
import { useRouter } from 'next/navigation';

export default function BotaoVoltar() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/')} 
      className="botao-voltar"
      aria-label="Voltar para página inicial"
    >
      ← Voltar Para o Studio
    </button>
  );
} 