import React, { useEffect, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import ArtistCard from "./ArtistCard";

export default function TrendingCard(props){
    const [loading, setLoading] = useState(false);
    const [temp, setTemp] = useState([]);
    useEffect(() => {
        setLoading(true);
        setTemp(props.doc);
        setLoading(false);
    },[props.doc]);
    temp.sort((a, b) => (a.likes > b.likes) ? -1 : 1);
    if(loading){
        return (
            <>
                Loaging...
            </>
        )
    }
    
    return (
        <>
            {temp.map((doc, index) => {
                return (
                    <ArtistCard 
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