import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useContext, useState,useEffect } from "react";
import { Context } from "../../context";
import { getProductPageInation } from "../../api";

export default function PageInation({numberOfPagesP}) {
const [page,setPage] = useState({page:0 , items:[]});
  const context = useContext(Context);
 const {setProducts,partGroup,pageContext,setPageContext,products, setLoadingGridComponent,numberOfPages} = context;
 const getFromServerProduct =  (page)=>{
  getProductPageInation(pageContext,partGroup).then((res)=>{
    setProducts(res)
  })
  .catch((err)=>{
console.log(err)
  })
}
const nextPage = ()=>{
  if(pageContext!=numberOfPages -1)
  {
   setPageContext(pageContext+1)
  }
}
const prevPage = ()=>{
  if(pageContext!=0)
  {
   setPageContext(pageContext-1)
  }
}
 useEffect(()=>{
  getFromServerProduct(pageContext)
 },[pageContext]) 

    const array = []
    if(numberOfPagesP)
        for (let i=0 ; i<numberOfPagesP; i++){
         
        array.push(i)
  }
  
  const  pagination=(items, currentPage, pageSize )=> {
    
 if(currentPage!= numberOfPagesP -1 &&currentPage!= numberOfPagesP -2){

   const slicedArray =  items.slice(currentPage!=0&&currentPage!=1? currentPage-1: 0, currentPage +3);
   slicedArray.includes(0)?
   setPage({...page , items:[...slicedArray,'...',Math.floor(numberOfPagesP -1)]}):
    setPage({...page , items:[0,...slicedArray,'...',Math.floor(numberOfPagesP -1)]})
  }
  else{
    const slicedArray =  items.slice( -3);
    const sss=slicedArray.slice( 0 , slicedArray.length - 1)
   setPage({...page , items:[0,...sss,'...',Math.floor(numberOfPagesP -1)]})
  }
  }
useEffect(()=>{
  pagination(array, 0, 5)
},[numberOfPagesP])
useEffect(()=>{
  pagination(array,pageContext,5)
},[pageContext])
  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:flex-row ">
     
      <div className=" mobile:flex mobile:flex-1 mobile:justify-between mobile:items-center mobile:w-full sm:flex sm:flex-1 sm:items-center sm:w-full sm:justify-between">
        <div >
          <p className="text-sm text-gray-700">
            ????????  <span className="font-medium">{pageContext +1}</span> ????{" "}
            <span className="font-medium">{Math.floor(numberOfPagesP) }</span> 
          </p>
        </div>
        <div dir="ltr">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <p
              
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" onClick={()=>prevPage()}/>
            </p> 
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
           {page.items.map((item,index)=>{
            return (   <a
              onClick={()=>{setPageContext(item!="..."?item:page.items[index-1]);pagination(array,item!="..."?item:page.items[index-1] , 5)}}
              aria-current="page"
              className={`relative z-10 inline-flex items-center border ${item ==pageContext?'border-indigo-500 bg-indigo-50 ':'border-gray-300 bg-white'} px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}
              >
          {item!="..."?item +1:item}
        </a>)
           })}
         
    
            <p
             onClick={()=> nextPage()}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
}
