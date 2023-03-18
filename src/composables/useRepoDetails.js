import { onMounted, reactive, watchEffect } from 'vue'

export default function useRepoDetails(repositoryName) {
  const state = reactive({
    commits: 0,
    languages: [],
    createdAt: '',
    license: '',
  })

  const fetchCommits = async () => {
    try {
      const username = import.meta.env.VITE_GITHUB_USERNAME
      const url = `https://api.github.com/repos/${username}/${repositoryName}/commits`

      const token = import.meta.env.VITE_GITHUB_TOKEN
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${token}`
        }
      })

      const data = await response.json()

      state.commits = data.length
    } catch (error) {
      console.log(`Error fetching commits: ${error.message}`)
    }
  }

  const fetchLanguages = async () => {
    try {
      const username = import.meta.env.VITE_GITHUB_USERNAME
      const url = `https://api.github.com/repos/${username}/${repositoryName}/languages`

      const token = import.meta.env.VITE_GITHUB_TOKEN
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${token}`
        }
      })

      const data = await response.json()

      // returns an array of the keys in the data object, which correspond to the names of the languages used in the repository
      const languages = Object.keys(data)

      // only add languages to the state.languages array if they haven't already been added
      languages.forEach((language) => {
        if (!state.languages.includes(language)) {
          state.languages.push(language)
        }
      })
    } catch (error) {
      console.log(`Error fetching languages: ${error.message}`)
    }
  }

  const fetchDetails = async () => {
    try {
      const username = import.meta.env.VITE_GITHUB_USERNAME
      const url = `https://api.github.com/users/${username}/repos`

      const token = import.meta.env.VITE_GITHUB_TOKEN
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${token}`
        }
      })

      const data = await response.json()

      // loop to get the created_at and license properties from the data object
      for (let i = 0; i < data.length; i++) {
        const repo = data[i]
        if (repo.name === repositoryName) {
          state.createdAt = data[i].created_at // code to add the created_at property to the state.createdAt property

          //  code to check if the repository has a license name and if it does, add it to the state.license property
          if (repo.license && repo.license.name) {
            state.license = repo.license.name
          } else {
            state.license = 'No license'
          }
        }
      }

      // the created_at in correct date format with month in words
      const date = new Date(state.createdAt)
      const year = date.getFullYear()
      const month = date.toLocaleString('default', { month: 'long' })
      const day = date.getDate()
      state.createdAt = `${day} ${month} ${year}`
    } catch (error) {
      console.log(`Error fetching details ${error.message}`)
    }
  }

  onMounted(() => {
    fetchCommits, fetchLanguages, fetchDetails
  })

  watchEffect(() => {
    fetchCommits(), fetchLanguages(), fetchDetails()
  })

  return {
    state
  }
}
