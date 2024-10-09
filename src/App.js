import UseStateHook from "./Hooks/UseStateHook";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef"
import UseCallback from "./Hooks/UseCallback"
import UseMemo from "./Hooks/UseMemo"
import UseContext from "./Hooks/UseContext"
import UseReducer from "./Hooks/UseReducer"
import UseLayoutEffect from "./Hooks/UseLayoutEffect"

import Header from "./Components/Header";

export default function App() {

  const topics = [ "useState", "useEffect", "useRef", "useReducer", "useCallback", "useMemo", "useContext", "useLayoutEffect"];

  return (
    <div>
      <Header></Header> 
      <div className='bg-slate-950 text-white w-screen h-auto py-28 px-20 text-wrap' >
          <UseStateHook></UseStateHook>
          <UseEffect></UseEffect>
          <UseRef></UseRef>
          <UseCallback></UseCallback>
          <UseMemo></UseMemo>
          <UseContext></UseContext>
          <UseReducer></UseReducer>
          <UseLayoutEffect></UseLayoutEffect>
      </div>  
    </div>
  )
}