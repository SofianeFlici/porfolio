<script>
    import AdminHome from "../components/admin/AdminHome.svelte";
    import AdminProjects from "../components/admin/AdminProjects.svelte";

    export let page = 'home';

    function changePage(newPage) {
        page = newPage;
    }

    function goToHome() {
        changePage('home');
    }

    function goToProjects() {
        changePage('projects');
    }
</script>

<div class="flex bg-grayBackground h-[100vh] w-full text-white p-4 justify-between">
    <div class="flex flex-col w-[15%] bg-grayBackgroundLight p-4 rounded-xl">
      <button on:click={goToHome}>Home</button>
      <button on:click={goToProjects}>Projects</button>
    </div>

    <div class="flex flex-col w-[80%] bg-grayBackgroundLight p-4 rounded-xl">
        {#if page === 'home'}
            <AdminHome />
        {:else if page === 'projects'}
            <AdminProjects />
        {/if}
    </div>
</div>