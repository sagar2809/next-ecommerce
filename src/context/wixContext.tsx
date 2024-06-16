"use client"
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products,collections } from "@wix/stores";

import Cookies from "js-cookie"
import { ReactNode, createContext } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}")
const wixClient = createClient({
    modules: {
        products,
        collections,
        //current cart
    },
    auth: OAuthStrategy({
        clientId: "1905145c-22ee-4394-a834-452c9d34c9e4",
        tokens: {
            refreshToken, 
            accessToken: { value: "", expiresAt: 0 }
        }
    })
})
export type WixClient = typeof wixClient
export const WixClientContext = createContext<WixClient>(wixClient)
export const WixClientContextProvider = ({ 
    children,
 }: { 
    children: ReactNode;
 }) => {
    return(

        <WixClientContext.Provider value={wixClient}>{children}</WixClientContext.Provider>
    );

};