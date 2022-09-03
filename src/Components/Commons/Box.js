


export default function Box({className, children}){

    const classNames = className + " p-5 bg-white rounded-xl shadow-[0_4px_16px_0px_rgba(121,96,163,0.13)]"

    return (
        <div className={classNames}>

            {children}

        </div>
    )
}