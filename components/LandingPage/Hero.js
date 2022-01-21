import React, { useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import ArtistCard from "../ArtistCard";
import NewForm from "../NewForm";

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
                    <div>
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
                                New Ideas
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
                    </div>

                    <TabContent>
                        <TabPane active={openTab === 1 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 2 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 3 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 4 ? true : false}>
                            <div class="items-center m-auto w-1/2">
                                <NewForm/>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 5 ? true : false}>
                        <div class="grid grid-cols-3 gap-5">
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                                <div>
                                    <ArtistCard />
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </Tab>
            </section>
        </>
    );
}