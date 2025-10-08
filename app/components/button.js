export const Button = ({onClick,className = "bg-blue-400. p-2 px-4 rounded cursor-pointer",label}) => ( 
        <button onClick={onClick} className={className}>
          {label}
        </button>
       )
  

