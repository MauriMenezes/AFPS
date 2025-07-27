'use client'; // 👈 ESSENCIAL

import { useAuth } from '../hooks/useAuth';

export default function LobbyPage() {
    const { user, loading } = useAuth();

    if (loading) return <p>Carregando...</p>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Bem-vindo, {user?.name}!</h1>
            <p>Você está autenticado.</p>
        </div>
    );
}
