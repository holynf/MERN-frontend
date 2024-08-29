import useAsync from "./useAsync";

type FetchOptions = RequestInit & {
    headers?: Record<string, string>;
    method?: string;
};

const DEFAULT_OPTIONS: FetchOptions = {
    headers: {"Content-Type": "application/json"},
    method : "GET",
};

export default function useFetch<T = any>(
    url: string,
    options: FetchOptions = {},
    dependencies: any[] = []
): {
    value: T | null;
    error: any;
    loading: boolean;
} {
    return useAsync(async () => {
        const response = await fetch(url, {...DEFAULT_OPTIONS, ...options});
        const jsonData = await response.json();

        if (response.ok) {
            return jsonData as T;
        } else {
            return Promise.reject(jsonData);
        }
    }, dependencies);
}
