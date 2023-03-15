import {  onMounted, reactive, watchEffect,  } from 'vue'

export default function useProfile() {
        const profile = reactive({
            name: '',
            bio: '',
            avatarUrl: '',
            followers: '',
            following: '',
            publicRepos: '',
        })

        const fetchProfile = async () => {
            const username = import.meta.env.VITE_GITHUB_USERNAME;
            const url = `https://api.github.com/users/${username}`;
            const token = import.meta.env.VITE_GITHUB_TOKEN;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `token ${token}`
                }
            })

            const data = await response.json();

            profile.name = data.name;
            profile.bio = data.bio;
            profile.avatarUrl = data.avatar_url;
            profile.followers = data.followers;
            profile.following = data.following;
            profile.publicRepos = data.public_repos;

        }

        onMounted(fetchProfile);

        watchEffect(() => {
            fetchProfile()
        })

        return{
            profile
        }
}


// const profile = reactive({
//     name: '',
//     bio: '',
//     avatar_url: '',
//     followers: '',
//     following: '',
//     location: '',
//     public_repos: '',
//     created_at: '',
//     updated_at: '',
//   })

//     const fetchProfile = async () => {
//         const username = import.meta.env.VITE_GITHUB_USERNAME;
//         const url = `https://api.github.com/users/${username}`;
//         const token = import.meta.env.VITE_GITHUB_TOKEN;

//         const response = await fetch(url, {
//             headers: {
//                 'Authorization': `token ${token}`
//             }
//         })

//         const data = await response.json();

        // profile.name = data.name;
        // profile.bio = data.bio;
        // profile.avatar_url = data.avatar_url;
        // profile.followers = data.followers;
        // profile.following = data.following;
        // profile.location = data.location;
        // profile.public_repos = data.public_repos;
        // profile.created_at = data.created_at;
        // profile.updated_at = data.updated_at;
//     }