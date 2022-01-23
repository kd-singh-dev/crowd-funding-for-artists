import React, { useEffect, useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Link from 'next/link'
import Alert from "@material-tailwind/react/Alert";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";


function ConnectMatamask(props) {
    const [connected, setConnected] = React.useState(false);

    async function connectWal() {
        if(window.ethereum){
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            console.log(await signer.getAddress());
            const sign = await signer.signMessage("Connect to Money Money!!");
            console.log(sign);
            setConnected(true);
        }
        else{
            alert("Install Metamask Wallet!!");
        }
    }
    return (
        <>
            <Button
                color="green"
                type="button"
                // onClick={(e) => setShowModal(true)}
                onClick={()=>{connectWal()}}
                ripple="light"
            >
                {(connected) ? "Metamask Connected" : "Connect Metamask"}
            </Button>
        </>
    );
}

export default ConnectMatamask;