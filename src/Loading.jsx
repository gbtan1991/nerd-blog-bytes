import glasses from "./assets/geek-glasses.svg";

const Loading = () => {
    


  return (
    <div className='grid place-content-center h-screen'>
        <div className="flex flex-col items-center">
        <img src={ glasses } className="animate-bounce w-52 select-none" draggable="false" />
        <h3 className="text-3xl animate-pulse">LOADING...</h3>
        </div>
    </div>
  )
}

export default Loading
