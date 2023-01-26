import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useContext, useState,useEffect } from "react";
import { Context } from "../../context";
import { getProductPageInation } from "../../api";

export default function PageInation({numberOfPagesP}) {
const [page,setPage] = useState({page:0 , items:[]});
  const context = useContext(Context);
 const {setProducts,partGroup,pageContext,setPageContext, setLoadingGridComponent} = context;
 const getFromServerProduct =  (page)=>{
    getProductPageInation(pageContext,partGroup).then((res)=>{
      setProducts(res)
    })
    .catch((err)=>{
console.log(err)
    })
  }
 useEffect(()=>{
  getFromServerProduct(pageContext)
 },[pageContext]) 

    const array = []
    if(numberOfPagesP)
        for (let i=0 ; i<=numberOfPagesP; i++){
         
        array.push(i)
  }
  
  const  pagination=(items, currentPage, pageSize )=> {
    

      const slicedArray =  items.slice(currentPage!=0&&currentPage!=1? currentPage-1: 0, currentPage + 3);
      setPage({...page , items:[...slicedArray,'...',Math.floor(numberOfPagesP)]})
  }
useEffect(()=>{
  pagination(array, 0, 5)
},[numberOfPagesP])
useEffect(()=>{
  console.log(page.items)
},[page.items])
  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:flex-row ">
     
      <div className=" mobile:flex mobile:flex-1 mobile:justify-between mobile:items-center mobile:w-full sm:flex sm:flex-1 sm:items-center sm:w-full sm:justify-between">
        <div >
          <p className="text-sm text-gray-700">
            صفحه  <span className="font-medium">{pageContext}</span> از{" "}
            <span className="font-medium">{Math.floor(numberOfPagesP)}</span> صفحه
          </p>
        </div>
        <div dir="ltr">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a> 
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
           {page.items.map((item,index)=>{
            return (   <a
              onClick={()=>{setPageContext(item!="..."?item:page.items[index-1]);pagination(array,item!="..."?item:page.items[index-1] , 5)}}
              aria-current="page"
              className={`relative z-10 inline-flex items-center border ${item ==pageContext?'border-indigo-500 bg-indigo-50 ':'border-gray-300 bg-white'} px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}
              >
          {item}
        </a>)
           })}
         
    
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
