import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Result = ({result}) => {
    
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return ( 
        <div className=" group p-2 flex flex-col
        sm:hover:scale-110 transition duration-200 ease-in-out
        cursor-pointer">
            <Image className="object-contain" 
            layout="responsive"
             src={ `${BASE_URL}${result.backdrop_path || 
                result.poster_path}` || `${BASE_URL}${result.poster_path}`}


              width={200} height={200} alt={result.title} />
            <p className="truncate max-w-md" >{result.overview}</p>
            <h1 className="mt-1 text-2xl group-hover:font-bold transition-all duration-150 ease-in-out " >{result.title || result.original_name}</h1>
            <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" >
                <p>{result.media_type && `${result.media_type} •`}</p>
                <p>{`${result.release_date || result.first_air_date}  • `}</p>
                <ThumbUpIcon className="h-5 mx-2" />

            </div>
        </div>
     );
}
 
export default Result;