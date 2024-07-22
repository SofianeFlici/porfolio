<script>
    import NavBar from './NavBar.svelte';
</script>

<div class="w-full flex flex-col justify-center items-center min-h-screen bg-grayBackground">
    <div class="w-[80%]  h-[10vh]  justify-center items-center fixed top-0 z-50">
        <NavBar />
    </div>
    <div class="w-[80%] flex-1 bg-grayBackgroundLight rounded-xl mt-[10vh] justify-center flex p-14">
        <div class="w-full">
            <slot />
        </div>
    </div>
    <footer class="w-[80%] h-[5vh] text-white">@2023</footer>
</div>
