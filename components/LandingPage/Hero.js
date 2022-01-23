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
import MyCampaigns from "../MyCampaigns";
import MyContributions from "../MyContributions";

import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

export default function Hero() {
    const [openTab, setOpenTab] = useState(1);

    const [docs, setDocs] = useState([]);
    const [docs2, setDocs2] = useState([]);
    const [update,setUpdate] = useState(0);
    const [loading, setLoading] = useState(false);
    const [t,setT] = useState([]);
    const campAbi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "desc",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "goal",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "pic",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "pitch",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "approvalRequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "c",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "_title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_desc",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_goal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_collected",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ig",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_likes",
                    "type": "uint256"
                },
                {
                    "internalType": "enum Campaign.status",
                    "name": "s",
                    "type": "uint8"
                },
                {
                    "internalType": "string",
                    "name": "_pic",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_pitch",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contribute",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                }
            ],
            "name": "createRequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "finalizeRequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "likeCamp",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "manager",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "minAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "req",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "requests",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "complete",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "approvalCount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unlikeCamp",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const cfAbi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "desc",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "goal",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "pic",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "pitch",
                    "type": "string"
                }
            ],
            "name": "createCampaign",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "deployedContract",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "listArtist",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const cfAdd = "0x2d74e092363578eDeaf89c90257091b828E39Ad4";
   var d = [];
   var temp = [];

   let signer;
   
   useEffect(async ()=> {
   
        
        
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        signer = provider.getSigner();
            
        
   
    const cfContract = new ethers.Contract(cfAdd, cfAbi, signer);
        const arr = [];
       //
       console.log(cfContract);
       try{
        const i = 0;
        while(i>-1){
            const c = await cfContract.deployedContract(i);
            arr.push(c);
          console.log(c);
          i++;
      
        }
        
       }catch(err){

       }
       console.log(arr);
       for(let a = 0;a<arr.length;a++){
           //console.log(arr[a]);
           const campContract = new ethers.Contract(arr[a],campAbi,signer);
           const data = await campContract.c(); 
           console.log(data);
           // d = [];
           temp.push({
            "title": data[0],
            "elevatorPitch": data[8],
            "description": data[1],
            "imgLink": data[7],
            "value": data[2].toString(),
            "currentStatus": "ONGOING",
            "complete": arr[a],
            "rasied": data[3].toString(),
            "likes": data[5].toString()
         })
        }
        console.log(d);
      //   temp = d;
         console.log(temp);
         setDocs(temp)
         setT(temp);
         // i++;
        
    
    
       },[update])
       const myCamp = async () => {
           console.log("My camp");
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            signer = provider.getSigner();
                
            const temp = [];
        
   
            const cfContract = new ethers.Contract(cfAdd, cfAbi, signer);
            
            
            const arr = [];
            //
            console.log(cfContract);
            try{
             const i = 0;
             while(i>-1){
                const c = await cfContract.deployedContract(i);
                arr.push(c);
                console.log(c);
                i++;
                
             }
             
            }catch(err){
     
            }
            let campCol = [];
            for(let y=0;y<arr.length;y++){
                console.log("Mycamp:",arr[y]);
                const artistAdd = await cfContract.listArtist(arr[y]);
                const Address = await signer.getAddress();
                console.log("Mycamp:",artistAdd);
                console.log("Mycamp:",Address);
                if(artistAdd == Address){
                    campCol.push(arr[y])
                }

            }
            console.log("My camp add",campCol);

<<<<<<< HEAD
            for(let a = 0;a<campCol.length;a++){
                //console.log(arr[a]);
                const campContract = new ethers.Contract(campCol[a],campAbi,signer);
                const data = await campContract.c(); 
                console.log(data);
                // d = [];
                temp.push({
                 "title": data[0],
                 "elevatorPitch": data[8],
                 "description": data[1],
                 "imgLink": data[7],
                 "value": data[2].toString(),
                 "currentStatus": "ONGOING",
                 "rasied": data[3].toString(),
                 "complete": campCol[a],
                 "likes": data[5].toString()
              })
             }
             console.log(d);
           //   temp = d;
              console.log(temp);
              setDocs2(temp)
           //   setT(temp);
            
       }
    
=======
    /*
>>>>>>> 52faee89493b75f47f2d1c2a2ef520b4ad159f3a
  // console.log(await t())}
    //console.log(d);
    

     //[
    //  {
    //        
    //     "title":"a new coin",
           "elevatorPitch":"it will change the world",
           "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
           "imgLink":"https://i.imgur.com/htS3GSE.jpg",
           "value":7000,
           "currentStatus":"ONGOING",
           "rasied":1000,
           "complete":"false",
           "approvalCount":4,
           "likes":9443,
           "requests":[
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
           ]
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
           "likes":94,
           "requests":[
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
           ]
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
           "likes":43,
           "requests":[
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
           ]
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
           "likes":93,
           "requests":[
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
               {
                   "title":"a new title",
                   "description":"a new description",
                   "amount":1000,
               },
           ]
        
    //  ];*/
    useEffect(() => {
        setLoading(true);
        setDocs(temp);
        //setDocs2(temp);
        setLoading(false);
        console.log(docs);
        setDocs(docs);

    },[t]);
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
                                    setUpdate(update + 1);
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
                                    myCamp();
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
                                <TrendingCard doc={docs} />
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 2 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <NewIdeas doc={docs2}/>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 3 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <MyContributions doc={docs}/>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 4 ? true : false}>
                            <div class="items-center m-auto w-1/2">
                                <NewForm/>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 5 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <MyCampaigns doc={docs}/>
                            </div>
                        </TabPane>
                    </TabContent>
                </Tab>
            </section>
        </>
    );
}