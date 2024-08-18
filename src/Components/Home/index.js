import "./index.css"

import Header from "../Header"

import BlogItems from "../BlogItems"

import { BeatLoader } from "react-spinners"

import {useState,useEffect} from "react"

const TabItems = [
    {tabId: "ALL", displaytext: "All"},
    {tabId: "JAVASCRIPT", displaytext: "Javascript"},
    {tabId: "RUBY", displaytext: "Ruby"},
    {tabId: "JAVA", displaytext: "Java"},
    {tabId: "CSS", displaytext: "CSS"},
]

const intitalValue = {
    Initital: "INITITAL",
    success: "SUCCESS",
    failure: "FAILURE",
    is_Loading: "IS_LOADING"
}

function Home(){

    const [activeTabId, setActiveTabId] = useState(TabItems[0].tabId)

    const [BlogDetails, setBlogDetalis] = useState([]);

    const [ApiStatus, setApiStatus] = useState(intitalValue.Initital);

    console.log(ApiStatus)


    const clickUpdate = tab => {
        setActiveTabId(tab);
    }

    useEffect(() => {
        const getCallApi = async () => {

            setApiStatus(intitalValue.is_Loading);

            const Api = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
            const options = {
                method:"GET"
            }

            const response = await fetch(Api,options)
            if (response.ok === true){
                const fetchData = await response.json();
                const upDate = fetchData.popular_repos.map(each => ({
                    name :  each.name,
                    id: each.id,
                    issuesCount: each.issues_count,
                    avatarUrl : each.avatar_url, 
                    forksCount: each.forks_count,
                    starsCount: each.stars_count,
                }))
                setApiStatus(intitalValue.success);
                setBlogDetalis(upDate);
            }else{
                setApiStatus(intitalValue.failure)
            }

            
        }
       getCallApi();
    },[activeTabId])

    const getLoaderSpinner = () => (
        <div className="Loader_spainner">
            <BeatLoader size={24} color="#0284c7"/>
        </div>
    )

    const getSuccess = () => {
        return(
            <ul className="Success_Container">
                {BlogDetails.map(each => (
                    <BlogItems key={each.id} eachBlog = {each}/> 
    ))}
            </ul>
        )
    }

    const getFailure = () => {
        return(
            <div className="failure_container">
                <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" className="failure" alt="failure view"/>
                <h1 className="failure__heading">Something went worng</h1>
            </div>
        )
    
        
    }

    const getTotalItemsStatus = () => {
        
        switch (ApiStatus) {
            case intitalValue.is_Loading:
                return getLoaderSpinner();
            case intitalValue.success:
                return getSuccess();
            case intitalValue.failure:
                return getFailure();
            default:
                return null;
        }
    
}
    return(
        <div className = "bgContainer">
            <h1 className="popular">Popular</h1>
            <ul className="un_order_container">
                {TabItems.map(each => (
                    <Header 
                    key={each.tabId} 
                    eachDetails = {each}
                    isActive = {each.tabId === activeTabId}
                    clickUpdate = {clickUpdate}
                    />
                ))}
            </ul>
            {getTotalItemsStatus()}
           
            
        </div>
    )
}

export default Home;