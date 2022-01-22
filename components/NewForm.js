import React, { useEffect, useState } from "react";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";

export default function NewForm() {
    const [title, setTitle] = useState('');
    const [ePitch, setEPitch] = useState('');
    const [des, setDes] = useState('');
    const [img, setImg] = useState();
    const [amount, setAmount] = useState(0);
    const [status, setStatus] = useState(0);

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
    const handleFileChange = event => {
        setImg(event.target.file(0))
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(title, ePitch, des, amount, status);
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
                <Button type="submit" color="lightBlue" size="lg" ripple="light">
                    Save
                </Button>
            </div>
        </form>

    )
}