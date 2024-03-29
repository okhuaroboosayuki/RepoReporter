import { reactive, onMounted, watchEffect, computed } from 'vue'

export default function useRepos() {
    const repos = reactive({
        repositories: [],
        currentPage: 1,
        pageSize: 3,
        totalRepos: Number,
    })


    const fetchRepos = async () => {
        const username = import.meta.env.VITE_GITHUB_USERNAME;
        const url = `https://api.github.com/users/${username}/repos?page=${repos.currentPage}&per_page=${repos.pageSize}`;
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${token}`
            }
        });
        const data = await response.json();

        repos.repositories = data;
        repos.totalRepos = response.headers.get('Link').split(',').find(link => link.includes('rel="last"')).split('&')[0].split('=')[1]
    };

    const setPage = (page) => {
        repos.currentPage = page;
        fetchRepos();
    };

    const pageButtons = computed(() => {
        const buttons = [];
        for (let i = 1; i <= repos.totalRepos; i++) {
          buttons.push({
            number: i,
            active: i === repos.currentPage,
          });
        }
        return buttons;
      });

    onMounted(fetchRepos);

    watchEffect(() => {
        fetchRepos();
    });
    
    return {
        repos,
        setPage,
        pageButtons,
    }
}

