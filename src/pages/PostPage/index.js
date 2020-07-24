import React, {useEffect} from "react"
import { useParams, } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import { fetchPost } from "../../store/postPages/action"
import { isLoading } from "../../store/postPages/selector"
import { startLoadingPost } from "../../store/postPages/action"

export default function PostPages(){
    const dispatch = useDispatch()
    const idNeeded = parseInt(useParams().id)
    console.log("params test", idNeeded)
    const loading = useSelector(isLoading)
    console.log("selector test", loading)
    const action = startLoadingPost
    console.log("action test", action())
    
    useEffect(() => {
        // dispatch(fetchPost(idNeeded));
        dispatch(action())
    }, [dispatch]);


    return (
            <div>
                <h1>Check this Page</h1>
            </div>
    )
}