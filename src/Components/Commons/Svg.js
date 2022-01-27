import SVGs from '../../Assets/svgs';


const SVG = ({ svgName, className }) => {
    if( SVGs[svgName] ){
       const svg = SVGs[svgName]();
       return ( <div className={className}>{svg}</div>)
    } else {
        return (<div></div>)
    }
}

export default SVG;