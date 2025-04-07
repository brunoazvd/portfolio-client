export const Chip = ({label, handleClick, currentSelected}) => {
  return (
    <div
        className={`px-3 py-2 border-2 rounded-xl flex place-items-center align-middle
             hover:border-primary-light ${currentSelected ? 'bg-primary' : ''}`}
        onClick={handleClick}>
        {label}
    </div>
  )
}