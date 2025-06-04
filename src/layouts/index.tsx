import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <main id='main-layout'>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout