import type { Info } from "../types/information";

type DisplayCardProps = {
  title: string;
  info: Info;
  handleClick: () => void;
}

export default function DisplayCard({ title, info, handleClick}: DisplayCardProps)  {
  return (
    <div className='card' >
      <h2> { title } </h2>

      <div className='detail'>

        {info.map((data) => 
          <div className='grid-container' key={data.key}>
            <p>{data.label} : </p>
              <p> {data.value}</p>
          </div>
        )}

      </div>

      <div className='button-area'>
        <button 
          onClick={handleClick}
        >
          Edit</button>
      </div>

    </div>
  )
}
