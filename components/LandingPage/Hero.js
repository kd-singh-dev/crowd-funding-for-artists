import React, { useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import ArtistCard from "../ArtistCard";
export default function Hero() {
    const [openTab, setOpenTab] = useState(1);

    const mystyle = {
        width: '100%',
        height: '250px'
    };

    return (
        <>
            {/* <img src="https://i.imgur.com/htS3GSE.jpg" style={mystyle} /> */}

            <section className="text-gray-400 bg-gray-900 flex ">
                <Tab className="bg-gray-900">
                    <TabList color="green">
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            ripple="light"
                            active={openTab === 1 ? true : false}
                            href="tabItem"
                        >
                            Trending Ideas
                        </TabItem>
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            ripple="light"
                            active={openTab === 2 ? true : false}
                            href="tabItem"
                        >
                            New Artists
                        </TabItem>
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            ripple="light"
                            active={openTab === 3 ? true : false}
                            href="tabItem"
                        >
                            My Contributions
                        </TabItem>
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(4);
                            }}
                            ripple="light"
                            active={openTab === 4 ? true : false}
                            href="tabItem"
                        >
                            New Campaign
                        </TabItem>
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(5);
                            }}
                            ripple="light"
                            active={openTab === 5 ? true : false}
                            href="tabItem"
                        >
                            My Campaigns
                        </TabItem>
                    </TabList>

                    <TabContent>
                        <TabPane active={openTab === 1 ? true : false}>
                            <div class="grid grid-cols-4 gap-5">
                                <div>
                                    <ArtistCard />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 2 ? true : false}>
                            <p>
                                I will be the leader of a company that ends up being worth
                                billions of dollars, because I got the answers. I understand
                                culture. I am the nucleus. I think that’s a responsibility that
                                I have, to push possibilities, to show people, this is the level
                                that things could be at. I think that’s a responsibility that I
                                have, to push possibilities, to show people, this is the level
                                that things could be at.
                            </p>
                        </TabPane>
                        <TabPane active={openTab === 3 ? true : false}>
                            <p>
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that things
                                could be at. So when you get something that has the name Kanye
                                West on it, it’s supposed to be pushing the furthest
                                possibilities. I will be the leader of a company that ends up
                                being worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus.
                            </p>
                        </TabPane>
                        <TabPane active={openTab === 4 ? true : false}>
                            <p>
                                I 4 that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that things
                                could be at. So when you get something that has the name Kanye
                                West on it, it’s supposed to be pushing the furthest
                                possibilities. I will be the leader of a company that ends up
                                being worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus.
                            </p>
                        </TabPane>
                        <TabPane active={openTab === 5 ? true : false}>
                            <p>
                                I 5 that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that things
                                could be at. So when you get something that has the name Kanye
                                West on it, it’s supposed to be pushing the furthest
                                possibilities. I will be the leader of a company that ends up
                                being worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus.
                            </p>
                        </TabPane>
                    </TabContent>
                </Tab>
            </section>
        </>
    );
}