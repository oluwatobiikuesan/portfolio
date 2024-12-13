
import '../style/component.css'
export const  PrimaryButton = ({children, ...root}: any) => {
    return(
        <div className="button">
            <button className="primary-btn" {...root}>{children}</button>
        </div>
    )
}   