import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                if (!result) {
                    setData([])
                    return result
                }
                console.log("data :", result);
                setData(result.posts)
            })
    }, [url]);
}