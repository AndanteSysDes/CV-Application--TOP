import { useState } from "react"
import type { Info } from "../types/information";

type EditCardProps = {
  title: string;
  info: Info;
  handleClick: (updatedInfo: Info) => void;
}
export default function EditCard({ title, info, handleClick }: EditCardProps) {
  const [draft, setDraft] = useState(info);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const {value} = e.target;
    const newDraft = [...draft] as typeof draft;
    newDraft[index] = {
      ...newDraft[index],
      value: value
    } 
    setDraft(newDraft)
  }

  return (
    <div className='card editing' >
      <h2> { title } </h2>
      
      <div className='detail'>

        {draft.map((data, index) => 
          <div className='grid-container' key={data.key}>
            <p>{data.label} : </p>

              {data.inputType==="textArea"? 
                <textarea 
                  rows={5}
                  value={data.value}
                  name={data.key}
                  onChange={(e) => handleChange(e, index)}
                />
              :              
                <input 
                  type={data.inputType}
                  value={data.value}
                  name={data.key}
                  onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e, index)}
                />
              }

          </div>
        )}
        
      </div>

      <div className='button-area'>
        <button 
          type="button"
          onClick={() => handleClick(draft)}
        >
          Submit
        </button>
      </div>

    </div>
  )
}