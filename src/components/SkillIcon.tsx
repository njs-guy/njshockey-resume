interface SkillIconProps {
    src: string,
    alt: string,
}

const SkillIcon = ({ src, alt }:SkillIconProps) => {
    return(
        <img src={src} alt={alt} title={alt} className="dark:skIcoDark h-16" />
    )
}

// god-like codepen: https://codepen.io/sosuke/pen/Pjoqqp

export default SkillIcon;