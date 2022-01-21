import React, { useEffect, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import ArtistCard from "../ArtistCard";
import NewForm from "../NewForm";
import TrendingCard from "../TrendingCard";
import NewIdeas from "../NewIdeas";

export default function Hero() {
    const [openTab, setOpenTab] = useState(1);

    const [docs, setDocs] = useState([]);
    const [docs2, setDocs2] = useState([]);
    const [loading, setLoading] = useState(false);
    const temp =[
        {
           "title":"a new coin",
           "elevatorPitch":"it will change the world",
           "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
           "imgLink":"https://i.imgur.com/htS3GSE.jpg",
           "value":7000,
           "currentStatus":"ONGOING",
           "rasied":5000,
           "complete":"false",
           "approvalCount":4,
           "likes":9443
        },
        {
           "title":"a new coin",
           "elevatorPitch":"it will change the world",
           "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
           "imgLink":"https://i.imgur.com/htS3GSE.jpg",
           "value":7000,
           "currentStatus":"ONGOING",
           "rasied":5000,
           "complete":"false",
           "approvalCount":4,
           "likes":943
        },
        {
           "title":"a new coin",
           "elevatorPitch":"it will change the world",
           "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
           "imgLink":"https://i.imgur.com/htS3GSE.jpg",
           "value":7000,
           "currentStatus":"ONGOING",
           "rasied":5000,
           "complete":"false",
           "approvalCount":4,
           "likes":4343
        },
        {
           "title":"a new coin",
           "elevatorPitch":"it will change the world",
           "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
           "imgLink":"https://i.imgur.com/htS3GSE.jpg",
           "value":7000,
           "currentStatus":"ONGOING",
           "rasied":5000,
           "complete":"false",
           "approvalCount":4,
           "likes":343
        }
        
     ];
    useEffect(() => {
        setLoading(true);
        setDocs(temp);
        setDocs2(temp);
        setLoading(false);
        console.log(docs);
    },[]);
    const mystyle = {
        width: '100%',
        height: '250px'
    };

    return (
        <>

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
                            <div class="grid grid-cols-3 gap-10">
                                <TrendingCard doc={docs}/>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 2 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <NewIdeas doc={docs}/>
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