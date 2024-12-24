import {TailSpin} from 'react-loader-spinner'
export default function Loading() {
  return (
    <div className="loading loaderContent">
      <TailSpin color="white" strokeWidth={2}  radius={1} width={20} height={20} wrapperClass='' wrapperStyle={{}} visible={true} />
    </div>
  )
}
