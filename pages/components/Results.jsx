import Result from "./Result";

const Results = ({results}) => {
    return ( 
        <div className="px-5 my-10 sm:grid
         sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
         2xl:flex flex-wrap justify-center">
            {results.map( result => ( <Result key={result.id} result={result} /> ))}
        </div>
        );
}
 
export default Results;