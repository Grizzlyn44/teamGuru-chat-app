import Router from 'next/router'
import { Input } from 'antd';
import { ChangeEvent, useState, useEffect } from "react"

import searchStyles from "styles/components/Navbar/Search.module.scss"

const Home = () => {

    const apiSearchUsers = async (searchQuery: string) => {

        const apiRouteRoot = "user/search"
        const { NEXT_PUBLIC_WEB_ROOT_URL } = process.env
    
        if(!NEXT_PUBLIC_WEB_ROOT_URL) throw new Error("NEXT_PUBLIC_WEB_ROOT_URL ENV is missing")
    
        // const bodyData:IBody = { user }
    
        return await fetch(`${NEXT_PUBLIC_WEB_ROOT_URL}/api/${apiRouteRoot}`, {
            method: "POST",
            body: JSON.stringify({searchQuery})
        })
      }

    const [searchValue, setSearchValue] = useState("")
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const [searchIsFocused, setSearchIsFocused] = useState(false)

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
    }

    useEffect( () => {

        const search = async () => {
            const response = await apiSearchUsers(searchValue).then( res => {
                return res.json()
            })

            console.log("response", response)
            
            setSearchSuggestions(response)
        }

        search()

        // if(searchValue) {
        //     search()
        // }

    }, [searchValue])

    const generateSuggestions = () => {

        if(searchSuggestions.length < 1) return <div key="no-data">NO DATA</div>

        return searchSuggestions.map( (user:any, index:number) => {
            return (
                <div className={searchStyles.suggestionItem} key={`search-suggestion-${index}`}>
                    <img src={user.image} className={searchStyles.image} />
                    <div className={searchStyles.suggestionInner}>
                        {user.username}
                    </div>
                </div>
            )
        })
    }

    const showSuggestions = searchSuggestions.length > 0 && searchIsFocused

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '2rem'
            }}>
                <div className={searchStyles.searchContainer}>
                    <Input size="large" onFocus={() => setSearchIsFocused(true)} onBlur={() => setSearchIsFocused(false)} style={{minWidth: '5rem', height: '3rem'}} placeholder="Search users" value={searchValue} onChange={searchInputHandler} />
                    <div className={searchStyles.suggestionContainer}
                    style={{
                        opacity: showSuggestions ? '1' : '0',
                        pointerEvents: showSuggestions ? 'auto' : 'none'
                    }}>
                        {generateSuggestions()}
                    </div>
                </div>

                <div onClick={() => Router.push("/messages")} style={{
                    display: 'flex',
                    padding: '0 3rem',
                    alignItems: 'center',
                    color: '#151719',
                    fontSize: '.8rem',
                    fontWeight: 500,
                    background: '#43a1fe',
                    borderRadius: '.25rem',
                    cursor: 'pointer',
                    marginLeft: '2rem'
                }}>
                    Messages
                </div>
            </div>
            <div>Homepage...</div>
        </div>
    )
}

export default Home