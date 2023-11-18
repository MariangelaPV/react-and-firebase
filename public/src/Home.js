import { useEffect, useRef, useState } from "react";

function Home() {

    const { user, setUser } = useState(null);
    const dataFetchedReference = useRef(false);

    useEffect(() => {

    })

    return (
        <span>Hola como estas</span>
    );
}

export default Home;