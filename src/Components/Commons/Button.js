
import SVG from "./Svg";
const noop = () => {};

const Loading = () => ( <span>loading...</span>)

function Button({
    text, isLoading, onClick = noop, style, isBox = false, icon,
    className
}) {

    return (
        <div>
            {isLoading ? <Loading/>
                : <button
                onClick={() => onClick()}
                type="button"
                className={className}
              >
                {icon && <SVG svgName={icon} className="hidden md:block md:scale-50"/>}
                {<span className="block md:hidden py-2">{text}</span>}
              </button>
            }   

        </div>
    )
}

export default Button;