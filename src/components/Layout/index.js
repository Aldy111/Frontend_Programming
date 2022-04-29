import Container from "../Container"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

const Layout = (props)=> {
    return(
        <div>
            <Navbar/>
            <main>
                <Container>{props.children}</Container>
            </main>
            <Footer/>
        </div>
    )
}
export default Layout