import './Loading.css';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg className="w-16 loading-spinner">
        <circle className="loading-circle" r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  )
}

export default Loading
