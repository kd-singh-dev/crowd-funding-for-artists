import React from "react";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";

export default function NewForm() {
    return (
        <div>
            <div class="w-2/3 p-5 ">
                <Input
                    type="text"
                    color="lightBlue"
                    size="lg"
                    outline={true}
                    placeholder="Title"                    
                />
            </div>
            <div class="p-5">
                <Input
                    type="text"
                    color="lightBlue"
                    size="lg"
                    outline={true}
                    placeholder="Evlevator Pitch"
                    
                />
            </div>
            <div class=" p-5">
            <Textarea
                color="lightBlue"
                size="regular"
                outline={true}
                placeholder="Description"
            />
            </div>
            <div class="w-1/3 p-5">
                <Input
                    type="text"
                    color="lightBlue"
                    size="lg"
                    outline={true}
                    placeholder="Require Amount"
                    
                />
            </div>
            <div class="w-1/3 p-5">
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                        >
                            <option selected>Current Status</option>
                            <option value="1">On Going</option>
                            <option value="0">Finished</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="p-5 float-left">
                        <Button color="lightBlue" size="lg" ripple="light">
                            Save
                        </Button>
            </div>
        </div>

    )
}