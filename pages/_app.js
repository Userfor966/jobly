import "@/styles/globals.css";
import store from "@/redux/store";
import {Provider} from "react-redux"
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {

  return (
 <Provider store={store}>
  <Toaster position="top-center"
   toastOptions={{
    style: {
      width: "100%",
      border:"1px solid #aaaaaa88",
      borderRadius: "5px",
      fontSize: "14px",
      padding: "5px",
      color:"white"
    },
    success: {
      style: {
        background: "#1B1F23",
       },
    },
    error: {
      style: {
        background: "red", 
      },
    }}}
  reverseOrder={false} />
  <Component {...pageProps} />
  </Provider>
  )
}
