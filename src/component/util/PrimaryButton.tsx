
import { useNavigate } from 'react-router-dom'
import '../../style/component.css'
export const  PrimaryButton = ({children, ...root}: any) => {
    const navigation = useNavigate();
    return(
        <div className="button">
            <button className="primary-btn" {...root}>{children}</button>
        </div>
    )
}