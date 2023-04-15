import { Icon } from 'components';
import { useState, useEffect } from 'react';
import s from './Select.module.css';

const Select = ({ list, onSelect, value, name }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const onClick = e => {
            const target = e.target.getAttribute('name');
            const parent = e.target.parentElement?.getAttribute('name');
            const grandParent =
                e.target.parentElement?.parentElement?.getAttribute('name');
            if (target !== name && parent !== name && grandParent !== name)
                setIsExpanded(false);
        };

        const onKeyDown = event => {
            if (event.code === 'Tab' || event.code === 'Escape')
                setIsExpanded(false);
        };

        window.addEventListener('click', onClick);
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('click', onClick);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [name]);

    const toggleState = () => {
        setIsExpanded(state => !state);
    };

    return (
        <div className={s.container}>
            <div className={s.select} onClick={toggleState} name={name}>
                {value}
                <Icon icon={isExpanded ? 'collaps' : 'expand'} w={20} />
            </div>
            {isExpanded && (
                <ul className={s.list}>
                    {list.map(item => (
                        <li
                            key={item}
                            name="item"
                            className={s.item}
                            onClick={() => onSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
