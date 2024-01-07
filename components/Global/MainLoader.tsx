import { Spinner } from "@nextui-org/react"

interface IProps {
  
}

const MainLoader = ({}: IProps) => {
  return <div className="h-screen w-full flex items-center justify-center">
     <Spinner label="Welcome 👋! Wait ......" color="warning" />
  </div>
}

export default MainLoader