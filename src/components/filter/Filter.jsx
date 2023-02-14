import React, { useState, useEffect ,useContext} from "react";
import { useForm } from "react-hook-form";

import Slider from "../slider/Slider";

import { status, truck, brand } from "../../assets/filterData/filterData";
import { getPartGroupList,getProductFromPartGroup, getProductPageInation } from "../../api";
import { Context } from "../../context";


function FilterItem({ header, data }) {
  const context= useContext(Context)
  const {setProducts,setLoadingGridComponent,setPartGroup ,numberOfPages,partGroup,
    setNumberOfPages,pageContext,products
  }=context
  const reqSever = (groupCode)=>{
    getProductFromPartGroup(groupCode)
    .then((res)=>{
      setNumberOfPages(Math.ceil(res.length/products.length))
    })
    .catch((err)=>{
      console.log(err)
    })
    setPartGroup(groupCode)
    setLoadingGridComponent(true)
    getProductPageInation(pageContext,partGroup)
    .then((res)=>{
      setProducts(res)
      setLoadingGridComponent(false)
    })
  }
  useEffect(()=>{
    getProductPageInation(pageContext,partGroup)
    .then((res)=>{
      setProducts(res)
      setLoadingGridComponent(false)
    })
  },[pageContext])
  return (
    <div className="border-b border-black p-3 last:border-b-0">
      <h3 className="font-semibold text-lg mb-2">{header}</h3>
      {header=="دسته بندی"?<div
            className="flex justify-between px-8 md:px-4 hover:bg-gray-300"
          
          >
            <div className="">
              <input
                type="radio"
                className="ml-3"
                name={header}
                onClick={()=>reqSever(0)}
                value={"همه محصولات"}
                id={"allP"}/>
              <label className="text-sm lg:text-base">
          همه محصولات
              </label>
            </div>
            <span></span>
          </div>:""}
      {data?.map((item, index) => {
        return (
          <div
            className="flex justify-between px-8 md:px-4 hover:bg-gray-300"
            key={index}
          >
            <div className="">
              <input
                type="radio"
                className="ml-3"
                name={header}
                onClick={()=>{;reqSever(item.GroupCode)}}
                value={item.value}
                id={item.value}/>
              <label htmlFor={item.GroupName} className="text-sm lg:text-base">
                {item.GroupName}
              </label>
            </div>
            <span>{item.count}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function Filter({ view, toggle }) {
  const [partGroup,setPartGroup] = useState([])
  useEffect(() => {
    getPartGroupList().then((res)=>{
       setPartGroup(res)
    })
    .catch((err)=>{

    }) 
   
  }, []);
  const { register, handleSubmit } = useForm();

  const [sliderData, setSliderData] = useState([]);
  return (
    <div
      className={`${
        view == "sm"
          ? "md:hidden w-full py-3 pb-10 transDown border-t  border-b border-black mt-5 "
          : "hidden md:block w-1/3 p-5 h-fill "
      }${toggle ? "" : "hidden"}`}
    >
      <form onSubmit={handleSubmit}>
        <h3 className="font-semibold text-lg mb-2 text-red-real">{`فیلتر قیمت`}</h3>
        <div className="">
          <Slider
            min={0}
            max={7000000}
            onChange={(min, max) => setSliderData([min, max])}
            view={view == "sm" ? "sm" : ""}
          />
        </div>
        <FilterItem header="دسته بندی" data={partGroup} />
        {/* <FilterItem header="برند کالا" data={brand} />
        <FilterItem header="برند کالا" data={brand} />
        <FilterItem header="برند کالا" data={brand} /> */}
      </form>
    </div>
  );
}
