import { ThreeDots} from 'react-loader-spinner'
export default function Loading() {
  return (
    <div className="loading loaderContent">
      <ThreeDots color={`${window.innerWidth >480 ? "black" : "black"}`}/>
      {/* <TailSpin color="white" strokeWidth={2}  radius={1} width={20} height={20} wrapperClass='' wrapperStyle={{}} visible={true} /> */}
    </div>
  )
}
