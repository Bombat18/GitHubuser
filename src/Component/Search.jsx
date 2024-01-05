import useDebounce from "./hooks/useDebounce"

function Search({ updateSearchTerm }) {



    return (
        <div>

            <div className="  flex items-center justify-center">
                <img className=" md:w-14  w-12" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                <h1 className="font-normal text-3xl md:text-4xl">G<span className="font-thin md:text-4xl text-3xl text-black ">ithub Users</span></h1>

            </div>
            <hr className="my-2  border-t border-1 md:mx-12 border-red-600" />
            <div className="flex items-center justify-center pb-10 pt-5 ">
                <input type="text"
                    className="px-4 py-2  border border-gray-300 md:w-[70%] bg-blue-100 placeholder:text-gray-600  placeholder:text-sm placeholder:tracking-wide "
                    placeholder="Enter GitHub username"
                    onChange={useDebounce((e) => updateSearchTerm(e.target.value))}
                />


            </div>
        </div>
    )
}

export default Search