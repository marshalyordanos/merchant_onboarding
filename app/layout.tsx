import React from 'react'

import "../sass/main.scss"

const RootLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <html lang="en">
            <head>
                <title>LakiPay Merchant</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout