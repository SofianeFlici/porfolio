<script>
    import ItemP from "../components/itemP.svelte";
</script>

<div class="w-full flex flex-col h-full">
    <div class="welcome flex flex-col rounded-xl h-[50vh] justify-around mb-10">
        <p class="mt-4 text-white font-bold">Bienvenue Sur Mon Portfolio</p>
        <span class="mt-4 text-white font-semibold text-xl">En tant que développeur passionné, je suis à même de créer pour vous des solutions web, mobiles et logicielles sur mesure. Je vous invite à explorer mes projets et à découvrir comment je peux transformer vos idées en réalités numériques. Bonne visite !</span>
        <button class="bg-pink-700 p-4 w-[15%] rounded-3xl mt-4">Voir Mes Projects</button>
    </div>
    <ItemP />
</div>

<style>
    .welcome {
        background-image: url('/devBackground.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 2rem;
    }
</style>

