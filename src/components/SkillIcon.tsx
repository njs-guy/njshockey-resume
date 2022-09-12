interface SkillIconProps {
    src: string,
    alt: string,
}

const SkillIcon = ({ src, alt }:SkillIconProps) => {
    return(
        <img src={src} alt={alt} className="fill-white h-16" />
    )
}

export default SkillIcon;