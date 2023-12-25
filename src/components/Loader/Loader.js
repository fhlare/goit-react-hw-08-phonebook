import { RotatingLines } from "react-loader-spinner"
import { LoaderContainer } from "./Loader.style"

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
    visible={true}
    height="96"
    width="96"
    strokeColor="#4d5ae5"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    />
    </LoaderContainer>
  )
}