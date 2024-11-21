import { useState, useEffect } from "react";

interface FetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

interface ApiResponse<T> {
  data: T[];
}

export function useFetch<T>(url: string, refresh: number): FetchResponse<T[]> {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response: ApiResponse<T>) => {
        setData(response.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [url, refresh]);

  return { data, loading, error };
}
