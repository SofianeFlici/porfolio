<style>
    .welcome {
        background-image: url('/public/devBackground.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>

<script>
    import Iphone from './../assets/iphone.png';
    import Ordinateur from './../assets/logo-banner.png';

    let projects = [
        {
            title: "Project 1",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Iphone,
            link: "https://www.google.com"
        },
        {
            title: "Project 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Ordinateur,
            link: "https://www.google.com"
        },
        {
            title: "Project 3",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Iphone,
            link: "https://www.google.com"
        },
        {
            title: "Project 4",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Ordinateur,
            link: "https://www.google.com"
        },
        {
            title: "Project 5",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Iphone,
            link: "https://www.google.com"
        },
        {
            title: "Project 6",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Ordinateur,
            link: "https://www.google.com"
        },
        {
            title: "Project 7",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Iphone,
            link: "https://www.google.com"
        },
        {
            title: "Project 8",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: Ordinateur,
            link: "https://www.google.com"
        },
    ]
</script>

<div class="bg-grayBackground w-full h-full rounded-xl p-8">
    <h1 class="text-white text-3xl font-bold mb-8">Mes Projects</h1>
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#each projects as project}
            <div class="flex flex-col justify-between items-center rounded-xl mb-4 bg-grayBackgroundLight">
                <div class="w-[50%] h-[20%]">
                    <img src={project.image} alt="project" class="w-full h-full object-cover rounded-xl" />
                </div>
                <div class="w-full h-full flex flex-col justify-around items-center p-4">
                    <h1 class="text-white text-2xl font-bold">{project.title}</h1>
                    <a href={project.link} class="bg-pink-700 p-2 w-full rounded-3xl mt-4 text-center text-white">Voir Le Project</a>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="bg-grayBackground w-full h-full rounded-xl p-8 mt-8">
    <h1 class="text-white text-3xl font-bold mb-8">Intéressé par mon travail ?</h1>
    <p>Transformons ensemble vos idées en solutions numériques innovantes. Contactez-moi dès aujourd'hui pour discuter de votre prochain projet et découvrir comment je peux vous aider à atteindre vos objectifs.</p>
</div>
