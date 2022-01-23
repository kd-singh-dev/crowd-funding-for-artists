import React, { useEffect, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import CampaignsCard from "./CampaignsCard";

export default function MyCampaigns(props){
    const [loading, setLoading] = useState(false);
    
    if(loading){
        return (
            <>
                Loaging...
            </>
        )
    }
    
    return (
        <>
            {props.doc.map((doc, index) => {
                return (
                    <CampaignsCard 
                        key={index}
                        title={doc.title}
                        elevatorPitch={doc.elevatorPitch}
                        description={doc.description}
                        imgLink={doc.imgLink}
                        value={doc.value}
                        currentStatus={doc.currentStatus}
                        rasied={doc.rasied}
                        complete={doc.complete}
                        approvalCount={doc.approvalCount}
                        likes={doc.likes}
                    />
                )
            })}
        </>
    )
}