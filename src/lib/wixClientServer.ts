import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";


export const wixClientServer = async () => {


let refreshToken;
try {
    
    const cookieHeader = cookies();
     refreshToken = JSON.parse(cookieHeader.get("refreshToken")?.value || "{}")
} catch (error) {
    console.log(error)
    
}
 const wixClient = createClient({
    modules: {
        products,
        collections,
    },
    auth: OAuthStrategy({
        clientId: "1905145c-22ee-4394-a834-452c9d34c9e4",
        tokens: {
            refreshToken, 
            accessToken: { value: "", expiresAt: 0 }
        }
    })
})
return wixClient;
}