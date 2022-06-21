// Arquitetura hexagonal
// ports e adapters
export async function HttpClient(fetchUrl, fetchOptions) {
  // prettier-ignore
  return fetch(fetchUrl, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  }).then(async (res) => {
    return {
      ok: res.ok,
      status: res.status,
      statusText: res.statusText,
      body: await res.json(),
    };
  });
}
