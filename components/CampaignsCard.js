import React, { useEffect, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";

import { ethers } from 'ethers'
import Web3Modal from 'web3modal'


export default function CampaignsCard(props) {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [siteName, setSiteName] = useState('');
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [amount, setAmount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

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
    
    useEffect(() => {
        setLikes(props.likes);
    },[]);

    const handleLike = event => {

        if(liked)
        {
            setLikes(likes - 1);
        }
        else
            setLikes(parseInt(likes) + 1);
        setLiked(!liked);
    };
    const handleTitleChange = event => {
        setTitle(event.target.value)
    };
    const handleDesChange = event => {
        setDes(event.target.value)
    };
    const handleAmountChange = event => {
        setAmount(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(title, des, amount);
    };

    const handleRequest = async (e) => {
    // e.preventDefault();
        console.log("Create Request!!");
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const campContract = new ethers.Contract(props.complete,campAbi,signer);

        const tx = campContract.createRequest(des,amount,title);
        console.log(tx);

    }
    return (
        <div className="" key={props.key}>
            <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-110 duration-150">
                <CardImage
                    src={props.imgLink}
                    alt="Card Image"
                    className="h-60 w-full"
                />

                <div class="px-6 py-4">
                    <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{props.title}</h1>

                    <p class="py-2 text-gray-700 dark:text-gray-400">{props.elevatorPitch}</p>

                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-left">Toal Require Amount</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-right">{props.value} ETH</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-left">Total Rasied Amount</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-right">{props.rasied}  ETH</div>
                    
                </div>
                <CardFooter>
                    <div class="p-2 float-left">
                        <Button color="lightBlue" onClick={(e) => setShowModal(true)} size="lg" ripple="light" >
                            Read More..
                        </Button>
                    </div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-right">
                        <div class="grid grid-rows-1 grid-flow-col gap-4">
                            <div class="float-center">
                                <div style={{
                                    margin: 'auto',
                                    display: 'block',
                                    width: 'fit-content'
                                }}>
                                    <FormControlLabel onClick={handleLike}
                                        control={<Checkbox icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            name="checkedH" />}
                                        label={likes}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="p-2 w-1/2 ">
                            <Button color="amber" size="lg" ripple="light" onClick={(e) => setShowModal2(true)}>
                                Request
                            </Button>
                        </div>
                    </div>
                    <div>
                        <input class="rounded-lg overflow-hidden h-2 w-full" type="range" 
                            min="1" 
                            max="100" 
                            value={props.rasied*100/props.value} 
                        />
                    </div>
                </CardFooter>
            </div>
            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    {props.title}
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal text-justify p-5">
                        {props.description}
                    </p>
                    <p className="text-base leading-relaxed text-gray-600 font-normal text-justify p-5">
                        Total Required Amount: {props.value} ETH
                    </p>
                    <p className="text-base leading-relaxed text-gray-600 font-normal text-justify p-5">
                        Total Raised Amount: {props.rasied} ETH
                    </p>
                    <div className="w-2/3">
                        <input class="rounded-lg overflow-hidden h-2 w-full" type="range" 
                            min="1" 
                            max="100" 
                            value="50" 
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="lightBlue"
                        /*onClick={}*/
                        ripple="light"
                    >
                        Contribute
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal size="lg" active={showModal2} toggler={() => setShowModal2(false)}>
                <ModalHeader toggler={() => setShowModal2(false)}>
                    Add Request
                </ModalHeader>
                <ModalBody class="">
                    <form onSubmit={handleSubmit}>
                        <div class="w-96 p-2">
                            <Input
                                type="text"
                                color="lightBlue"
                                size="lg"
                                outline={true}
                                placeholder="Address"  
                                name="title"  
                                onChange={handleTitleChange}                
                            />
                        </div>
                        <div class="p-2">
                        <Textarea
                            color="lightBlue"
                            size="regular"
                            outline={true}
                            placeholder="Description"
                            name="description"
                            onChange={handleDesChange}
                        />
                        </div>
                        <div class="p-2">
                            <Input
                                type="text"
                                color="lightBlue"
                                size="lg"
                                outline={true}
                                placeholder="Amount"
                                name="amount"
                                onChange={handleAmountChange}
                            />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="lightBlue"
                        onClick={handleRequest()}
                        ripple="light"
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}