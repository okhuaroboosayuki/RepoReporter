import {  onMounted, reactive, watchEffect,  } from 'vue'

export default function useProfile() {
        const profile = reactive({
            name: '',
            profileUrl: '',
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
            profile.profileUrl = data.html_url;

        }

        onMounted(fetchProfile);

        watchEffect(() => {
            fetchProfile()
        })

        return{
            profile
        }
}