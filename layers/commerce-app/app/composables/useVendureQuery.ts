import { ref } from 'vue';
import { useNuxtApp } from '#app';

/**
 * useVendureQuery composable
 * Usage:
 *   const { data, loading, error, refetch } = useVendureQuery<T>(queryFile, variables)
 */
export function useVendureQuery<T = any>(query: string, variables: Record<string, any> = {}) {
  const nuxtApp = useNuxtApp();
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  async function fetch(overrideVars: Record<string, any> = {}) {
    loading.value = true;
    error.value = null;
    try {
      const result = await (nuxtApp.$graphql as { request: (q: string, v?: Record<string, any>) => Promise<T> }).request(query, { ...variables, ...overrideVars });
      data.value = result;
      return result;
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      throw err;
    } finally {
      loading.value = false;
    }
  }

  // Initial fetch
  fetch();

  return {
    data,
    loading,
    error,
    refetch: fetch
  };
}
