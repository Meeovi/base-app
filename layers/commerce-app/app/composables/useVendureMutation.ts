import { useNuxtApp } from '#app';
import { ref } from 'vue';

/**
 * useVendureMutation composable
 * Usage:
 *   const { mutate, loading, error, data } = useVendureMutation(mutationFile)
 *   await mutate(variables)
 */
export function useVendureMutation(mutation: any) {
  const nuxtApp = useNuxtApp();
  // Add a type for $graphql if not already defined
  interface GraphQLClient {
    request: (query: any, variables?: any) => Promise<any>;
  }
  const graphql = (nuxtApp.$graphql as GraphQLClient);
  const loading = ref(false);
  const error = ref<unknown>(null);
  const data = ref(null);

  async function mutate(variables?: any) {
    loading.value = true;
    error.value = null;
    data.value = null;
    try {
      const result = await graphql.request(mutation, variables);
      data.value = result;
      return result;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  }

  return {
    mutate,
    loading,
    error,
    data
  };
}
