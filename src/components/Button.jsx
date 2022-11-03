export const Button = ({variant, action, children}) => {
    return (
        <>
            {
                variant === "primary"
                    ? <button className="bg-ct-primary-500 py-2 px-4 rounded-md border border-ct-primary-500 text-white text-[16px] max-w-fit hover:bg-opacity-75 transition-color duration-300">{children}</button>
                    : variant === "secondary"
                        ? <button className="bg-transparent py-2 px-4 rounded-md border border-white text-white text-[16px] max-w-fit hover:bg-white hover:bg-opacity-5 transition-color duration-300">{children}</button>
                        : ""
            }
        </>
    )
}