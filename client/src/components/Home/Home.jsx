import { useEffect, useState } from "react";
import axios from "axios";
import Image_component from "./image_forme/image_component";
import Image_submit from "./image_submit/image_submit";


export default function Home({ category }) {

    const [fetching, setFetching] = useState(true);
    const [data, setData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    console.log(data)
    useEffect(() => {
        // setLoading(true);
        if (fetching) {
            console.log("fetchhing")
            axios.get("http://localhost:4000/image_loud")
                .then((res) => {
                    setData((data) => [...data,...res.data]);
                    // setCurrentPage(prevState => prevState + 1);
                })
                .catch(err =>{
                    alert(err)
                })
                .finally(() => setFetching(false))
                
        }

        // setLoading(false);
    }, [fetching]);
    useEffect(() => {
        document.addEventListener("scroll", scroll_hendler);
        return function () {
            document.removeEventListener("scroll", scroll_hendler)
        }
    }, []);

    const scroll_hendler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            console.log("scroll")
            setFetching(true);
        }

    }


    // if (fetching) {
    //     return (
    //         <div className="home">
    //             loading...
    //         </div>
    //     );
    // } else {
    return (
        <div className="home">
            <Image_submit></Image_submit>
            {
                data.map((elem, index) => {
                    return (
                        <Image_component props={elem} key={index+Math.random()}></Image_component>
                    )
                })
            }
        </div>
    );

}