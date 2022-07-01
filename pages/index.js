import Link from "next/link";

function Home(){
    return (
        <>
            <h1>HOME</h1>

            <Link href="/sobre">
                <a>Acessar SOBRE</a>
            </Link>
        </>
    )
}

export default Home