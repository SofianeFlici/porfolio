<script>
    import Iphone from './../assets/iphone.png';
    import Ordinateur from './../assets/logo-banner.png';
    import background from './../assets/3306567.jpg';
    
    let currentIndex = 0;
    const items = [
        { src: Iphone, alt: 'Image 1', text: 'tu'},
        { src: Ordinateur, alt: 'Image 2', text: 'casse'},
        { src: Iphone, alt: 'Image 3', text: 'les couilles'},
        { src: Ordinateur, alt: 'Image 4', text: 'avec tes conneries'},
    ];

    function next() {
        currentIndex = (currentIndex + 1) % items.length;
    }

    function prev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }
</script>

<div class="w-full h-[86vh] flex justify-center items-center my-4 rounded-md overflow-hidden" id="profil">
    <div class="w-full h-full relative">
        <img src={background} alt="background" class="w-full h-full object-cover absolute z-0 opacity-30">
        {#each items as item, index}
            <div class="carousel-item {index === currentIndex ? 'active' : ''} w-full h-full absolute flex justify-center items-center z-10">
                <div class="w-1/2 h-full flex justify-center items-center">
                    <img src={item.src} alt={item.alt} class="w-full h-full object-contain rounded-md">
                </div>
                <div class="w-1/2 h-full flex justify-center items-center">
                    <p>{item.text}</p>
                </div>
            </div>
        {/each}
        <button on:click={prev} class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md z-10">Prev</button>
        <button on:click={next} class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md z-10">Next</button>
    </div>
</div>

<style>
    .carousel-item {
        display: none;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    .carousel-item.active {
        display: flex;
        opacity: 1;
    }
</style>
