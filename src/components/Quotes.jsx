import {quotes} from '../quotes'
export default function Quotes(){
    return(
        <>
            <div>
                {
                    quotes.map((item,index) =>{
                        return(
                            <div className='bg-gray-800 p-6 mx-24 my-20 rounded-lg text-center text-[white]'>
                                <h1 className='text-3xl font-semibold pb-4'>{item.quote}</h1>
                                <p className='text-gray-400 text-xl mb-5'>{item.author}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}