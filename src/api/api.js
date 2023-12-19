function getDefaultHeaders(token) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return headers
}

async function handleResponse(response) {
  const json = await response.json()
  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status} at ${response.url}: ${json.message}`,
    )
  }
  return json
}

async function get(endpoint, token) {
  const requestHeaders = getDefaultHeaders(token)
  const response = await fetch(endpoint, {headers: requestHeaders})
  return handleResponse(response)
}

async function post(url, data, token) {
  const requestHeaders = getDefaultHeaders(token)
  const response = await fetch(url, {method: 'POST', headers: requestHeaders, body: data})
  return handleResponse(response)
}

async function put(url, data, token) {
  const requestHeaders = getDefaultHeaders(token)
  const body = JSON.stringify(data)
  const response = await fetch(url, {method: 'PUT', headers: requestHeaders, body})
  return handleResponse(response)
}

async function getWithParams(url, params, token) {
  const requestHeaders = getDefaultHeaders(token)

  const urlWithParams = new URL(url)
  Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]))

  const response = await fetch(urlWithParams.toString(), {headers: requestHeaders})
  return handleResponse(response)
}

export default {
  get,
  post,
  put,
  getWithParams,
}
