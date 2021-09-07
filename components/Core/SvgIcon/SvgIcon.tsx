import react from "react"

import svgIcons, { SvgIcons } from "components/Core/SvgIcon/svgIcons"

interface Props {
    width?: number | string;
    height?: number | string;
    icon: (svgIcon: SvgIcons) => JSX.Element;
}

const getDimensionString = ( dimension: number | string ) : string => {
    return typeof dimension === "number" ? `${dimension}rem` : dimension
}

const SvgIcon = (props: Props) => {
    const { icon, width = 1, height = 1 } = props

    const svgWidth = getDimensionString(width)
    const svgHeight = getDimensionString(height)

    const svgDivStyle = {
        width: svgWidth,
        height: svgHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return <div style={svgDivStyle}>{icon(svgIcons)}</div>
}

export default SvgIcon