"use client"
import { Provider } from "react-redux"
import { store } from "../store/store"


export const Providers = (props: React.PropsWithChildren) => {
    return <Provider store={store}>{props.children}</Provider>
}