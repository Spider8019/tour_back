module.exports = async function readJsonFromGithub(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch JSON')
    }
    const json = await response.json()
    return json
  } catch (error) {
    console.error('Error reading JSON from GitHub:', error.message)
    return null
  }
}
