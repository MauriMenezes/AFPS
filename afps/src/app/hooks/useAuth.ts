'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface User {
    id: string,
    name: string,
    email: string,
    role: string;

}

export function useAuth({ redirectTo = '/login', protectedRoute = true } = {}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:5062/api/Auth/me', {
                    withCredentials: true,
                });

                setUser(response.data.result);
            } catch (error) {
                setUser(null);
                if (protectedRoute) {
                    router.push(redirectTo);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading };
}
