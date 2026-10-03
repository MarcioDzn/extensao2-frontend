type Props = {
    text: string
    className?: string
    handleClick: () => void
}

export default function Button({
    text,
    className = "",
    handleClick,
}: Props) {
    return (
        <button
            onClick={handleClick}
            className={`px-4 py-2 rounded-lg bg-secondary text-white cursor-pointer ${className}`}
        >
            {text}
        </button>
    )
}
