import '../style/component.css';

export const TextOnImageProps = ( {children, ...root} : any) => {
        return(
            <div className="image-container">
                <img {...root}></img>
                <span>{children}</span>
            </div>
        )
    }