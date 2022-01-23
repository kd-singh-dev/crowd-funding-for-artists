function About() {
    return (
        <section id="About" className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div data-aos="fade-up" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/ZqLfhRi.png" />
                </div>
                <div  className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Money Money
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p  className="mb-8 leading-relaxed">
                        Money Money is a decentralized crowdfunding platform that allows you to raise funds for your project.<br/>
                        Money money list all the crowdfunding campaign Going around the world which is registered in the Web app In a full decentralized manner.<br/>
                    </p>
                        <ol class="">
                            <li>The Web app shows the trending ideas which have got more likes</li>
                            <li>New ideas section shows all the newly found campaigns</li>
                            <li>My contribution tab shows all the campaigns that you have contributed into</li>
                            <li>New campaign allows the user to start a new crowdfunding campaign for their idea</li>
                            <li>My campaign list all the campaigns started by the user on that particular account address</li>
                        </ol>
                    
                </div>
            </div>
        </section>
    )
}

export default About
