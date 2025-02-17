


interface ButtonProps {
    type?: 'submit' | 'button';
    text?: string;
    onClick?: () => void;
    other?: any;
}

export default function Button({ type, text, onClick, ...other }: ButtonProps) {
  return (
    <button {...other} className='bg-gray-200 text-black pl-10 pr-10 items-center rounded-sm
    p-1 animate-none lg:animate-none' type={type} onClick={onClick} >
      {text}
    </button>
  )
}
