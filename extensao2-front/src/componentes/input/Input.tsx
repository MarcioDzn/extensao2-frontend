import type { JSX } from "react/jsx-runtime"

type Props = {
    label?: string
    placeholder?: string
    value?: string
    type?: "text" | "email" | "password" | "number"
    className?: string
    icon?: JSX.Element
    handleChange?: (value: string) => void
}

export default function Input({
    label,
    placeholder,
    value,
    type = "text",
    className = "",
    icon,
    handleChange,
}: Props) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                        {icon}
                    </div>
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => handleChange?.(e.target.value)}
                    className={`
                        w-full rounded-lg border border-gray-300
                        bg-white py-2 pr-4
                        text-gray-900 outline-none transition
                        placeholder:text-gray-400
                        focus:border-primary
                        focus:ring-2 focus:ring-primary/20
                        ${icon ? "pl-10" : "pl-4"}
                        ${className}
                    `}
                />
            </div>
        </div>
    )
}
