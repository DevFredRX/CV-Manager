import { Outlet } from "react-router-dom"
import Header from "src/components/Header.jsx"
import Footer from "src/components/Footer.jsx"
import Scrollbar from "src/components/Scrollbar.jsx"

export default function MainLayout({ variant, title }) {

    return (

        <>

            <div className="layout">
                <Header variant={variant} title={title} />
                <main>
                    <Outlet />
                    <Scrollbar variant="contained" />
                </main>
                <Footer variant={variant} />
            </div>
            
            <Scrollbar variant="fixed" />

        </>

    )

}