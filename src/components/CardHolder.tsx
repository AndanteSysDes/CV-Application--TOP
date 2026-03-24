import { useState } from "react";
import EditCard from "./EditCard"
import DisplayCard from "./DisplayCard"
import type { Info } from "../types/information";

type CardHolderProps = {
  title: string;
  initialInfo: Info;
}

export default function CardHolder({title, initialInfo}: CardHolderProps) {
  
    const [info, setInfo] = useState(initialInfo);
    const [isEditing, setIsEditing] = useState(true);
  
    const handleEdit = () => setIsEditing(true)
    const handleSubmit = (updatedInfo: Info) => {
      setIsEditing(false)
      setInfo(updatedInfo)
    }


  return (
    <>
      {isEditing ? 
        <EditCard 
          title={title} 
          info={info} 
          handleClick={handleSubmit}
        />
      : 
        <DisplayCard 
          title={title} 
          info={info} 
          handleClick={handleEdit}
        />
      }
    </>
  )
}