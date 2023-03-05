import styles from './Avatar.module.css';

//conseito de desestruturacao ao inves de props dentro do ()

export function Avatar({hasBorder = true, src}) {
    return (
        <div>
            <img
                className={hasBorder ? styles.avatarWihtBorder : styles.avatar}
                src={src} />
        </div>
        
        
    )
}