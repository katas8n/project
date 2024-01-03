const BASE_URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch(`${BASE_URL}/planets`);

  await console.log('[response]', response);

  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${BASE_URL}/launches`);

  const respData = await response.json()
  return respData.sort((a,b) => {
    return a.flightNumber - b.flightNumber 
  });
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${BASE_URL}/launches`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return {
      ok: false
    }
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};