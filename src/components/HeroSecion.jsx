function Hero() {
    return(
        <>
            <section className="bg-[url(project.png)] bg-no-repeat bg-cover">
                <div className="w-[40%] mx-16 py-52">
                    <div className="w-[75%] mx-auto">
                        <h1 className="text-[black] text-5xl font-bold">Let us find your </h1>
                        <h1 className="text-rose-600 text-5xl font-bold pt-2 px-4">Forever Food.</h1>
                    </div>
                    <p className="py-8 text-xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <button type="button" className="rounded px-12 py-4 bg-rose-600 text-sm text-[white] mr-6"><a href="">Search Now</a></button>
                    <button type="button" className="rounded px-12 py-4 bg-[white] text-sm"><a href="">Know More</a></button>
                </div>
            </section>

        </>
    )
}
export default Hero;