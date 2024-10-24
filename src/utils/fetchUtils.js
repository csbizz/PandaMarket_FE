import { isEmpty } from './utils.js';

const HTTP_METHODS = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  PUT: 'PUT',
});

async function fetchData({ url: requestUrl, method, body = {}, params = {}, options = {} }) {
  if (!requestUrl || !method) throw new Error('URL and Method is required');
  if (!HTTP_METHODS[method]) throw new Error('Invalid HTTP method');

  const url = new URL(requestUrl);
  for (let key in params) {
    url.searchParams.append(key, params[key]);
  }

  let res;
  switch (method) {
    case HTTP_METHODS.GET:
    case HTTP_METHODS.DELETE:
      res = await fetch(url, { method });
      break;
    case HTTP_METHODS.POST:
    case HTTP_METHODS.PATCH:
    case HTTP_METHODS.PUT:
      res = await fetch(url, {
        method,
        body: options?.headers['Content-Type'] === 'application/json' ? JSON.stringify(body) : body,
      });
      break;
  }

  if (!res.ok) throw new Error('Failed to fetch data');
  // DELETE 작업시 body가 비어있으면 리턴
  if (res.status === 204 && isEmpty(res.body)) return res.status;

  return await res.json();
}

export async function fetchGet(url, params, options) {
  return await fetchData({ url, method: HTTP_METHODS.GET, params, options });
}

export async function fetchPost(url, body, options = { headers: { 'Content-Type': 'application/json' } }) {
  return await fetchData({ url, method: HTTP_METHODS.POST, body, options });
}

export async function fetchPatch(url, body, options = { headers: { 'Content-Type': 'application/json' } }) {
  return await fetchData({ url, method: HTTP_METHODS.PATCH, body, options });
}

export async function fetchPut(url, body, options = { headers: { 'Content-Type': 'application/json' } }) {
  return await fetchData({ url, method: HTTP_METHODS.PUT, body, options });
}

export async function fetchDelete(url, options) {
  return await fetchData({ url, method: HTTP_METHODS.DELETE, options });
}
