import {Navbar1} from "../../components/navbar1";
export default function CommonLayout({children}:{children: React.ReactNode}) {
    return (
        <div>
            <Navbar1/>
            {children}
        </div>
    )
}