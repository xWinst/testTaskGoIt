import icons from 'images/icons.svg';

const Icon = ({ icon, cn, click, w, h = w }) => {
    return (
        <svg className={cn} onClick={click} width={w} height={h}>
            <use href={`${icons}#${icon}`} />
        </svg>
    );
};

export default Icon;
