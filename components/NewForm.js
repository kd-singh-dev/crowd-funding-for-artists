import React, { useEffect, useState } from "react";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import { create as ipfsHttpClient } from 'ipfs-http-client'

import { ethers } from 'ethers'
import Web3Modal from 'web3modal'


export default function NewForm() {
    const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
    const [title, setTitle] = useState('');
    const [ePitch, setEPitch] = useState('');
    const [des, setDes] = useState('');
    const [img, setImg] = useState();
    const [amount, setAmount] = useState(0);
    const [status, setStatus] = useState(0);
    const [btd,setbtd] = useState(true);

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

    const handleTitleChange = event => {
        setTitle(event.target.value)
    };
    const handleEPitchChange = event => {
        setEPitch(event.target.value)
    };
    const handleDesChange = event => {
        setDes(event.target.value)
    };
    const handleAmountChange = event => {
        setAmount(event.target.value)
    };
    const handleStatusChange = event => {
        setStatus(event.target.value)
    };
    const handleFileChange = async (event) => {
        setbtd(true);
        //setImg(event.target.file(0))
        
            const file = event.target.files[0];
            try {
                const added = await client.add(
                    file, {
                    progress: (prog) => console.log(`received: ${prog}`)
                });
                const url = `https://ipfs.infura.io/ipfs/${added.path}`;
                setImg(url)
                console.log(url);
            } catch (error) {
                console.log('Error uploading file:', error);
            }

            setbtd(false);
        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(title, ePitch, des, amount, status,img);
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        console.log(signer);

        const cfContract = new ethers.Contract(cfAdd, cfAbi, signer);
        const c = await cfContract.createCampaign(title,des,amount,img,ePitch);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div class="w-2/3 p-5 ">
                <Input
                    type="text"
                    color="lightBlue"
                    size="lg"
                    outline={true}
                    placeholder="Title"  
                    name="title"  
                    onChange={handleTitleChange}                
                />
            </div>
            <div class="p-5">
                <Input
                    type="text"
                    color="lightBlue"
                    size="lg"
                    outline={true}
                    placeholder="Evlevator Pitch"
                    name="elevatorPitch"
                    onChange={handleEPitchChange}
                />
            </div>
            <div class=" p-5">
            <Textarea
                color="lightBlue"
                size="regular"
                outline={true}
                placeholder="Description"
                name="description"
                onChange={handleDesChange}
            />
            </div>
            <div class="w-2/5 p-5">
                <Input
                    type="text"
                    color="lightBlue"
                    size="lg"
                    outline={true}
                    placeholder="Require Amount"
                    name="amount"
                    onChange={handleAmountChange}
                />
            </div>
            <div class="w-2/5 p-5">
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <select class="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-drak bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" name="status"
                            onChange={handleStatusChange}
                        >
                            <option selected>Current Status</option>
                            <option value="1">On Going</option>
                            <option value="0">Finished</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="w-2/3 p-5">
                <div class="">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700"></label>
                    <input class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"
                    name="img"
                    onChange={handleFileChange}
                    />
                </div>
            </div>
            <div class="p-5 float-left">
                <Button type="submit" disabled={btd} color="lightBlue" size="lg" ripple="light">
                    Save
                </Button>
            </div>
        </form>

    )
}