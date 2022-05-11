import { data } from "autoprefixer";
import { useState } from "react"

export default function useFetch(baseUrl){

    const [loading, setLoading] = useState(true);

    const get = (url) => {
        return new Promise((resolve, reject) => {
            fetch(baseUrl+url)
            .then(res => res.json())
            .then(data => {
                if(!data){
                    return reject(data)
                }else{
                    setLoading(false)
                    resolve(data);
                }
            })
            .catch(error => {
                setLoading(false)
                reject(error);
            })
        })
    }

    const post = (url, body) => {
        return new Promise((resolve, reject) => {
            fetch(baseUrl+url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
            .then(data => {
                if(!data){
                    setLoading(false);
                    reject(data)
                }
            })
            .catch(error => {
                setLoading(false);
                reject(error);
            })
        })
    }

    return {
        loading, 
        get
    }
}